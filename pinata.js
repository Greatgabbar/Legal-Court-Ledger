var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('file', fs.createReadStream('./learning/jwt_auth_works.png'));
data.append('pinataOptions', '{"cidVersion": 1}');
data.append('pinataMetadata', '{"name": "MyFile", "keyvalues": {"company": "Pinata"}}');

var config = {
  method: 'post',
  url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjNzU2NzNjMS03NWMzLTQzN2QtYTgzMi1kZjM0YTQxYTZmMmUiLCJlbWFpbCI6ImFndXB0YTE0X2JlMTlAdGhhcGFyLmVkdSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJmN2EzODYyNjlmYjc4NjNiOWQzNCIsInNjb3BlZEtleVNlY3JldCI6IjgzZTYzZjVhZTBiNGE4ZTE2MDJiZWM4MDJmYWVjMTUxZDczMTViZmIzYzFhYzE0M2UwNjdlMTQ0ZmEzNzRkNDUiLCJpYXQiOjE2Njc5MDM0NjN9.xc60N_45BELkbHMHJRw_A-9vpPOpq2emdixFSg4EVwc', 
    ...data.getHeaders()
  },
  data : data
};

axios(config).then((res) => {
    console.log(res.data);
})
