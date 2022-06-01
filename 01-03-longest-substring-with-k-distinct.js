const longest_substring_with_k_distinct = (str, k) => {
	// where we store the longest substring
	const charFrequency = {};
	// where we count max length
	let maxLength = 0;
	// where we count current length
	let windowStart = 0;

	// basically we create a sliding window
	// we loop till windowEnd is lower than size of the str
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		// we grab the characters in every iteration
		const rightChar = str[windowEnd];
		// check if that's inside the char frequency
		if (!charFrequency[rightChar]) {
			// if not we add it to the char frequency
			charFrequency[rightChar] = 0;
		}
		// else we increment the frequency
		charFrequency[rightChar] += 1;
		// after increasing frequency, we check if we have more than k distinct characters
		// in the char frequency hash
		if (Object.keys(charFrequency).length > k) {
			const leftChar = str[windowStart];
			// if we have more than k distinct characters in the window
			// we update the leftChar in the charFrequency hash
			charFrequency[leftChar] -= 1;
			if (charFrequency[leftChar] === 0) {
				// if left char is not in charFrequency anymore, delete it
				delete charFrequency[leftChar];
			}
			// move the window to the right
			windowStart += 1;
		}
		// update max length
		// basically we check if current length is greater than max length
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
	}
	return maxLength;
};
