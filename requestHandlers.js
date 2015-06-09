/**
 * Created by anita on 10/06/15.
 */
function start() {
    console.log("Request handler 'start' was called");
}

function upload() {
    console.log("Request handler 'upload' was called");
}

exports.start = start;
exports.upload = upload;