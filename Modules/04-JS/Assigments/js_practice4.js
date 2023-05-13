function fibonacci(n) {
    if (n === 0) return []
    if (n === 1) return [0]

    const fib = [0,1]

    for (i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }

    console.log(fib)
    return fib
}

fibonacci(10)