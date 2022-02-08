const http=require('http')
const url=process.argv[2]
http.get(url,function(resp){
    resp.on('data',function(e){
        console.log(e.toString());
    })
})