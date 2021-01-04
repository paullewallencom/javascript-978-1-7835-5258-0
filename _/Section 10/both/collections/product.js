Product = new Mongo.Collection('product');
Product.helpers({
    category:function(){
        return Category.findOne(this.categoryId);
    }
});
Product.attachSchema(new SimpleSchema({
    name:{
        type:String,
        label:"Product Name",
        max:20
    },
    categoryId:{
        type:String,
        label:"Category"
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        label:"Price"
    },
    img:{
        type:String,
        label:"img"
    }
}));