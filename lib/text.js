/*
 * sudden-death
 * https://github.com/ham103/sudden-death.js
 *
 * Copyright (c) 2013 toru hamaguchi
 * Licensed under the MIT license.
 */

'use strict';

/**
 * @module Text
 */
var Text = {
  /**
   * Get string width.
   *
   * @param {String} str
   * @returns {Number}
   *
   * @see http://blog.tofu-kun.org/070627210315.php
   */
   getWidth: function(str) {
    var s = escape(str)
      , len = s.length
      , i, width;

    for (i = 0, width = 0; i < len; i++, width++) {
      if (s.charAt(i) === '%') {
        if (s.charAt(++i) === 'u') {
          i += 3;
          width++;
        }
        i++;
      }
    }

    return width;
  },

  /**
   * Repeat character.
   *
   * @param {String} char
   * @param {Number} n
   * @returns {String}
   */
  repeat: function(char, n) {
    return new Array((n || 1) + 1).join(char);
  }
};

module.exports = Text;
