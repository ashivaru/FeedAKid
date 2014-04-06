function saveNewItem(){
    
    if($('#item1Header').text() === "--") {
      $('#item1Header').text($("#newReminderMessage").val());
      $('#item1Message').text('Frequency:' +$("#newReminderFrequency").val() +" at " +$(newAlertTime).val());
    }
    else if($('#item2Header').text() === "--") {
      $('#item2Header').text($("#newReminderMessage").val());
      $('#item2Message').text('Frequency:' +$("#newReminderFrequency").val() +" at " +$(newAlertTime).val());
    }
    else if($('#item3Header').text() === "--") {
      $('#item3Header').text($("#newReminderMessage").val());
      $('#item3Message').text('Frequency:' +$("#newReminderFrequency").val() +" at " +$(newAlertTime).val());
    }
    else if($('#item4Header').text() === "--") {
      $('#item4Header').text($("#newReminderMessage").val());
      $('#item4Message').text('Frequency:' +$("#newReminderFrequency").val() +" at " +$(newAlertTime).val());
    }  
    console.log("No space for new reminders");
}


// Paypal said that the payment was successful.   Send an email to the donor.
// using Sendgrid here
function emailMe() {
  if($("#emailDonationReceipt").is(":checked")){
$.ajax({
type: "POST",
url: "https://api.sendgrid.com/api/mail.send.json?api_user=feedakid&api_key=welcome&to=ashok.shivarudraiah@gmail.com&from=webmaster@akshayapatra.org&subject=Thank you!&text=Thankyou.  You just fed, 50 children",
dataType: 'jsonp',
jsonp: false,
error: function(res) {
if (res.status === 200) { console.log('email sent') }
else { console.log('email fail') }
}
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
