let submit1 = document.getElementById("form");


function send1(){
  var body1 = {value:document.getElementById("value").value};
  
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          var response = JSON.parse(this.responseText);
          document.getElementById("result").innerHTML = response.postData.text;
      }
  };
 
  request.open("POST", "https://mockbin.com/request");
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(body1));
  
}

submit1.addEventListener("submit", function(e){
  e.preventDefault();
  send1();
});
