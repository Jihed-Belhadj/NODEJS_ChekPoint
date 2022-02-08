var sum=0
const t=process.argv
for(let i=2;i<t.length;i++)
{
sum+=parseInt(t[i]);
}
console.log(sum)