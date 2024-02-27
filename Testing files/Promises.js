function getWeather(){
    return new Promise(function(resolve, reject){
  reject("sunny")
    })
}

const promise = getWeather();
promise.then(
    function(data){
  console.log(`First param ${data}`)
},
function() {
    console.log(`Second param ${data}`)
}

)