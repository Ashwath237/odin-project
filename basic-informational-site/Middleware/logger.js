function middleware1(req,res,next){
    console.log(req.method);
    console.log(req.url);
    console.log(new Date());
    next();
}
module.exports=middleware1;

