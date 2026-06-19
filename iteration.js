function upperCase (str){
    return str.toUpperCase();
}

let birds =['pidegeon', 'spaarow', 'swan', 'kingfisher', 'owl'];

for (let bird of birds){
    console.log(bird)
}

let upperBirds = birds.map(upperCase);

console.log(upperBirds);

