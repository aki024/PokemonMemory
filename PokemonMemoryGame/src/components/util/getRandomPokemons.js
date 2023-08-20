const MIN_ID = 1;
const MAX_ID = 300;

//TODO : ADD VALIDATION SO NO DUPLICATES FROM API

export default async function getRandomPokemons(amount) {
	const pokemons = [];

	const getPokemon = async (id) => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const { name, sprites } = await res.json();
		const image = sprites['front_shiny' || 'front_default'];
		return { name, image };
	};

	const setRandomPokemons = async () => {
		let pokemonInfo;
		let id = 0;
		let i = 0;

		while (i < amount) {
			id = randomIntFromInterval(MIN_ID, MAX_ID);

			let pokemon = await getPokemon(id);
			let { name, image } = pokemon;

			pokemonInfo = { id, name, image, isClicked: false };
			pokemons.push(pokemonInfo);

			i++;
		}
	};

	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	await setRandomPokemons();
	return pokemons;
}
