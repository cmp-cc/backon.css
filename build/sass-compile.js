const sass = require('node-sass')
const fs = require('fs');
const path = require('path')

sass.render({
  file: path.resolve(__dirname, '../scss/backon.scss'),
  outputStyle:'expanded',
},function(sassError, result){
  if(sassError) throw sassError

  console.log('Sass Compiled')
  fs.writeFileSync('../dist/backon.min.css', result.css);
})

