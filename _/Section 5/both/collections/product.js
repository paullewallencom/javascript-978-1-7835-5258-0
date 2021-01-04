Product = new Mongo.Collection('product');
Product.helpers({
    category:function(){
        return Category.findOne(this.categoryId);
    }
});