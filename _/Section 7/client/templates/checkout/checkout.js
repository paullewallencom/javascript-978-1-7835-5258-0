Template.checkout.helpers({
    isCheckingOut:function(){
        return Session.equals('isCheckingOut',true);
    }
});
