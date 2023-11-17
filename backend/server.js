const express = require('express');
const mysql = require('mysql');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: [""],
        methods: ["GET", "POST"],
        credentials: true

    }
));
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database:'signup'
}
const db = mysql.createConnection(config);
db.connect((err)=> {
    if(err){
        console.log("Lỗi không thể kết nối mySQL", err)
    }else{
        console.log("Kết nối thành công với mySQL")
    }
})

app.listen(8081 , ()=> {
    console.log('listening on port');
})