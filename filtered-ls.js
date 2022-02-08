const fs = require('fs');
const path=require('path')
const chemin=process.argv[2]
const filetype='.'+process.argv[3].toString()

fs.readdir(chemin,(err,files)=>{
  (err) ? 
  console.log(err):
  console.log(
    (files.filter(file=>(path.extname(file)==filetype.toLocaleLowerCase() ? file:null))).join('\n')
  )
})