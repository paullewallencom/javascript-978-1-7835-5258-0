Meteor.methods({
    'Cart.remove':function(id){
        return Cart.remove({_id:id});
    }
});