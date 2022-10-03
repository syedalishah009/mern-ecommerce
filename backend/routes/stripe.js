const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res)=>{
    // charge user 
    stripe.charges.create(
        {
            source: req.body.tokenId,  // when user make payment a token is return
            amount: req.body.amount,
            currency: "usd"
        },
        (stripeErr, stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr);
            } else{
                res.status(200).json(stripeRes);
            }
        }
    )}
)

module.exports = router;