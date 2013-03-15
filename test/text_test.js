'use strict';

var Text = require('../lib/text');

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

exports['Text'] = {
  'Text test': function(test) {
    test.expect(5);

    test.equal(Text.getWidth('abcde'), 5, '5 half width characters must be 5');
    test.equal(Text.getWidth('あいうえお'), 10, '5 full width characters must be 10');

    test.equal(Text.repeat('a', 5), 'aaaaa', '5 characters');
    test.equal(Text.repeat('a'), 'a', '1 character if not specified count');

    test.equal(Text.rjust('a', 5, ' '), 'a    ', 'padding 4 right spaces');

    test.done();
  },
};
