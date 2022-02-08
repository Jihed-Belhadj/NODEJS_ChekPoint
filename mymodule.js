const fs = require('fs');
const path=require('path')
module.exports= function(dirname,filname,callback){
    const filetype='.'+filname
    var res=[]
    fs.readdir(dirname,(err,files)=>{
        if(err){
            callback(err, null)
        }
        else{
            files.forEach(function(file){
                if(path.extname(file)==filetype)
                res.push(file)
            })
            callback(null,res)
        }         
})
}
    