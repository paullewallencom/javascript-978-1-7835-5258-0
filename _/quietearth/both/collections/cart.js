Cart = new Mongo.Collection('cart');
Cart.helpers({
    cartproduct:function(){
        return Product.findOne({_id:this.product});
    },
    image:function(){
        if(this.img){
            return this.img;
        } else{
            return '/images/apple-crisp-16.jpg';
        }
    }
});