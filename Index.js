n = 1234;
console.log(n.toString(2).split('').map((digit) => (digit === '1' ? '1' : '')).join('').length)