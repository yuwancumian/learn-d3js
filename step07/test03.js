var btn = document.getElementById("btn");
btn.onclick = function () {
    foo.next();
}

function* helloWorld() {
    for (let i = 0; i < 5; i++) {
        yield console.log(i)
    }
}

var foo = helloWorld();
