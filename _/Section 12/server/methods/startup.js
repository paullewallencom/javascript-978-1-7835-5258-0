Meteor.startup(function(){
    Accounts.onCreateUser(function(options,user){
        if(!user.profile){
            user.profile = {};
        }

        user.profile.firstname = options.firstname;
        user.profile.lastname = options.lastname;
        return user;
    });
    var users = Meteor.users.find().fetch();
    _.each(users,function(userData){
        if(userData.emails[0].address === 'george@home.com'){

            Roles.addUsersToRoles(userData,['admin']);
        }
    });
    //var extdata = Meteor.http.call('GET', 'http://localhost:8080/Data/material/list');
    //_.each(extdata.data.rows,function(mat,i){
    //    Meteor.call('addCategory',{name:mat.description});
    //})
});