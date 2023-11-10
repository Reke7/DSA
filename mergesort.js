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

        console.log(leftHalf)
        console.log(rightHalf)
    }
}

const unsortedArray = [3, 8, 4, 9, 2, 1, 8, 15, 5, 10, 11, 98]

const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray)