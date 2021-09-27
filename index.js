function findMinAndRemove(array){
    let min = array[0]
    let minDex = 0

    for(let i = 1; i < array.length; i ++) {
        if(array[i] < min) {
            minDex = i
            min = array[i]
        }
    }

    array.splice(minDex, 1)
    return min
}

function selectionSort(array){
    let sortedArr = []

    while(array.length) {
        sortedArr.push(findMinAndRemove(array))
    }

    return sortedArr
}

console.log(selectionSort([3, 2, 6, 1]))