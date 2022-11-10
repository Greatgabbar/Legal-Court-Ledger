const multer = require('multer');
const FormData = require('form-data');
const axios = require('axios');
const catchAsync = require('../utils/catchAsync');

const storage = multer.memoryStorage();
exports.upload = multer({ storage: storage });

exports.testPinata = catchAsync(async (req, res, next) => {
    try{
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
            'Authorization': token,
            // ...data.getHeaders()
          },
          data : formData
        };

        const response = await axios(config);

        console.log(response.data);
      
        res.status(200).json({
          status: 'success',
          data: formData,
        });
    }catch(err){
        console.log(err);
    }
});
