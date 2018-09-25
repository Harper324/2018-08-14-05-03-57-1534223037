module.exports = function main() {
	var str = '28465591';
	var a = 0;
	while(str > 10) {
		a = a + str%10;
		str = parseInt(str/10);
	}
	a = a + str;
	console.log(a);
  // Write your code here
};
