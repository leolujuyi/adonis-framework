'use strict'

/*
 * adonis-framework
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const logLevels = {
  emerg: 0,
  alert: 1,
  crit: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7
}

/**
 * @module Adonis
 * @submodule framework
 */

/**
 * The logger class is used record logs through the
 * application. The class instance is generated
 * by the {{#crossLink "LoggerManager"}} {{/crossLink}} class.
 *
 *
 * @class Logger
 */
class Logger {
  constructor (driver) {
    this.driver = driver
  }

  /**
   * Returns the active log level for the
   * logger driver.
   *
   * @attribute level
   *
   * @return {String}
   */
  get level () {
    return this.driver.level
  }

  /**
   * Update log level for the logger driver
   *
   * @param  {String} level
   *
   * @return {void}
   */
  set level (level) {
    this.driver.level = level
  }

  /**
   * Log a new message with given level. The configured
   * driver will be used to log the messages
   *
   * @method log
   *
   * @param  {String}    level
   * @param  {String}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  log (level, message, ...options) {
    this.driver.log(level, message, ...options)
  }

  /**
   * Log a message with debug level
   *
   * @method debug
   *
   * @param  {String}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  debug (message, ...options) {
    this.log(logLevels['debug'], message, ...options)
  }

  /**
   * Log a message with info level
   *
   * @method info
   *
   * @param  {String}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  info (message, ...options) {
    this.log(logLevels['info'], message, ...options)
  }

  /**
   * Log a message with notice level
   *
   * @method notice
   *
   * @param  {String}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  notice (message, ...options) {
    this.log(logLevels['notice'], message, ...options)
  }

  /**
   * Log a message with warning level
   *
   * @method warning
   *
   * @param  {String}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  warning (message, ...options) {
    this.log(logLevels['warning'], message, ...options)
  }

  /**
   * Log a message with error level
   *
   * @method error
   *
   * @param  {String}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  error (message, ...options) {
    this.log(logLevels['error'], message, ...options)
  }

  /**
   * Log a message with critical level
   *
   * @method crit
   *
   * @param  {String}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  crit (message, ...options) {
    this.log(logLevels['crit'], message, ...options)
  }

  /**
   * Log a message with alert level
   *
   * @method alert
   *
   * @param  {String}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  alert (message, ...options) {
    this.log(logLevels['alert'], message, ...options)
  }

  /**
   * Log a message with emergency level
   *
   * @method emerg
   *
   * @param  {String}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  emerg (message, ...options) {
    this.log(logLevels['emerg'], message, ...options)
  }
}

module.exports = Logger
