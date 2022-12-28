import pick from 'lodash/pick.js';
import minimist from 'minimist';

const opts = {
    default: {
        puerto: 0,
        modo: 'prod',
        debug: false,
    },
    alias: {
        p: 'puerto',
        m: 'modo',
        d: 'debug',
    },
};

const params = minimist(process.argv.slice(2), opts);
params.otros = params._;

console.log('params', pick(params, ['modo', 'puerto', 'debug', 'otros']));
