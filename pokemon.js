console.log("my Pokemon");
let myPokemon = 'my pokemon are ';
const pokemon = ["Starmie" , "Pikachu", "Voltorb", "Charmander"];

for(let i = 0;  i < pokemon.length ;  i++ ) {
    if (i == pokemon.length - 1){
        myPokemon += `and ${pokemon[i]}`;
    }
    else{
        myPokemon += `${pokemon[i]}, `;

    }
}
console.log(myPokemon);
