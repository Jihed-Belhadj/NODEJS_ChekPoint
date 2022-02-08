const fs=require('fs');
const file=process.argv[2]

fs.readFile(file, function (err, data){
	const res=((data.toString()).split('\n')).length-1
	err ? console.log(err):console.log(res)

})