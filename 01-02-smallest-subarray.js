function smallest_subarray_sum(s, arr) {
	// create following to enable functionalities
	// window sum for comparing sum
	// minLength for tracking length
	// windowStart for taking out the start value
	let windowSum = 0,
		minLength = Infinity,
		windowStart = 0;

	// create simple loop
	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		// first thing we do is to update the windowSum
		windowSum += arr[windowEnd];
		// create while loop for every iteration inside for loop
		while (windowSum >= s) {
			// track the min length basically by getting the min value of two
			minLength = Math.min(minLength, windowEnd - windowStart + 1);
			// we take out the first value from the windowSum
			windowSum -= arr[windowStart];
			// update the windowStart, that way we will take out next value on next iteration
			windowStart += 1;
		}
	}
	// now we check if we actually found the value we wanted
	if (minLength === Infinity) {
		return 0;
	}
	return minLength;
}
