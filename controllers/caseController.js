const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const handlerFactory = require('./handlerFactory');
const Case = require('../models/caseModel');
const catchAsync = require('../utils/catchAsync');

const { cloudinary, deleteProductImage } = require('../utils/cloudinaryUpload');

const multerFilter = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(
      new AppError('Not an image! Please upload only images.', 400),
      false
    );
  }
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    public_id: (req, file) =>
      `${file.originalname.split('.')[0]}-${Date.now()}`,
    folder: 'ledger',
  },
});

exports.uploadEvidence = multer({
    storage,
    limits: { fileSize: 1000000 },
    fileFilter: multerFilter,
  }).single('evidence');

exports.addCase = handlerFactory.createOne(Case);

exports.addEvidence = catchAsync(async (req, res, next) => {
    const caseDetails = await Case.findById(req.params.id);
    caseDetails.images.push(req.file.path);

    await caseDetails.save({ validateBeforeSave: false });

    res.status(200).json({
      status: 'success',
      data: {
        data: caseDetails,
      },
    });
});

exports.getCase = handlerFactory.getOne(Case);