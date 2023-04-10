const express = require('express')
const http = require('http')
const app = express()
app.use(express.urlencoded({extended:false}))
const server = http.createServer(app)
app.get('/',(req,res) => {
res.send(`
<style>
body {
    background-color:lightblue
} 
h1 {
    font-size:125px;
}
input {
    width:50%;
    height:50px;
}
button {
    width:150px;
    height:50px;
    color:black;
    font-size:15px;
    background-color:lightblue;
}
label {
    font-size:20px;
}
</style>
<body>
<h1>Welcome to this website</h1>
<label>Please enter your name to show you visited this website :</label>
<form method="POST" action="/results" />
<input type="text" name="username" />
<button>Send</button>
</form>
</body>
`)
})
app.post('/results',(req,res) => {
    if(req.body.username === "") {
     res.send(`
     <style>
     body {
      background-color:lightblue;
     }
     h1 {
         color:red;
     }
     </style>
     <h1>Please Enter Your name</h1>
     `)
    }
    res.send(`
    <style>
     body {
      background-color:lightblue;
     }
     h1 {
         color:blue;
     }
     </style>
    <h1>Thank You for entering your name</h1>
    `)
})
server.listen(3000, () => {
    console.log("Listening on PORT 5000")
})