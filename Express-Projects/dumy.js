const express = require('express');
const mongoose = require('mongoose')
// const users = require('./MOCK_DATA.json');
const port = 8002;
const fs = require('fs'); 
const { type } = require('os');
const app = express();


app.use(express.urlencoded({ extended: false}));


// connection

mongoose.connect("mongodb://localhost:27017/new_project_created")
.then(() => console.log("Mongodb Connected"))
.catch(() => console.log("mongo error", err));

//scheme

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required : true,
    },
    last_name: {
        type: String,



    },
    email: {
        type: String,
        required: true , 
        unique: true,
    },
    jobtitle: {
        type: String,
    },
    gender: {
        type : String,

    },

},
{ timestamps: true}


);

//mongoose model

const User = mongoose.model('user', userSchema)

//routes 
app.get('/api/users', async (req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
})

// Dynamic path parameters
app.get('/api/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({ error: "user not found"});
    return res.json(user);
})


app.post('/api/users', async (req, res) => {
    const body = req.body;
   if(
    !body || 
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title 
   ) {
    return res.status(400).json({msg: "All fields are req..."});

   }
  const result = await User.create({
    first_name: body.first_name ,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    jobtitle: body.job_title,
  });


  console.log("result : ", result);
  return res.status(201).json({ msg: "success"});


});



app.patch('/api/users/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {last_name: "changed"})
    return res.json ({ status : "pending"});
  
});


app.delete('/api/users/:id', async (req, res) => {
    await User.findOneAndDelete(req.params.id)
    return res.json ({ status : "pending"});
  
});


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})