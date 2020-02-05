'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    let p1 = new Promise(
        // The executor function is called with the ability to resolve or
        // reject the promise
       (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
            // This is only an example to create asynchronism
            window.setTimeout(
                function() {
                    // We fulfill the promise !
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // We define what to do when the promise is resolved with the then() call,
    // and what to do when the promise is rejected with the catch() call
    p1.then(
        // Log the fulfillment value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        }).catch(
        // Log the rejection reason
       (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}

function return_a_promise() {
    let promise = new Promise(function (resolve, reject) {
        console.log('Fetching data, please wait.');
        setTimeout(function () {
            console.log('Got the goods, nice work.');
        }, 2000);
    });
    return promise;
}
 
let promise = return_a_promise();
 
promise.then(function () {
    console.log('The promise is fulfilled!');
}, function () {
    console.log('The promise is rejected :-(')
});

console.log('print Promise with parameters');

// passing parameters to promise
function return_a_promiseWithParameters() {
    let promise = new Promise(function (resolve, reject) {
        console.log('Fetching data, please wait');
        setTimeout(function () {
            resolve('200 OK: ');
        }, 2000);
    });
    return promise;
}
 
let promise1 = return_a_promiseWithParameters();
 
promise1.then(function (message) {
    console.log(message + 'The promise is fulfilled!');
}, function (message) {
    console.log(message + 'Whoops, something went wrong.')
});