function cap(str) {
    let s = str.split('');
    return `${s.shift().toUpperCase()}${s.join('')}`;
}

export { cap };
