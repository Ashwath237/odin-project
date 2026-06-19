function upperCase (str){
    return str.toUpperCase();
}

function kstr(k){
    return k.startsWith('k');
}

let birds =['pidegeon', 'sparow', 'swan', 'kingfisher', 'owl','kite','kingbird'];

for (let bird of birds){
    console.log(bird)
}

let upperBirds = birds.map(upperCase);
let kletter = birds.filter(kstr);
console.log(upperBirds);
console.log(kletter);
