Template.cart.helpers({
    cartitems:function(){
        return Cart.find();
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