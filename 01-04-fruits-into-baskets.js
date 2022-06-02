// create function to find longest substring with k distinct characters
const fruitsIntoBaskets = function (fruits) {
	// create a hash to store the characters and their frequency
	const fruitFrequency = {};
	// create a variable to store the longest substring
	let maxFruitCount = 0;
	// create window start and end variables
	let windowStart = 0;
	let windowEnd = 0;

	// loop through the array
	for (windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
		// grab the right fruit
		const rightFruit = fruits[windowEnd];
		// check if the right fruit is in the hash
		if (!fruitFrequency[rightFruit]) {
			// if not add it to the hash
			fruitFrequency[rightFruit] = 0;
		}
		// increase the frequency of the right fruit
		fruitFrequency[rightFruit] += 1;
		// check if the frequency of the right fruit is greater than 2
		while (Object.keys(fruitFrequency).length > 2) {
			// if it is, grab the left fruit
			const leftFruit = fruits[windowStart];
			// decrease the frequency of the left fruit
			fruitFrequency[leftFruit] -= 1;
			// if the frequency of the left fruit is 0, delete it
			if (fruitFrequency[leftFruit] === 0) {
				delete fruitFrequency[leftFruit];
			}
			// move the window start to the right
			windowStart += 1;
		}
		// finally update the max fruit count
		maxFruitCount = Math.max(maxFruitCount, windowEnd - windowStart + 1);
	}
	// return the max fruit count. Voila!
	return maxFruitCount;
};

fruitsIntoBaskets(['A', 'B', 'C', 'B', 'C']);
