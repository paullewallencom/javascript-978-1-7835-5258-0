Template.product.events({
    'click .btn-product':function(evt,tmpl){
        Meteor.call('Product.AddtoCart',this._id,1);
    }
});