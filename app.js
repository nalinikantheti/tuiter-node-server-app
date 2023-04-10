import express from 'express'
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"

import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)

const DB_CONNECION_STRING = "mongodb+srv://nalinikantheti:NaliniV1RHO2J8@cluster0.d6scmxa.mongodb.net/?retryWrites=true&w=majority";
const CONNECTION_STRING = process.env.DB_CONNECION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);