#!/usr/bin/env node

'use strict';

var SuddenDeath = require('../lib/sudden-death');

var args = process.argv.slice(2)
	, text
	, totsuzenNoShi;

if (args.length > 0) {
	text = args[0];
}
else {
	text = '\u7a81\u7136\u306e\u6b7b';
}

totsuzenNoShi = new SuddenDeath(text);
console.log(totsuzenNoShi.say());
