const fetch = require('node-fetch');


//Check returned promise is ok, otherwise throw error 
function checkStatus(res) {
    if (res.ok) {
        return res;
    } else {
        throw new Error(`${res.status} ${res.statusText}`);
    };
};


function requestMultipleUrls(arr) { 
    //accept only arrays
    if (typeof arr !== Array && !arr) {
        console.log(`Please enter URLs in an array`)
        return 
    } 

    //fetch each item in arr
    const promises = arr.map(urlItem => 
        fetch(urlItem)
        .then(checkStatus)
        .then(response => response.json())
    );

    //return fetched content as a promise
    return Promise.all(promises).catch(error => `One or more URLs failed to load with the following ${error}`);
};


  

module.exports = requestMultipleUrls