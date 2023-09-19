let arr = [1,2,4,1,5,2,4,6,6,3];

function removeDuplicates(arr) {
	return arr.filter((item,
		index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
