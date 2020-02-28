const opn = require('opn');

function takeRequest(data, success, failure) {
    if (data % 2 == 0) {
        success();
    }
    else {
        failure();
    }
}

function success() {
    console.log("Your request has been successful");
    opn('facebook.com', { app: 'chrome' });
}
function failure() {
    console.log("Your request has been cancelled");
}

takeRequest(18, success, failure);