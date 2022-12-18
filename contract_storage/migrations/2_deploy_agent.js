const fs = require("fs");
const path = require("path");
var Case = artifacts.require("Case");

module.exports = function (deployer) {
  deployer.deploy(Case).then(() => {
    let config = `
    const contractAddress = "${Case.address}"
  `;
    let configCard = `
    const contractAddress = "${Case.address}"
    module.exports = {contractAddress}
    `;

    let data = JSON.stringify(config);
    // fs.writeFileSync(
    //   path.join(__dirname, "../src/js/contractAddress.js"),
    //   config
    // );
    // fs.writeFileSync(
    //   path.join(__dirname, "../card/contractAddress.js"),
    //   configCard
    // );
  });
};
