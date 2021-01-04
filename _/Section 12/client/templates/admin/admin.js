Template.admin.helpers({
    categories:function(){
        return Category.find();
    },
    products:function(){
        return Product.find();
    }
});
Template.admin.events({
    'click .addProduct':function(evt,tmpl){
        evt.preventDefault();
        var product = {};
        product.name = tmpl.find('#productname').value;
        product.categoryId = tmpl.find('#category').value;
        product.description = tmpl.find('#description').value;
        product.price = tmpl.find('#price').value;
        product.rating = tmpl.find('#rating').value;
        product.img = tmpl.find('#img').value;
        Meteor.call('Product.insert',product,function(err){
            if(err){
                $('.message').html(err.reason).addClass('alert-danger');
            }
            $('#productForm')[0].reset();
            $('#productname').focus();
        })
    },
    'click .updateProduct':function(evt,tmpl){
        evt.preventDefault();
        var price = tmpl.find('#price').value;
        var name = tmpl.find('#productname').value;
        var id = tmpl.find('#productId').value;
        Meteor.call('Product.update',id,price,name);
    },
    'click .removeProduct':function(evt,tmpl){
        Meteor.call('Product.remove',this._id);
    },
    'click .product-edit':function(evt,tmpl){
        $('#price').val(this.price);
        $('#productname').val(this.name);
        $('#productId').val(this._id);
        $('.addProduct').text('Update Product').removeClass('addProduct').addClass('updateProduct')
    }
});
