import { Router } from 'express';
import os from 'os';

let router = Router();

router.get('/info', (req, res, next) => {
    const data = {
        cpus: os.cpus().length,
        arguments: process.argv.slice(2),
        pathExec: process.execPath,
        so: process.platform,
        idProcess: process.pid,
        version: process.version,
        folder: process.cwd(),
        memory: process.memoryUsage().rss,
    };

    res.render('info', data);
});

export default router;
