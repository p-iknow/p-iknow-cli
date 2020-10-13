#!/usr/bin/env node

const moment = require('moment');

const DateModel = class {
	yesterday() {
		return moment()
			.subtract(1, 'days')
			.format('YYYY-MM-DD');
	}

	today() {
		return moment().format('YYYY-MM-DD');
	}
	tomorrow() {
		return moment()
			.add(1, 'days')
			.format('YYYY-MM-DD');
	}
	afterSevenDay() {
		return moment()
			.add(7, 'days')
			.format('YYYY-MM-DD');
	}
};
const date = new DateModel();

console.log(`\nyesterday: \n${date.yesterday()}`);
console.log(`\ntoday: \n${date.today()}`);
console.log(`\ntomorrow: \n${date.tomorrow()}`);
console.log(`\nnextWeek: \n${date.afterSevenDay()}`);
