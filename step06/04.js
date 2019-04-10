import {
    $,
    $$,
    $N,
    animate,
    CustomElement,
    Browser,
    $window
} from '@mathigon/boost';
let $root = $('#root')
console.log("06.js loaded!")
console.log('$', $);
console.log('$$', $$)
console.log('$Browser', Browser)
console.log('animate', animate)
console.log($root)
let $section = $('#section');
let $button = $section.$('.lap-button');
let $buttonText = $button.$('text');
let $runners = $section.$$('circle');
let $paths = $section.$$('.runner-path');
let $lapTimes = $section.$$('.lap-times').map($l => $l.children);

let speed = [4, 6];
let duration = 12;
let running = false;

function run() {
    console.log('clicked!')
    if (running) return;
    running = true;
    // $section.score('race');

    $lapTimes.forEach($g => {
        $g.forEach($l => {
            $l.exit('pop', 200);
        });
    });

    animate(function (p) {
        for (let i of [0, 1]) {
            let offset = ((p * duration) % speed[i]) / speed[i];
            let point = $paths[i].getPointAt(offset);
            $runners[i].setAttr('cx', point.x);
            $runners[i].setAttr('cy', point.y);
            $runners[i].setAttr('r', 12 * (1 + point.y / 234));
        }
        $buttonText.text = Math.floor(p * duration * 10) + ' s';
    }, duration * 1000).then(function () {
        setTimeout(function () {
            running = false;
            $buttonText.text = 'START';
        }, 1000);
    });

    for (let i of [0, 1]) {
        for (let x = 0; x < duration / speed[i]; ++x) {
            setTimeout(function () {
                $lapTimes[i][x].enter('pop', 200);
            }, speed[i] * (x + 1) * 1000);
        }
    }
}


function test() {
    console.log('test!')
}
$button.on('click', run);
