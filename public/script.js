increase.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      // Trigger the button's click event if Enter key is pressed
      event.preventDefault();
      getInputValue();
  }
});

function getInputValue() {
  // Selecting the input element and get its value
  var time = document.getElementById("time").value;
  var increase = document.getElementById("increase").value;

  if (time.length == 0) {
    document.getElementById("answer").innerHTML = "Please specify a time";
  } else {
    // displaying the value
    var pars = time.split(":");

    getMillis = toMilli(...pars)
    ansMillis = getMillis * (increase / 100) + getMillis

    /// convert back mm:ss from milliseconds
    answer = millisToMinutesAndSeconds(ansMillis)
    document.getElementById("answer").innerHTML = answer + "/km";
  }
};

function toMilli(m, s) {
  var minutes = Math.floor(m * 60000);
  var seconds = (s * 1000);
  return minutes + seconds;
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
