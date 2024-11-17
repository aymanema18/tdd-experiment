function caesarCipher(str, num) {
    let temp = str.split('');
    str = temp;
    for (let i = 0; i < str.length; i++) {
        if (
            (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) ||
            (str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123)
        ) {
            str[i] = String.fromCharCode(str[i].charCodeAt() + num);
            while (str[i].charCodeAt() > 90 && str[i].charCodeAt() < 96) {
                str[i] = String.fromCharCode(64 + str[i].charCodeAt() - 90);
            }

            while (str[i].charCodeAt() > 122) {
                str[i] = String.fromCharCode(96 + str[i].charCodeAt() - 122);
            }
        }
    }
    return str.join('');
}

export { caesarCipher };
