

function askWeather(){
  
  
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200 ){
      var response = JSON.parse(this.responseText);
      document.getElementById('weather-result').innerHTML = response.current_condition.hour;
    }
  }

  request.open("GET","https://www.prevision-meteo.ch/services/json/paris");
  request.send();  
}

let loled = document.getElementById('ask-weather');
loled.addEventListener('click', askWeather());
