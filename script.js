function getValue() {
  event.preventDefault()
  var value = document.getElementById("select").value;
  var firstNumb = document.getElementById("firstNumb").value;
  var secondNumb = document.getElementById("secondNumb").value;
  document.getElementById("result").value = eval(firstNumb + value + secondNumb);
}
