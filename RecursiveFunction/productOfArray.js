// esrever o produto de um array
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (arr) => {

    if (arr.length === 0) return 1;

    let result = arr[0] * productOfArray(arr.slice(1));

    return result;
};

module.exports = { productOfArray }