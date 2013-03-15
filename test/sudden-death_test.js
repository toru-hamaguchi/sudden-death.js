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
    test.expect(3);

    var suddenDeath = new SuddenDeath();

    /* Test single line. */
    suddenDeath.setText('突然の死');

    test.equal(
      suddenDeath.say(),
      [
        '＿人人人人人人＿',
        '＞　突然の死　＜',
        '￣^Y^Y^Y^Y^Y^Y￣'
      ].join('\n'),
      'say "Sudden death"'
    );

    /* Test miultiple lines. */
    suddenDeath.setText([
      '突然の',
      '死'
    ].join('\n'));

    test.equal(suddenDeath.getMaxTextWidth(), 6, 'max text width is 6');

    test.equal(
      suddenDeath.say(),
      [
        '＿人人人人人＿',
        '＞　突然の　＜',
        '＞　死　　　＜',
        '￣^Y^Y^Y^Y^Y￣'
      ].join('\n'),
      'say 2 lines "Sudden death"'
    );

    test.done();
  },
};
