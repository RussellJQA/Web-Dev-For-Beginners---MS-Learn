var one = 1;
// original way to define variables in JS
// function-scoped
// may be available before its declaration {but will be undefined then}

let two = 2
// block=scoped 
// only available after its declaration

const three = 3;
// like 'let', is block=scoped 
// only available after its declaration

console.log(one);

/* Where to use what:
    const: by default
    let: in loops
    var: not usually needed
*/