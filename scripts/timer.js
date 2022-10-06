const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const newMinutes = (minutes + 30) % 60;

const data = `${year}/${month + 1}/${day} ${hours + 1}:${newMinutes}:${seconds}`;

$("#timer")
  .countdown(data, function (event) {
    $('#minutes').text(
      event.strftime('%M')
    );
    $('#seconds').text(
      event.strftime('%S')
    );
  });