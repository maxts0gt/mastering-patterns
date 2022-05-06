const Heap = require('./collections/heap');

class MedianOfAStream {
	constructor() {
		// max heap is smaller numbers in ascending order [1, 2, 3, 4, 5, ... etc]
		this.maxHeap = new Heap([], null, (a, b) => a - b); // containing first half of numbers
		// min heap is larger numbers in descending order [10, 9, 8, 7, 6, ... etc]
		this.minHeap = new Heap([], null, (a, b) => b - a); // containing second half of numbers
	}

	// creating insert num method
	insert_num(num) {
		// basically we check if maxHeap is empty or first number is higher than input
		if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
			// if so push it into maxHeap
			// remember that we keep smaller numbers in the maxHeap
			this.maxHeap.push(num);
		} else {
			// otherwise, else we push to them to the larger number array in desc order
			this.minHeap.push(num);
		}

		// either both the heaps will have equal number of elements
		// or maxHeap will have one more element than the minHeap
		// following line checks if maxHeap is larger than minHeap + 1
		if (this.maxHeap.length > this.minHeap.length + 1) {
			// basically pushing popped value from minHeap to maxHeap
			this.minHeap.push(this.maxHeap.pop());
			// else maxHeap is smaller than minHeap
		} else if (this.maxHeap.length < this.minHeap.length) {
			// then push popped value from min heap to the max heap
			this.maxHeap.push(this.minHeap.pop());
		}
	}

	find_median() {
		if (this.maxHeap.length === this.minHeap.length) {
			// we have even number of elements, take the average of middle two elements
			return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
		}

		// because maxHeap will have one more element than the minHeap
		return this.maxHeap.peek();
	}
}
