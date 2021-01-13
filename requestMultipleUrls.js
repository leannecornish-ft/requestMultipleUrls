const fetch = require('node-fetch');

function checkStatus(res) {
    if (res.ok) {
        return res;
    } else {
        throw new Error(`${res.status} ${res.statusText}`);
    };
};


function requestMultipleUrls(arr) { 
    
    const promises = arr.map(urlItem => 
        fetch(urlItem)
        .then(checkStatus)
        .then(response => response.json())
    );

    return Promise.all(promises).catch(error =>`One or more URLs failed to load with the following ${error}`);
};


  

module.exports = requestMultipleUrls