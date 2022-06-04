const nonRepeatSubstring = (str) => {
	// basically following is what we need to use the sliding window technique
	// start of window set to 0
	let windowStart = 0;
	// max length of substring to track
	let maxLength = 0;
	// hash table to store characters and their frequency
	let charIndexMap = {};

	// now create simple loop to iterate through the string
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		// we grab the right character
		const rightChar = str[windowEnd];

		// check if right character is already in the map
		if (rightChar in charIndexMap) {
			// if it is, then we need to move the windowStart to the right
			windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
		}
		// insert the rightChart into the map
		charIndexMap[rightChar] = windowEnd;
		// remember the max length so far
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
	}
	// and return that max length. Voila!
	return maxLength;
};

nonRepeatSubstring('abccde');
