function revString(str) {
    let temp = [];

    let s = str.split('');
    for (let i = s.length - 1; i >= 0; i--) {
        temp.push(str[i]);
    }
    return temp.join('');
}
revString('yes');

export { revString };
