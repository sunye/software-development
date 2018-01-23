let list: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

function sumArray(values : number[]): number {
    let sum: number;
    for (let each of list) {
        sum = sum + each;
    }
    return sum;
}

function euclideanNorm(values: number[]): number {
    let retval: number = 0;
    for(let i : number = 0; i  < values.length ; i+=1) {
        retval += values[i] * values[i]
    }
    return Math.sqrt(retval);
}

function swap(begin: number, end: number) {
    if(begin > end) {
        let tmp: number = end;
        end = begin;
        begin = tmp;
    }
}

for(let i : number = 0; i < 10; i+=1) {
    for(let j : number = 0; j <= 20; j+=1) { 
        for(let k : number = 1; k <= 40; k+=1) { 
            // instructions
        }
    }
}

function functionThatTakesTime() {}
function now(): number {return 0}

function wait(delay: number) {
    let start: number = now();
    functionThatTakesTime();
    let elapsed = now() - start;
    console.log("The execution took " + elapsed.toString() + "seconds")
}


const maxNumberOfArticles: number = 24;
const tooManyArticles: number = 24;

let todayEvents:Event[] = eventsInRange("22/1/2018 00:00", "22/1/2018") 


// Calcul du plus grand commun diviseur de deux entiers
function pgcd(a: number, b: number) {
    while (a != b) {
        if (a > b) { 
            a -= b; 
        }
        else { 
            b -= a;
        }
    }
    return a;
}

function contain(str: string , substr: string ): boolean {
    if (str == null || substr == null) return false;
    if (substr === "") return true;

    // (...)
}

true ? 1 : 2; 


timeString = (hour > 12) ? "pm" : "am"; 


function contains(elm : number, elements: number[]): boolean {
    let found: boolean = false;
    let i: number = 0;
    while(!found && i < 0) {
        if (elements[i] == elm) {
            found = true;
        }
    }
    return found;
}

function containsBis(elm : number, elements: number[]): boolean {
    let found: boolean = false;
    for (const each of elements) {
        if (each == elm) {
            found = true;
            break;
        }
    }
    return found;
}

function isLeapYear(year: number): boolean {
    return ((year % 400) == 0) ? true :
        (((year % 100) == 0) ? false :
            (((year % 4) == 0) ? true :
                false));
}

