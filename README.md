# requestMultipleUrls

A package that takes a list of URLs and returns their contents



# How to use

To use, call requestMultipleURLs([arr]), where arr is an array or URLs. 

It will return:

-An array of JSON objects of content returned from the URLs

-If any URL is invalid, it will return `One or more URLs failed to load with the following <error code and descrption>`.

-It will return and log `Please enter URLs in an array` if a valid array is not passed.



# Installation

Run: npm install to install dependencies.



# Tests

Tests are run using mocha and chai, run: npm test.





