import express  from "express";
const router = express.Router();
    const users=[
        {
            FirstName:"Prathmesh",
            LastName:"Naik"
        }
    ]
router.get('',(req,res)=>{
    console.log(users);
    res.send('heloo');

});
export default router;