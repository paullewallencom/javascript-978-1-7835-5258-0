Product.allow({
    'insert':function(userId,doc){
        return userId;
    }
});