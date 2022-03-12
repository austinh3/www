//selector from your HTML form. This code is from: https://edcupaioli.com/blog/google-form-front-end/
$("#boatparty-form").submit(function (e) {
  //prevent the form from submiting so we can post to the google form
  e.preventDefault();
  //AJAX request
  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSe4O3DJpe61FXMlnzmV48-jU8XMLS8kUhcvd8SF6DIoY6QpDA/formResponse", //The public Google Form url, but replace /view with /formResponse
    data: $("#boatparty-form").serialize(), //Nifty jquery function that gets all the input data
    type: "POST", //tells ajax to post the data to the url
    dataType: "json", //the standard data type for most ajax requests
    statusCode: {
      //the status code from the POST request
      0: function (data) {
        //0 is when Google gives a CORS error, don't worry it went through
        //success
        $("#form-success").text("On On! We got your deets. Now pay up.");
      },
      200: function (data) {
        //200 is a success code. it went through!
        //success
        $("#form-success").text(
          "On On! We got your entry. The JM's will reach out to you when they are done with their beer."
        );
      },
      403: function (data) {
        //403 is when something went wrong and the submission didn't go through
        //error
        alert(
          "Oh no! something went wrong. we should check our code to make sure everything matches with Google.[Code 403]"
        );
      },
    },
  });
});
