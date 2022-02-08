
const net=require('net')
const path = process.argv[2]
var server=net.createServer(function(socket){
    var date= new Date()
    const y=date.getFullYear()
    var m=date.getMonth()+1
    var d=date.getDate()
    var h=date.getHours()
    var mn=date.getMinutes()
    m<10 ? m='0'+m:m
    d<10 ? d='0'+d:d
    h<10 ? h='0'+h:h
    mn<10 ? mn='0'+mn:mn
    var s=y+'-'+m+'-'+d+' '+h+':'+mn+'\n'
    socket.end(s)
})
server.listen(path)