function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var year = currentTime.getFullYear();
    var mounth = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    console.log(Number(minutes), Number(seconds), Number(hours))

    var timeString = year + "." + mounth + "." + day + " " + hours + ":" + minutes + ":" + seconds
    document.getElementById("clock").innerHTML = timeString;

    var bigBan = document.getElementById("clock");
    
    // if (bigBan.classList.contains('newClass')) {
    //   bigBan.classList.remove('newClass')
    // }
    
    // if (Number(minutes), Number(seconds), Number(hours)) {
    //   bigBan.classList.add("newClass");
    // }

    if (hours > 7 && hours < 18) {
        if (hours < 12) {
          document.getElementById("timestamp").innerHTML = "Доброе утро,";
        } else if (hours < 18) {
          document.getElementById("timestamp").innerHTML = "Добрый день,";
        }
      } else {
        document.getElementById("timestamp").innerHTML = "Добрый вечер,";
      }
      
}
setInterval(updateClock, 1000);

