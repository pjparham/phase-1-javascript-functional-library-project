function myEach(collection, callback){
    let array = convertToArray(collection)
    for (let i = 0; i < array.length; i++){
        callback(array[i])
    }
    return collection
}

function myMap(collection, callback){
    let array = convertToArray(collection)
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray
}

function convertToArray(collection){
    if (Array.isArray(collection) == false){
        return Object.values(collection)
    }
    else return collection
}

function myReduce(collection, callback, acc){
    let array = convertToArray(collection)
    let workingArray = [...array]
    if (acc === undefined){
        acc = workingArray[0]
        workingArray.shift()
    }
    for (let i = 0; i < workingArray.length; i++){
        let newValue = callback(acc, workingArray[i], array)
        acc =+ newValue
    }
    return acc
}

function myFind(collection, predicate){
    let array = convertToArray(collection)
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])){
            return array[i]
        }
    }
    return undefined
}

function myFilter(collection, predicate){
    let array = convertToArray(collection)
    let filterArray = []
    for (let i = 0; i < array.length; i++){
        if(predicate(array[i])){
            filterArray.push(array[i])
        }
    }
    return filterArray
}

function mySize(collection){
    let array = convertToArray(collection)
    return array.length
}

function myFirst(array, n){
    if (n === undefined){
        return array[0]
    }
    else{
        return array.slice(0, n)
    }
}

function myLast(array, n){
    if (n === undefined){
        return array[array.length - 1]
    }
    else{
        return array.slice(-n)
    }
}

function myKeys(object){
    return Object.getOwnPropertyNames(object)
}

function myValues(object){
    return Object.values(object)
}

