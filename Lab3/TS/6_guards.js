function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
class MyResponse {
    header = 'response header';
    result = 'response result';
}
class MyError {
    header = 'error header';
    message = 'error message';
}
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
    // ....
}
setAlertType('success');
setAlertType('warning');
// setAlertType('default')
//# sourceMappingURL=6_guards.js.map