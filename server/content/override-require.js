const Module = require('module');
const fs = require('fs');
const path = require('path');

const originalRequire = Module.prototype.require;

Module.prototype.require = new Proxy(Module.prototype.require, {
  apply (target, thisArg, argList) {
    const [ name ] = argList;

    if (/\.txt$/g.test(name)) {
      const { filename } = thisArg;

      return {
        default: fs.readFileSync(
          path.join(
            filename.slice(0, filename.lastIndexOf('/')),
            name,
          ),
          'utf8',
        ).toString(),
      };
    }

    return Reflect.apply(target, thisArg, argList);
  },
});

module.exports = () => Module.prototype.require = originalRequire;
