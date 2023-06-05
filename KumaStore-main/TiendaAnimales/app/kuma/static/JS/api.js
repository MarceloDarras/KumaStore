var myHeaders = new Headers();
myHeaders.append("apikey", "vbix3Le0zOibhcasnMxDgk90BoyPU46R");

document.getElementsByClassName('signo').innerHTML = 'CLP'; 

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const to = 'CLP';
const from = 'USD';


function cambioMoneda(){
  var select = document.getElementById('divisa');
  var option = select.value;
  var pesos = document.getElementsByClassName('precio-item');
  for(i = 0; i < document.getElementsByClassName('precio-item').length ; i++){
    const amount = document.getElementsByClassName('precio-item')[i].innerHTML;
    if(option == 1){
      console.log("Divisa por defecto");
      for(var i = 0; i < pesos.length; i++){
         pesos[i].innerHTML = pesos[i].getAttribute('data-clp');
      }
    }else if(option == 2){
      fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=1`, requestOptions)
      .then(response => response.json())
      .then(data => {
        var resultado = data.result;
        console.log(resultado);
        for(var i = 0; i < pesos.length; i++){
          var clpValue = pesos[i].getAttribute('data-clp');
          var usdValue = clpValue / resultado;
          pesos[i].innerHTML = usdValue.toFixed(2);
        }
      })
      .catch(error => console.log('error', error));
    }
  }
}









  
  





