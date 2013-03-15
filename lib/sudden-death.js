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
 * Get max text width.
 *
 * @returns {Number}
 */
SuddenDeath.prototype.getMaxTextWidth = function() {
  return this._text
    .split('\n')
    .map(function(line) {
      return Text.getWidth(line);
    })
    .sort(function(a, b) {
      return a - b;
    })
    .reverse()[0]
  ;
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
  var PAD = '\u3000'
    , TOP_CORNER = '\uff3f'
    , TOP_CENTER = '\u4eba'
    , CONTENT_LEFT = '\uff1e' + PAD
    , CONTENT_RIGHT = PAD + '\uff1c'
    , BOTTOM_CORNER = '\uffe3'
    , BOTTOM_CENTER = '\uff39';

  var maxWidth = this.getMaxTextWidth()
    , width = Math.ceil(maxWidth / 2)
    , top, content, bottom;

  top = TOP_CORNER + Text.repeat(TOP_CENTER, width + 2) + TOP_CORNER;

  content = this._text
    .split('\n')
      .map(function(line) {
        return CONTENT_LEFT + Text.rjust(line, width, PAD) + CONTENT_RIGHT;
      })
      .join('\n')
  ;

  bottom = BOTTOM_CORNER + Text.repeat(BOTTOM_CENTER, width + 2) + BOTTOM_CORNER;

  return [top, content, bottom].join('\n');
};

module.exports = SuddenDeath;
