describe('Bubble sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  
  it('handles an array with one element', function() {
    let testArr = [1];
    expect(bubbleSort(testArr)).toEqual([1]);
  });
  
  it('sorts an unsorted array with two elements', function() {
    expect(bubbleSort([2,1])).toEqual([1,2]);
  });
  
  it('handles an unsorted array with > 2 elements', function() {
    expect(bubbleSort([3,2,1])).toEqual([1,2,3]);
  })
});
