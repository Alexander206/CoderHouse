import pick from 'lodash/pick.js';
import yargs from 'yargs/yargs';

const argv = yargs(process.argv.slice(2))
    .default({
        p: 'prod',
        m: 0,
        d: false,
    })
    .alias({
        p: 'puerto',
        m: 'modo',
        d: 'debug',
    }).argv;

console.log('params', pick(argv, ['modo', 'puerto', 'debug', 'otros']));
