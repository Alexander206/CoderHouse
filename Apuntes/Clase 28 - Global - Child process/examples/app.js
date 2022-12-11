process.on('beforeExit', (code) => {
    console.log('Here into beforeExit ' + code);
});

process.on('exit', (code) => {
    console.log('Here into Exit ' + code);
});

process.on('uncaughtException', (error) => {
    console.log('Here into beforeExit ' + error.message);
});

console.log('cwd ', process.cwd());
console.log('pid ', process.pid);
console.log('OS ', process.platform);
console.log('Title ', process.title);
console.log('Version ', process.version);

console.log('evento process.execPath: ' + process.execPath);

process.stdout.write('Hola Mundo\n');

functionQueNoExiste();

process.exit(21);
