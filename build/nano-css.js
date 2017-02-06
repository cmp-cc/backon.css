const cssnano = require('cssnano');
const fs = require('fs');
const path = require('path')

const code = fs.readFileSync(path.resolve(__dirname, '../backon.css'))

cssnano.process(code.toString() ,{
}).then(function(result){
  fs.writeFileSync('../dist/backon.min.css', result.css);
  fs.writeFileSync('../dist/backon.min.less', result.css);
  fs.writeFileSync('../dist/backon.min.scss', result.css);
})