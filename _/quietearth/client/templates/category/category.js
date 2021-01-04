Template.category.helpers({
    categoryName:function(){
        return FlowRouter.getParam('categoryName');
    },
    products:function(){
        var categoryId = Category.findOne({name:FlowRouter.getParam('categoryName')})._id;
        return Product.find({categoryId:categoryId});
    }
});

Template.categoryAdmin.events({
    'click .addCategory':function(event,template){
       var category = {};
        category.name = template.find('#categoryName').value;
        Meteor.call('addCategory',category);
    }
});