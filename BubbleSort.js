function bubbleSort(arr) {
  let swaps;
  while(swaps !== 0){
    swaps = 0;
    if(arr[1] < arr[0]) {
      swaps++;
      let temp = arr[1];
      arr[1] = arr[0];
      arr[0] = temp;
    }
  }
  return arr;
}
