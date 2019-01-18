const _ = require('lodash');

function add(n) {
    return new Promise((resolve, reject) => {
        resolve(n + 1);
    });
}

async function call() {
    const a = await add(1);
    const b = await add(2);
    const c = await add(3);
    const d = await add(4);
    return a + b + c + d === 14;
}

async function test(n) {
    const version = `node ${process.version}`;
    const name = __filename
        .split(/\\|\//)
        .pop()
        .slice(0, -3);
    const promise =
        Promise.toString().indexOf("[native code]") !== -1 ?
        "ES6 Promise" :
        "bluebird Promise";
    const title = `${version} ${name} with ${promise} - test ${n} times`;
    const time = process.uptime();
    for (let i = 0; i < n; i++) {
        await call();
    }
    console.log(
        "%s - %ds - %dMB",
        title,
        (process.uptime() - time).toFixed(2),
        (process.memoryUsage().rss / 1000000).toFixed(1)
    );
}

const K = 1000;
let num = parseInt(process.env.NUM, 10);
if (isNaN(num) || !(num > 0)) {
    num = 100;
}
test(num * K);
