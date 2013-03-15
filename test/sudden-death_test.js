'use strict';

var SuddenDeath = require('../lib/sudden-death');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['SuddenDeath'] = {
  'Sudden death test': function(test) {
    test.expect(1);

    var suddenDeath = new SuddenDeath();

    suddenDeath.setText('突然の死');
    test.equal(
      suddenDeath.say(),
      '＿人人人人人人＿\n＞　突然の死　＜\n￣ＹＹＹＹＹＹ￣',
      'Say "Sudden death"'
    );

    test.done();
  },
};
