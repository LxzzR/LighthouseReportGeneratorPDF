![lighthouse test with 100% pass](/images/lighthouse.png)

# Lighthouse Report Generator

This stand alone tool autotomates Lighthouse report generation and doesn't need to be integrated with any projects - Simply plug in the URLs you'd like to test into the index.js file, then generate your Lighthouse reports directly from the command line.

## Prerequisites

- Recent version of chrome
- Node.js

## Usage

1. Run `npm install`

2. In index.js :

- Add all URLs to test as strings to the "urlsToCheck" array
- Select the Lighthouse categories to test by commenting or un-commenting the options in the "categories" array

3. Run `nmp start`

## Report Outcomes

- PDF Lighthouse report files will be saved to "pdf-files" directory
- HTML Lighthouse report files will be saved to "html-files" directory
