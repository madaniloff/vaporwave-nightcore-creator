
// import fs module in which writeFile function is defined.
const fsLibrary  = require('fs')
  
// Data which will need to add in a file.
let data = "vaporwave\nnightcore"
  
// Write data in 'newfile.txt' .
fsLibrary.writeFile('pipe.txt', data, (error) => {
    
    // In case of a error throw err exception.
    if (error) throw err;
})
