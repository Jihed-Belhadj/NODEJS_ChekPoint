const mymodule=require('./mymodule')
mymodule(process.argv[2],process.argv[3],function(err,files){
    err ? console.log(err): files.forEach(function(file){console.log(file)})
        
    })
