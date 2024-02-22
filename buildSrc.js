const fs = require('fs');
const Zip = require('adm-zip');

function main() {
  if (
    !(
      fs.existsSync('.webpack/service/server') &&
      fs.existsSync('.serverless/portfolio.zip')
    )
  ) {
    console.error('webpack & package not done.');
    return;
  }

  const zip = new Zip('.serverless/portfolio.zip');

  zip.addLocalFolder('.webpack/service/server', './server');
  zip.writeZip();
}

main();
