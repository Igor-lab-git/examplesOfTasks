let s = 0;
let a = 10;
let b = 5;

for (let i = 1; i <= a; ++i) {
    if (i % 5 === 0) continue
    for (let j = 1; j <= b; ++j) {
        if (j % 5 === 0) continue
        s += i * j;
        console.log(s)
    }
}