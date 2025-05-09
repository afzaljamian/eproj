const port=4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");
const { type } = require("os");
const { error } = require("console");
app.use(express.json());
app.use(cors());
//DATABASE CONNECTION WITH MONGODB
mongoose.connect("mongodb+srv://mdafzaljamian:Afzal786@cluster0.dzvl1mb.mongodb.net/Ecom");
//after using it mongodb is connected to our express server
//API CREATION

app.get("/",(req,res)=>{
    res.send("Express app is running");
})
app.listen(port,()=>{
    console.log("Server listening to port "+port);
})

//Image storage engine
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
//images will be renamed and stored in image folder

const upload=multer({storage:storage})
//Creating upload endpoints for images

app.use("/images",express.static('upload/images'));
//whatever images stored we get that using /images route
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`,
    })
})
//to upload any thing we use this endpoint basically we upload images file

//Schema for creating products
const Product=mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true, //when we try to upload product without name that wont be uploaded
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async(req,res)=>{
    let products=await Product.find({}); //return array
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }else{
        id=1;
    }
    //THIS IS CREATE OF CRUD OPERATION
    const product=new Product({  //adding that product in database .This adding requires passing data in postman testing
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,

    })
})

//Creating api for deleting product
//THIS IS DELETE OF CRUD OPERATION
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})
//THIS IS READ OF CRUD OPERATION
//Creating API for getting all product
app.get('/allproducts',async(req,res)=>{
    let products=await Product.find({});
    console.log("All products Fetched");
    res.send(products);
})
//Schema for user model
const Users=mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating api for registering the user
app.post('/signup',async(req,res)=>{
    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user find with same email id"})
    }
    let cart={};
    for(let i=0;i<300;i++){
        cart[i]=0
    }
    const user=new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data={
        user:{
            id:user.id
        }
    }
    const token=jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//creating api for user login
app.post('/login',async(req,res)=>{
    let user=await Users.findOne({email:req.body.email});
    if(user){
        const passCompare=req.body.password===user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,"secret_ecom");
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong email id"})
    }
})