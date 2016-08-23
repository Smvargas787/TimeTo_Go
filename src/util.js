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

exports.incVersion = (version, type) => {
  // Ensure that version is a string
  if (version !== String(version)) {
    exports.debug('Second param is not a valid type.', 'e.x. major, minor or patch.', 'error');

    return false;
  }

  // Store the split values of version
  let major = version.split('.')[0];
  let minor = version.split('.')[1];
  let patch = version.split('.')[2];

  // Will ultimately decide if we had a valid type
  let failed = false;

  switch (type) {
    // If type equals 'major', make major = number
    case 'major':
      major++;
      break;

    // If type equals 'minor', make minor = number
    case 'minor':
      minor++;
      break;

    // If type equals 'patch', make patch = number
    case 'patch':
      patch++;
      break;

    default:
      failed = true;
      exports.debug('Second param is not a valid type.', 'e.x. major, minor or patch.', 'error');
  }

  if (!failed) {
    // Join the split values of package.json back together
    const newVersion = `${major}.${minor}.${patch}`;

    exports.debug(`Redefined ${type} of version.`, `Version is now: v${newVersion}`, 'log');

    return newVersion;
  }

  return false;
};
