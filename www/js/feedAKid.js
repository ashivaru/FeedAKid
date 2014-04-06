function saveData(){
    var data;
    data.message = $('newReminderMessage').val();
    data.frequency = $('newReminderFrequency').val();
    
}


// Paypal said that the payment was successful.   Send an email to the donor.
// using Sendgrid here
function emailMe() {
  if($("emailDonationReceipt").val() == "checked"){
    var jqxhr = $.post( "https://api.sendgrid.com/api/mail.send.json?api_user=battlehacksf&api_key=battlehacksf&to=scott.motte@sendgrid.com&from=webmaster@akshayapatra.org&subject=Thank you!&text=Thankyou.  You just fed, 50 children", function() {
   // message successully sent!!!
   // alert( "success" );
   });
  }
}
