let result1 = document.getElementById("result")

async function compute(){
  var res1 = await getNumber1();
  var res2 = await getNumber2();
  return `${res1}, ${res2}`;
}

compute()
  .then(function(data){
  result1.innerHTML= data;
});
