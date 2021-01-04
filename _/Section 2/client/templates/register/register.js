Template.register.events({
    'submit form':function(evt){
        evt.preventDefault();
        var email = evt.target.email.value;
        var password = evt.target.password.value;
        Accounts.createUser({
            email:email,
            password:password
        })

    }
});