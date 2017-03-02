var isLeapYear = function(inputYear) {
  if ((inputYear !== 0) && (inputYear % 400 === 0) || (inputYear % 4 === 0) && (inputYear % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};

$(function() {
  $("form").submit(function(event) {
    var inputYear = parseInt($("input").val());
    var output = isLeapYear(inputYear);
    if (output === true) {
      $("#output").text("The year " + inputYear + " was/will be a leap year")
    } else if (output === false) {
      $("#output").text("The year " + inputYear + " was not/will not be a leap year")
    };

    event.preventDefault();
  });
});
