const merge = function (arr1, arr2){
  let arr3=[];
  arr3.length=arr1.length+arr2.length;
  let i=0;
  let j=0;
  let k=0;
while(i<arr1.length && j<arr2.length){
  if (arr1[i]<arr2[j]){
    arr3[k] = arr1[i];
    i++;
    k++;
  }
  else {
    arr3[k]=arr2[j];
    j++;
    k++;
  }
}
while(i<arr1.length){
  arr3[k]=arr1[i];
  i++;
  k++;
}
while(j<arr2.length){
  arr3[k]=arr2[j];
  j++;
  k++;
}
return arr3;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);