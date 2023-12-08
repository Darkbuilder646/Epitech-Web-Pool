export function arrayFiltering(array, test) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i]) == true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}