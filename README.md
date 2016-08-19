#TimeTo_Go

##Installation
```
npm install timeto_go --save
```

##Usage

If the file is not already included, create a ``log`` folder in your project with the file ```.logs```. This will hold and save all of your debug messages.

```
src/lib/.logs
```

Require the 'timeto_go' package like so:

```
const util = require('timeto_go');
```

##Run

You must have the environmental variable 'DEBUG' turned on to run this package.

```
DEBUG=true node src/util.js
```

When using the tool, you can decide which params you'd want to capture your data in like so:

```
// Will Spit out the title, object, and method of data associated with the chosen line to be debugged.
util.debug('title, object, method');
```
