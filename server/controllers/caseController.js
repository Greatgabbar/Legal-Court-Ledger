const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const handlerFactory = require('./handlerFactory');
const Case = require('../models/caseModel');
const catchAsync = require('../utils/catchAsync');
const FormData = require('form-data');
const axios = require('axios');

const { cloudinary, deleteProductImage } = require('../utils/cloudinaryUpload');
const Evidence = require('../models/evidenceModel');

// const multerFilter = (req, file, callback) => {
//   if (file.mimetype.startsWith('image')) {
//     callback(null, true);
//   } else {
//     callback(
//       new AppError('Not an image! Please upload only images.', 400),
//       false
//     );
//   }
// };

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     public_id: (req, file) =>
//       `${file.originalname.split('.')[0]}-${Date.now()}`,
//     folder: 'ledger',
//   },
// });

const storage = multer.memoryStorage();
exports.uploadEvidence = multer({
  storage,
  limits: { fileSize: 1000000 },
}).single('evidence');

exports.addCase = handlerFactory.createOne(Case);

exports.addEvidence = catchAsync(async (req, res, next) => {
  try{
  const caseDetails = await Case.findById(req.params.id);

  const buffer = req.file.buffer;

  const formData = new FormData();
  formData.append('file', buffer, {
    filename: `${req.file.originalname.split('.')[0]}-${Date.now()}`,
  });

  let token = `Bearer ${process.env.PINATA_API_JWT}`;

  var config = {
    method: 'post',
    url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
    headers: {
      Authorization: token,
      // ...data.getHeaders()
    },
    data: formData,
  };

  const response = await axios(config);
  console.log(response);

  const pinataFile = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`; 

  const evidence = await Evidence.create({
    title: req.body.title,
    des: req.body.des,
    file: pinataFile,
  });

  caseDetails.images.push(evidence._id);

  await caseDetails.save({ validateBeforeSave: false });

  res.status(200).json({
    status: 'success',
    data: {
      data: caseDetails,
    },
  });
}catch(err){
  console.log(err);
}
});

exports.getCase = handlerFactory.getOne(Case);
