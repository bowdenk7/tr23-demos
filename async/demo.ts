async function main() {
 await ping();
}

async function ping() {
 for (var i = 0; i < 10; i++) {
  await delay(300);
  console.log("ping");
 }
}

async function test() {
    await delay(200);
}

function delay(ms: number) {
 return new Promise(resolve => setTimeout(resolve, ms));
}

main();
