export default class ArrayUtils {
	static shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}

		return a;
	}

	static countInArray(array, what) {
		var count = 0;
		for (var i = 0; i < array.length; i++) {
			if (array[i] === what) {
				count++;
			}
		}
		return count;
	}
}
