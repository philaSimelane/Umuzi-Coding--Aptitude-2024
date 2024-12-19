function cVow(s) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const char of s) {
        if (vowels.includes(char)) {
            console.log(char);
            count++;
        }
    }

    return count;
};

const s = "Hello World";
console.log(cVow(s));