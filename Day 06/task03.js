export function countGs(str) {
    let number = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "G") {
            number++;
        }
    }
    return number;
}
