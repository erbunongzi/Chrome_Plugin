var numSquares = function(n) {
    const result = new Array(n+1).fill(999999999);
    result[0] = 0;
    for(let i = 1;i <= n;i++){
        for(let j = 1; i-j*j >= 0;j++) {
            result[i] = Math.min(result[i],result[i-j*j]+1)
        }
    }
    return result[n];
};

