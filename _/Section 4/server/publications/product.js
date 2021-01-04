Meteor.publish('products',function(){
    return Product.find();
});