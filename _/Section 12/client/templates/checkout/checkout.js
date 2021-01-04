Template.checkout.helpers({
    isCheckingOut:function(){
        return Session.equals('isCheckingOut',true);
    },
    cartTotal:function(){
        return Session.get('cartTotal');
    }
});
Template.paypalCreditCardForm.events({
    'submit #paypal-payment-form':function(evt,tmpl){
        evt.preventDefault();
        if(Number(Session.get('cartTotal')) > 0) {
            var cardData = Template.paypalCreditCardForm.card_data();
            Meteor.Paypal.purchase(cardData, {total: Session.get('cartTotal'), currency: 'USD'}, function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(results)
                }
            })
        }
    }
})