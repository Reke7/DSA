function mergeSort(array)
{
    // Checks if the length of the array is 1 or less
    // If its true, it returns the array as it is already sorted
    if (array.length <= 1)
    {
        return array;
    }
    else {
        // This codes helps split the array into halves
        const mid = Math.floor(array.length / 2);
        const leftHalf = array.slice(0, mid);
        const rightHalf = array.slice(mid);

        // console.log(leftHalf)
        // console.log(rightHalf)

        // The halves will be recursively called to sort them
        const leftSorted = mergeSort(leftHalf);
        const rightSorted = mergeSort(rightHalf);
        
        // The halves will be merge using the merge function
        return merge(leftSorted, rightSorted);
    }
}

function merge(left, right)
{
    let result = [];
    let i = 0;
    let j = 0;

    // The while loop compares the elements from the left and right arrays then pushes the smaller one to the result array
    while (i < left.length && j < right.length)
    {
        if (left[i] < right[j])
        {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // This will append any remaining elements from both arrays in case one array is longer than the other
    result = result.concat(left.slice(i)).concat(right.slice(j));

    // This will return the merged and sorted array
    return result;
}


const unsortedArray = [3, 8, 4, 9, 2, 1, 8, 15, 5, 10, 11, 98]

const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray)