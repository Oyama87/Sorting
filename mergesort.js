function mergeSort(arr) {
  
  
  return arr;
}

function split(arr) {
  let newArr = [];
  newArr.push([arr[0]]);
  newArr.push([arr[1]]);
  return newArr;
}

function merge(arr) {
  let firstArr = arr[0], secondArr = arr[1];
  let pointer1 = 0, pointer2 = 0;
  let returnedArr = [];
  let firstArrFinished = pointer1+1 > firstArr.length;
  let secondArrFinished = pointer2+1 > secondArr.length;
  
  while(!firstArrFinished && !secondArrFinished) {
    if(firstArr[pointer1] < secondArr[pointer2]) {
      returnedArr.push(firstArr[pointer1]);
      pointer1++;
      firstArrFinished = pointer1+1 > firstArr.length;
    }
    else if(secondArr[pointer2] < firstArr[pointer1]) {
      returnedArr.push(secondArr[pointer2]);
      pointer2++;
      secondArrFinished = pointer2+1 > secondArr.length;
    }
  }
   debugger;
  if(firstArrFinished) {
    returnedArr = returnedArr.concat(secondArr.slice(pointer2));
  }
  else if(secondArrFinished) {
    returnedArr = returnedArr.concat(firstArr.slice(pointer1));
  }
  
  return returnedArr;
}
