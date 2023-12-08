export function arraysAreEqual(arr1, arr2) {
  let str1 = arr1.toString();
  let str2 = arr2.toString();

  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}
//* Code avant / Test failed
/*
export function arrayAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
*/