const sass = require('node-sass')
const fs = require('fs');
const path = require('path')

compileSass('../scss/backon.desktop.scss','../dist/backon.desktop.min.css')
compileSass('../scss/backon.mobile.scss','../dist/backon.mobile.min.css')
compileSass('../scss/backon.responsive.scss','../dist/backon.responsive.min.css')

function compileSass(sourceFile,resultFile){
  sass.render({
    file: path.resolve(__dirname, sourceFile),
    outputStyle:'expanded',
  },function(sassError, result){
    if(sassError) throw sassError
    fs.writeFileSync(resultFile, result.css);
  })
}

console.log('compile result')