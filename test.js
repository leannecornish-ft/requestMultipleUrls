const { expect } = require('chai');
const chai = require('chai');
const { assert } = require('chai')
const chaiAsPromised = require('chai-as-promised');
const requestMultipleUrls = require('./requestMultipleUrls');

chai.use(chaiAsPromised)

describe('Global', () => {
    const urls = [
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
        ];

    describe('Function working', function() {
        it('Fulfills a promise', function() {
            return assert.isFulfilled(Promise.resolve(requestMultipleUrls(urls)))
        })

        it('Returns an array of contents', function() {    
            let result = requestMultipleUrls(urls)
            return expect(result).to.eventually.be.a('array')   
        });
    })

    describe('Function given bad data', function() {
        it('Returns a meaningful error if a URL does not load', function() {
            result = requestMultipleUrls([1,2,3])
            return expect(result).to.eventually.contain('One or more URLs failed to load with the following')
        });
    });
});
