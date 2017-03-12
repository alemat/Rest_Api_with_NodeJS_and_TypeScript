"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onError(res, message, err) {
    console.error("Promise error chain", message, err);
    res.status(500).send();
}
exports.onError = onError;
