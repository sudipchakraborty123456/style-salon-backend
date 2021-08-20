const order = require('../Models/Orders');
exports.saveOrder=(req,res)=> {
    const reqBody = req.body;
    const {userName,orderId,userId,salonId,orderDetails,totalPrice,orderStatus,date,time} = reqBody;
    const placeOrderDetails = new order({
        userId: userId,
        salonId: salonId,
        orderStatus: orderStatus,
        orderDetails: orderDetails,
        totalPrice: totalPrice,
        userName: userName,
        orderId: orderId,
        date:date,
        time:time
    });

    placeOrderDetails.save().then((data)=>{
        res.json(data);
        
    }).catch((err)=>{
        res.json({error:err})
    } );
};


exports.getOrder=((req,res) => {
    const userId = req.params.userId;
   // console.log(city);
   order.find({ userId : userId}).then( data => {
        res.json({data});
    }).catch( err => {
        res.json({error : err});
    })
})