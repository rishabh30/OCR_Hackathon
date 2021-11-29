const axios = require('axios');
const fs = require('fs');

const API_KEY = ''

if (!API_KEY) {
  console.log('No API key provided')
} 

var imageFile = fs.readFileSync('./resources/image.jpg');
var encoded = Buffer.from(imageFile).toString('base64');


const apiCall = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

const reqObj = {
    requests:[
        {
          "image":{
            "content": encoded
          },
          "features":[
                {
                    "type":"TEXT_DETECTION"
                }
            ]
        }
      ]
}

axios.post(apiCall, reqObj).then((response) => {
    fs.writeFile('./results/image_result.json', JSON.stringify(response.data.responses, null, 4), function (err) {
        if (err) throw err;
        console.log('Text extracted in ./results');
      });
    // console.log(response);
    // console.log(JSON.stringify(response.data.responses, undefined, 4));
}).catch((e) => {
    console.log(e.response);
});
