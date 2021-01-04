Template.category.helpers({
    categoryName:function(){
        return FlowRouter.getParam('categoryName');
    },
    products:function(){
        var category = Category.findOne({name:FlowRouter.getParam('categoryName')});
        if(category && category._id)
        return Product.find({categoryId:category._id});
    }
});
Template.categoryAdmin.events({
    'click .addCategory':function(event,template){
       var category = {};
        category.name = template.find('#categoryName').value;
        Meteor.call('addCategory',category);
    }
});
