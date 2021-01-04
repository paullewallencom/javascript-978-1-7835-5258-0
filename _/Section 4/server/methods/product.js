Meteor.methods({
    'Product.insert':function(product){
       return Product.insert(product);
    },
    'Product.remove':function(id){
        return Product.remove({_id:id});
    }
});