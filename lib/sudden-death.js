/*
 * sudden-death
 * https://github.com/ham103/sudden-death.js
 *
 * Copyright (c) 2013 toru hamaguchi
 * Licensed under the MIT license.
 */

'use strict';

var Text = require('./text');

/**
 * @class Sudden death
 * @requires text.js
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

  var width = Math.ceil(Text.getWidth(this._text) / 2) + 2
    , top = TOP_CORNER + Text.repeat(TOP_CENTER, width) + TOP_CORNER
    , content = CONTENT_LEFT + this._text + CONTENT_RIGHT
    , bottom = BOTTOM_CORNER + Text.repeat(BOTTOM_CENTER, width) + BOTTOM_CORNER;

  return [top, content, bottom].join('\n');
};

module.exports = SuddenDeath;
