
Meteor.methods({
    addCategory:function(category){
        debugger
        console.log("Send to addCategory",category);
        var exists = Category.findOne({name:category.name});
        if(!exists){
            return Category.insert(category);
        }

    }
});