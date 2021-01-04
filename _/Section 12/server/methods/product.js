Meteor.startup(function () {
    Product._ensureIndex({ "categoryId": 1});
});
Meteor.methods({
    //create
    'Product.insert':function(product){
       return Product.insert(product);
    },
    //delete
    'Product.remove':function(id){
        return Product.remove({_id:id});
    },
    'Product.AddtoCart':function(product,qty){
        if(! Meteor.userId()){
            throw new Meteor.Error("Not Authorized");
        }
        check(qty,Number);
        check(product,String);
        var exists = Cart.findOne({userId:Meteor.userId,product:product});
        if(exists){
           return Cart.update(exists,{$inc:{qty:qty}});
        }
        return Cart.insert({userId:Meteor.userId(),product:product,qty:qty});
    },
    //update
    'Product.update':function(id,price,name){
        return Product.update(id,{$set:{price:price,name:name}});
    }
});