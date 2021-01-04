Template.registerHelper('avatar',function(){
    if(Meteor.user() && Meteor.user().profile.avatar){
        return Meteor.user().profile.avatar;
    } else{
        return '/images/avatar.png';
    }
});