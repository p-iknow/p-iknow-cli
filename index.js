#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const moment = require('moment');

// in directory
const cwd = process.cwd();
const folderNames = fs.readdirSync(cwd);

const latestFolder = folderNames[folderNames.length - 2];

const filenames = fs.readdirSync(cwd + '/' + latestFolder);
const fileName = filenames.pop();

const getNextDate = currDate => {
	return moment(currDate)
		.add(7, 'days')
		.format('YYYY-MM-DD');
};

const getNextFromTo = currFromTo => {
	return currFromTo.match(/\d{4}/g).map(date => String(Number(date) + 7));
};

const [pastDate, pastFromTo] = fileName.split('|');

const [nextFrom, nextTo] = getNextFromTo(pastFromTo);

const currentDate = getNextDate(pastDate);

console.log(`\nSelectd Dir: \n${latestFolder}`);

console.log(`\nSelected File: \n${fileName}`);

console.log(`\ncurrentDate: \n${currentDate}`);

console.log(`\ncurrentFromTo: \n${nextFrom}-${nextTo}`);

console.log(`\nnextFileName:  \n${currentDate}|${nextFrom}-${nextTo}일.md \n`);
