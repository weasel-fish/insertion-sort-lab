function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++){
        if(array[i]< min){
            min = array[i]
            minIndex = i
        }
    }
    console.log(array)
    return array.splice(minIndex, 1)
}

// console.log(findMinAndRemove([ 3, 4, 5, 6, 2, 7]))

function selectionSort(array){
    const sortedArr = [ ]
    const length = array.length
    for(let i = 0; i < length; i++){
        console.log(i)
        sortedArr.push(findMinAndRemove(array)[0])
    }
    return sortedArr
}

console.log(selectionSort([12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]))

