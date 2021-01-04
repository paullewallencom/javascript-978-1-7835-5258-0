Template.cart.helpers({
    cartitems:function(){
        return Cart.find();
    },
    subtotal:function(price,qty){
        console.log(price,qty);
       return '$' + Number(price * qty).toFixed(2);
    },
    total:function(){
        var total = 0;
        var cart = Cart.find().fetch();
        for(var i = 0;i < cart.length;i++){
            var product = Product.findOne({_id:cart[i].product});
            total += product.price * cart[i].qty;
        }
        Session.set('cartTotal',total);
        return total;
    }
});
Template.cart.events({
    'click .checkOutBtn':function(){
        Session.set('isCheckingOut',true);
    },
    'mouseup #delFromCart':function(evt,tmpl){
        console.log(this._id);
        deletefromcart(this._id);
    }
});
function deletefromcart(id){
    Meteor.call('Cart.remove',id);
}