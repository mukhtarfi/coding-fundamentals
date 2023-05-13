// formula : n*(n+1)*(n+2)/6
// ==========================

function tetra(n){  
    // your code
    // tetrahedral number formula
    var total = n*(n+1)*(n+2)/6;
    return total;
}

console.log(tetra(2)) // === 4
console.log(tetra(5)) // === 35
console.log(tetra(6)) // === 56