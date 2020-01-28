function choice(arr){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export { choice };
