import { exec, execFile, spawn } from 'child_process';

const child = spawn('', ['.']);

child.stdout.on('data', (data) => {
    console.log('stdout: ', String(data)); // Gracias a el objeto String esta data se papsa de binario a string
});

child.stderr.on('data', (data) => {
    console.log('stderr: ', data);
});

child.on('error', (error) => {
    console.error('error', error.message);
});

child.on('close', (code) => {
    console.log('EL proceso hijo termino con codigo: ', code);
});
