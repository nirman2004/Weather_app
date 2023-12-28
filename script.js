const inputvalue = document.querySelector('#c_input')
const btn = document.querySelector('#add')
const city = document.querySelector('#c_output')
const descrip = document.querySelector('#desc')
const temp = document.querySelector('#temp')
const wind = document.querySelector('#wind')

api="8649f515f8cd97fabd726bc80549ee25"
function covertion(val){
    return (val-273).toFixed(2)
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+api)
    .then(res => res.json())

    .then(data =>
        {
           
            const nameval = data['name']
            const descrip = data['weather']['0']['description']
            const tempa =  data['main']['temp']
            const windspeed = data['wind']['speed']

            city.innerHTML=`weather of <span>${nameval}<span>`

            descrip.innerHTML = `Sky conditions: <div>${descrip}<div>`

            temp.innerHTML= `Temperature: <span>${covertion(tempa)}C<span>`

            wind.innerHTML = `Wind speed: <span>${windspeed}km/h<span> `


           
        })

        .catch(err=> alert('You entered wrong information'))
})