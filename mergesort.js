function mergeSort(array)
{
    if (array.length <= 1)
    {
        return array;
    }
    else {
        const mid = Math.floor(array.length / 2);
        const leftHalf = array.slice(0, mid);
        const rightHalf = array.slice(mid);

        // console.log(leftHalf)
        // console.log(rightHalf)

        const leftSorted = mergeSort(leftHalf);
        const rightSorted = mergeSort(rightHalf)
        
        return merge(leftSorted, rightSorted);
    }
}

function merge(left, right)
{
    let result = [];
    let i = 0;
    let j = 0;

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

    result = result.concat(left.slice(i)).concat(right.slice(j));

    return result;
}


const unsortedArray = [3, 8, 4, 9, 2, 1, 8, 15, 5, 10, 11, 98]

const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray)