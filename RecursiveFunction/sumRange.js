function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

sumRange(3)

// Como funciona?

// sumRange(3)
//     return 3 + sumRange(2)
//                     return 2 + sumRange(1)
//                                 return 1

// Assim temos que sumRange(3) é igual a:
// 3+(2+1) = 6