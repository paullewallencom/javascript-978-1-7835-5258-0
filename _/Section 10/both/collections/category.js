Category = new Mongo.Collection('category');
Category.before.insert(function(userId,doc){
    doc.createdAt = Date.now();
    doc.rating = 0;
});