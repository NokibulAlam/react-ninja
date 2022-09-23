const express = require('express');
const userRouter = require('./routes/userRoute');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api', userRouter);

app.listen(process.env.PORT, () => {
    console.log("Server Connected");
});