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
// FIXME 
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

function containsBis(elm: number, elements: number[]): boolean {
    let found: boolean = false;
    for (const each of elements) {
        if (each == elm) {
            found = true; break;
        }
    }
    return found;
}

function isLeapYearComplicate(year: number): boolean {
    return ((year % 400) == 0) ? true :
        (((year % 100) == 0) ? false :
            (((year % 4) == 0) ? true :
                false));
}



function indexOf(str, query) {
    for(var i = 0; i < str.length; i++) {
      for(var q = 0; q < query.length; q++) {
        if (str[i+q] !== query[q]) {
          break;
        }
        if (q === query.length - 1) {
          return i;
        } 
      }
    }
     return -1;
  }

interface User {
    email: string

}

function isPalindrome(str: string): boolean {
    var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;
    if (cstr === "") {
        return false;
    }
    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {
        if (cstr.length === 1) {
            return true;
        } else {
            ccount = (cstr.length - 1) / 2;
        }
    }
    for (var x = 0; x < ccount; x++) {
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            return false;
        }
    }
    return true;
}
    isPalindrome('madam');
    isPalindrome('nurses run');
    isPalindrome('fox');

    interface Style {
        background : string
    }
    interface Email {
        value: string
        style: Style;
    }

    function validateEmail(email: Email): string {
        let error:string="";
        let tfl:string = email.value.trim();                
        let emailFilter:RegExp = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
        let illegalChars:RegExp = /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
        if (email.value == "") {
            email.style.background = 'Yellow';
            error = "You didn't enter an email address.\n";
        } else if (!emailFilter.test(tfld)) {         
            email.style.background = 'Yellow';
            error = "Please enter a valid email address.\n";
        } else if (email.value.match(illegalChars)) {
            email.style.background = 'Yellow';
            error = "The email address contains illegal characters.\n";
        } else {
            email.style.background = 'White';
        }
        return error;
    }

function validateEmail(email: Email): string {
    const emailFilter : RegExp = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    const illegalChars: RegExp = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    let error   : string = "";
    let tfl     : string = email.value.trim();

    if (email.value == "") {
        email.style.background = 'Yellow';
        error = "You didn't enter an email address.\n";

    } else if (!emailFilter.test(tfld)) {
        email.style.background = 'Yellow';
        error = "Please enter a valid email address.\n";

    } else if (email.value.match(illegalChars)) {
        email.style.background = 'Yellow';
        error = "The email address contains illegal characters.\n";

    } else {
        email.style.background = 'White';
    }
    return error;
}

function isLeapYear(year: number): boolean {
    if (year % 400 == 0 && year % 100 == 0) {
        return true;
    }

    if (year % 100 == 0) {
        return false;
    }

    return (year % 4 == 0);
}