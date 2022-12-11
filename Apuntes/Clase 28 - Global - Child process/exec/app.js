import { exec, execFile } from 'child_process';

exec('./script.sh', (error, stdout, stderr) => {
    if (error) {
        return console.error('error', error.message);
    }
    if (stderr) {
        return console.error('stderr', stderr);
    }

    console.log('stdout\n', stdout);
});
