function saveData(){
    var newAlert;
    newAlert.message = $('newReminderMessage').val();
    newAlert.frequency = $('newReminderFrequency').val();
    newAlert.time = $('newAlertTime').val();

    // TODO: find out a way to store the data
}


// Paypal said that the payment was successful.   Send an email to the donor.
// using Sendgrid here
function emailMe() {
  if($("emailDonationReceipt").val() == "checked"){
    var jqxhr = $.post( "https://api.sendgrid.com/api/mail.send.json?api_user=battlehacksf&api_key=battlehacksf&to=scott.motte@sendgrid.com&from=webmaster@akshayapatra.org&subject=Thank you!&text=Thankyou.  You just fed, 50 children", function(response) {
   // message successully sent!!!
   // alert( "success" );
        console.log('Sending email:' +response);
   });
  }
}
var tembooData = {
     preset:'FeedAKidInstagram',
     inputs:[{
          name:'TagName',
          value:'hungrychild'
     }]
};
// fetching images from instagram to display them in slide show
function fetchImagesFromInstagram() {


$.ajax({
  type: "POST",
  url: "https://ashivaru.temboolive.com/temboo-api/1.0/choreos/Library/Instagram/RecentlyTaggedMedia",
  dataType: 'json',
  async: false,
  beforeSend: function(xhr){
       xhr.setRequestHeader("Authorization", "Basic FeedAKid:9c23efa76f8d4e83896f4bf1a710c6db");
       xhr.setRequestHeader('x-temboo-domain', '/ashivaru/master');
       xhr.setRequestHeader('Content-Type', 'application/json');
       xhr.setRequestHeader('Accept', 'application/json');
  },
  data:tembooData,
  success: function (response){
    console.log('Slide view Images' +response);
      updateImagesInSlideshow();
  }
});
}

function updateImagesInSlideshow() {
    //TODO: Need to implement this
}