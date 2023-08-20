export default function updateCardsClicked(array, index, callback) {
	const newCards = [...array];
	newCards[index].isClicked = true;
	callback(newCards);
}
