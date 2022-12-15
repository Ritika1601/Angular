let sort1 = (a:number,b:number,c:number) => 
{
 if(a>b && a>c)
 {
    console.log(a);
 }
 else if(b>a && b>c)
 {
    console.log(b);
 }
 else
 {
    console.log(c);
 }
}
sort1(3,5,2);