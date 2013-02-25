/*
 * sudden-death
 * https://github.com/ham103/sudden-death.js
 *
 * Copyright (c) 2013 toru hamaguchi
 * Licensed under the MIT license.
 */

'use strict';

/**
 * @class Sudden death
 */
var SuddenDeath = function() {
  this.initialize.apply(this, arguments);
};

/**
 * @constructor
 * @param {String} text
 */
SuddenDeath.prototype.initialize = function(text) {
  this._text = '';

  if (text) {
    this.setText(text);
  }
};

/**
 * Set text to say.
 *
 * @param {String} text
 */
SuddenDeath.prototype.setText = function(text) {
  this._text = text;
};

/**
 * Get string width.
 *
 * @param {String} str
 * @returns {Number}
 *
 * @see http://blog.tofu-kun.org/070627210315.php
 */
SuddenDeath.prototype.getStringWidth = function(str) {
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
};

/**
 * Repeat character.
 *
 * @param {String} char
 * @param {Number} n
 * @returns {String}
 */
SuddenDeath.prototype.repeatCharacter = function(char, n) {
  return new Array((n || 1) + 1).join(char);
};

/**
 * Say "Sudden Death".
 *
 * @returns {String}
 */
SuddenDeath.prototype.say = function() {
  /**
   * @const
   */
  var TOP_CORNER = '\uff3f'
    , TOP_CENTER = '\u4eba'
    , CONTENT_LEFT = '\uff1e\u3000'
    , CONTENT_RIGHT = '\u3000\uff1c'
    , BOTTOM_CORNER = '\uffe3'
    , BOTTOM_CENTER = '\uff39';

  var width = Math.ceil(this.getStringWidth(this._text) / 2) + 2
    , top = TOP_CORNER + this.repeatCharacter(TOP_CENTER, width) + TOP_CORNER
    , content = CONTENT_LEFT + this._text + CONTENT_RIGHT
    , bottom = BOTTOM_CORNER + this.repeatCharacter(BOTTOM_CENTER, width) + BOTTOM_CORNER;

  return [top, content, bottom].join('\n');
};

module.exports = SuddenDeath;
