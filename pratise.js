const requestMultipleUrls = require('./requestMultipleUrls');
const urls = [
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ft!!se-fsi.json',
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];
requestMultipleUrls().then(urlContent => {
    console.log(urlContent)
});
