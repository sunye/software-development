function f(num: number):number {
    var result: number = 1;
    while(num >=1) { 
        result = result * num; 
        num--; 
    }
    return result;
}
console.log(f(5));

function g():number {
    var m:number;
    for(let i : number = 1; i <= 10; i=i+1) { 
        m = i;
    }
    return m;
}

console.log(g())