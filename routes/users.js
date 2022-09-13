import express  from "express";
const router = express.Router();
    const users=[
        {
            FirstName:"Prathmesh",
            LastName:"Naik",
            Age:26,
            Sex:"M"
        },
        {
            FirstName:"-------",
            LastName:"Naik",
            Age:23,
            Sex:"F"
        }
    ]
router.get('/',(req, res)=>{
   console.log(users);
     res.send('heloo');

});
router.post('/',(req, res)=>{
    console.log('POST route reached');
    res.send('POST route reached');
});
export default router;