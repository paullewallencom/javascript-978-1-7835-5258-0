Meteor.startup(function () {
    Product._ensureIndex({ "categoryId": 1});
});
Meteor.methods({
    'Product.insert':function(product){
       return Product.insert(product);
    },
    'Product.remove':function(id){
        return Product.remove({_id:id});
    },
    'Product.AddtoCart':function(product,qty){
        return Cart.insert({userId:Meteor.userId(),product:product,qty:qty});
    }
});