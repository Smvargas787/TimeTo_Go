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
