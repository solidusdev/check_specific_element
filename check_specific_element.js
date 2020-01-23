let sample_array = [2, 5, 9, 6];

let check_for_element = (arr, element) => {

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === element) {
            return true;
        }
    }

    // does not exist
    return false;
}

console.log(check_for_element(sample_array, 1));    // false
console.log(check_for_element(sample_array, 5));    // true
console.log(check_for_element(sample_array, 9));    // true