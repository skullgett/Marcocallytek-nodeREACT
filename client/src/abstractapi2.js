const axios = require('axios');
axios.get('https://phonevalidation.abstractapi.com/v1/?api_key=c91304cb1dad417aafcc5d1a41961d01&phone=14152007986')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });