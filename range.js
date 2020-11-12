//start, end, or step being undefined
//start being greater than end
//step being 0, or negative

const range=function(start,end,step){
  let arr=[]
  if((start === undefined || step === undefined || end === undefined)||(start>end) || (step <=0)){
    return arr;
  }
  else{
  arr.push(start);
  val=start+step;
  i=1;
  while(arr[i-1]<end){
    arr.push(val);
    val += step;
    i++;
  }
  return arr;
}
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));