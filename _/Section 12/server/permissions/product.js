Product.allow({
    'insert':function(userId,doc){
        return userId;
    },
    'update':function(userId,doc){
        return Roles.userIsInRole(userId,['admin']);
    }
});