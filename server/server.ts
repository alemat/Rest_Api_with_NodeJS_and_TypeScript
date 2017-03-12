import * as express from  'express';
import {Application} from "express";
import {initRestApi} from "./api/api";
import {apiErrorHandler} from "./api/apiErrorHandler";

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

initRestApi(app);

app.use(apiErrorHandler);

app.listen(8090, () => {
    console.log('server is running now on port 8090, why not isn\'t it so ?...');
});
