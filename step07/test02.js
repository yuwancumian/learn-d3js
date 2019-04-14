function draw() {
    console.log(111)
}
async function foo() {
    await draw();
    console.log(222)
}
foo().then(console.log(333))
