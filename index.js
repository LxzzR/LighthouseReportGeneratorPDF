// Requirements 
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const pdf = require("html-pdf-chrome");
const { writeFileSync } = require("fs");

// Add URLs to run Lighthouse tests on
const urlsToCheck = ["http://google.ca", "http://twitter.com", "http://www.facbook.com"]
// Comment or un-comment catagories to test
const categories = [
  "accessibility",
  // 'performance',
	// 'best-practices',
	// 'seo',
]

// Generates reports for all device options
const formFactors = ["mobile", "desktop"];
// Keeps chrome from opening on every test
const chromeConfig = {chromeFlags: ["--headless"]};


(async () => {
  const chrome = await chromeLauncher.launch(chromeConfig);
  const lighthouseConfig = {output: "html", port: chrome.port, onlyCategories: categories};
  const pdfOptions = {port: chrome.port};

  // Nested loop generates a test for every URL - and in every form factor (mobile & desktop)
  for (const theUrl of urlsToCheck){
    for (const formFactor of formFactors) {
      const result = await lighthouse(theUrl, {...lighthouseConfig, emulatedFormFactor: formFactor});
      const fileName = `${theUrl.replace("http://", "")}-${formFactor}`;
      
      // Saves file as html document
      writeFileSync(`./html-files/${fileName}.html`, result.report);
      // Saves file as pdf document 
      pdf.create(result.report, pdfOptions).then((pdf) => pdf.toFile(`./pdf-files/${fileName}.pdf`));
    }
  }
})()  