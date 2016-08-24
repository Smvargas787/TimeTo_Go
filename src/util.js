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

// Increment the Version passed, based off of pVersion and pType.
exports.incVersion = (pVersion, pType) => {
  const errMsg = "e.x. 'major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', 'prerelease'";

  // Ensure that pVersion and pType are of type String.
  if (pVersion !== String(pVersion)) {
    exports.debug('pVersion is not valid', "e.x. '1.0.0-alpha' > '1.0.0-alpha.1' > " +
    "'1.0.0-alpha.beta' > '1.0.0-beta' > '1.0.0' > '1.0.1' > '1.1.0' > '2.0.0'", 'error');

    return false;
  } else if (pType !== String(pType)) {
    exports.debug('pType is not valid', errMsg, 'error');

    return false;
  }

  // Store the split values of pVersion.
  // e.x. 2.5.3
  const ids = pVersion ? pVersion.split('-')[0] : undefined; // e.x. '2.5.3'
  const aSplit = ids ? ids.split('.') : undefined; // e.x. ['2', '5', '3']
  let major = aSplit && aSplit[0] ? Number(aSplit[0]) : 1; // e.x. '2'
  let minor = aSplit && aSplit[1] ? Number(aSplit[1]) : 0; // e.x. '5'
  let patch = aSplit && aSplit[2] ? Number(aSplit[2]) : 0; // e.x. '3'

  // e.x. 1.0.0-prealpha.23
  const preRelIds = pVersion ? pVersion.split('-')[1] : undefined; // e.x. 'prealpha.23'
  const bSplit = preRelIds ? preRelIds.split('.') : undefined; // e.x. ['prealpha', '23']
  let preRelType = bSplit && bSplit[0] ? String(bSplit[0]) : undefined; // e.x. 'prealpha'
  let preRelNumb = bSplit && bSplit[1] ? String(bSplit[1]) : undefined; // e.x. '23'

  // Convert pType to lower case.
  const type = pType.replace('-', '').toLowerCase();

  // If pType equals a case...
  switch (type) {
    case 'major':
      major++; // Increment major by one.

      minor = 0; // Reset minor to zero.

      patch = 0; // Reset patch to zero.

      break;

    case 'minor':
      minor++; // Increment minor by one.

      patch = 0; // Reset patch to zero.

      break;

    case 'patch':
      patch++; // Increment patch by one.

      break;

    case 'premajor':
    case 'preminor':
    case 'prepatch':
    case 'prerelease':
      major = 1; // Reset major to one.

      minor = 0; // Reset minor to zero.

      patch = 0; // Reset patch to zero.

      // Define preRelType, if it's not set.
      if (!preRelType) {
        preRelType = type;
      }

      // If we're incrementing a preRelType and preRelNumb isn't a number, make equal 0.
      if (preRelNumb && isNaN(preRelNumb)) {
        preRelNumb = 1;

      // Increment preRelNumb if it's set, it must either not exist; or, be larger than one.
      } else if (preRelNumb) {
        preRelNumb++; // Increment preRelNumb by one.
      }

      break;

    default:
      exports.debug('pType is not valid', errMsg, 'error');

      return false;
  }

  // Join the split values of pVersion back together
  const newVersion = `${major}.${minor}.${patch}${preRelType || preRelNumb ? '-' : ''}` +
  `${preRelType ? `${preRelType}` : ''}${preRelType && preRelNumb ? '.' : ''}` +
  `${preRelNumb ? `${preRelNumb}` : ''}`;

  exports.debug(`Incremented ${pType} of version!`, `Version is now: v${newVersion}`, 'log');

  return newVersion;
};
