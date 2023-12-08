export function fizzBuzz(num) {
    let output = ""
    for (let i = 1; i <= num; i++) {
        if ((i % 5 == 0) && (i % 3 == 0)) {
            output += "FizzBuzz, ";
        }
        else if ((i % 5 == 0) && (i % 3 != 0)) {
            output += "Buzz, ";
        }
        else if (i % 3 == 0) {
            output += "Fizz, ";
        }
        else {
            output += i + ", ";
        }
    }
    console.log(output.slice(0, -2));
}