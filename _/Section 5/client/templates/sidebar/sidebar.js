Template.sidebar.helpers({
    'categories':function(){

        var catNames = [];
        var everything = Product.find().fetch();
        var justCategories = _.pluck(everything,"categoryId");
        var catArr = _.uniq(justCategories);
        _.each(catArr,function(categoryId){
           catNames.push(Category.findOne({_id:categoryId}));
        });
        return catNames;

    }
});