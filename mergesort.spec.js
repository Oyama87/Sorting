describe('mergeSort', function() {
  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });
  
  it('handles an array with one element', function() {
    expect(mergeSort([1])).toEqual([1]);
  });
  
  it('handles an array with 2 elements', function() {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
  })
})

describe('Split helper', function() {
  it('splits an array into two arrays', function() {
    expect(split([1, 2])).toEqual( [ [1],[2] ] );
  })
})

describe('Merge helper', function() {
  it('merges two empty arrays', function() {
    expect(merge([ [],[] ])).toEqual([]);
  });
  
  it('merges and sorts two arrays with a single value each', function() {
    expect(merge([ [2],[1] ])).toEqual([1,2]);
  });
  
  it('merges and sorts two arrays with multiple values each', function() {
    expect(merge([ [2,4],[1,3] ])).toEqual([1,2,3,4]);
    expect(merge([ [2,4],[1,3,5] ])).toEqual([1,2,3,4,5]);
    expect(merge([ [2,4,7],[1,3,5,10] ])).toEqual([1,2,3,4,5,7,10]);
    expect(merge([ [],[1,3,5] ])).toEqual([1,3,5]);
  })
})
