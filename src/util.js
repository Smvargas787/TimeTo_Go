// I created a variable to require jsonfile package
const jsonfile = require('jsonfile');

exports.debug = (title, obj, method) => {
  const fs = require('fs');
  const colors = require('colors');

  // -------------------------- Time Stamp ----------------------------//

  const moment = require('moment');

  const time = moment().format('ddd, MM/Do/YY, h:mm:ssa');

  const format = colors.gray('Object: ') + ('%j', obj);

  const timeOutput = colors.white('Timeset: ') + '[ ' + time + ' ]\n';

  const lineSeperator = colors.blue('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');

  const out = lineSeperator + '\t' + title + lineSeperator;

  // -------------------------- DEBUG==TRUE Colors----------------------------//

  if (process.env.DEBUG) {
    if (method === 'log') {
      const log = out + colors.green(timeOutput) + format + lineSeperator;
      console.log(log);
    } else if (method === 'error') {
      const error = out + colors.red(timeOutput) + format + lineSeperator;
      console.error(error);
    } else if (method === 'warn') {
      const warn = out + colors.gray(timeOutput) + format + lineSeperator;
      console.warn(warn);
    } else {
      console.error(colors.red('Bad Pokemon!'));
    }
  }
};

// -------------------------- Enhancement 2: Version Number Increaser----------------------------//

/** I set up a new function with 2 parameters:
* vn (Version Number)
* vt (Version Type)
**/
exports.vni = (vn, vt) => {
  const file = '/tmp/data.json';

  const split = vn.split('.');

// I created three (3) variables for the three possible version types
  let major = split[0];
  let minor = split[1];
  let patch = split[2];

// Run nested if/else statement to get to proper message
// If the version type (vt) is major...
  if (vt.toLowerCase() === 'major') {
    // major assumes the version number (vn) entered...
    major++;
    // and this line is output
    exports.debug(`You have changed your major number to ${major}`);
    // If the vt is minor...
  } else if (vt.toLowerCase() === 'minor') {
    // minor assumes the vn entered...
    minor++;
    // and this line is output
    exports.debug(`You have changed your minor number to ${minor}`);
    // If the vt is patch...
  } else if (vt.toLowerCase() === 'patch') {
    // patch assumes the vn entered...
    patch++;
    // and this line is output
    exports.debug(`You have changed your patch number to ${patch}`);
  } else {
    exports.debug('There has been no change to your version number.');
  }

// I create a variable that will display the completed version number..
  const version = `${major}.${minor}.${patch}`;
// when returned
  return version;
};
