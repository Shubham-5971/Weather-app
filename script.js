const button = document.getElementById("search-button") 
/*
veriable created here and called them in getElementById("idName")
*/
const input = document.getElementById("city-input")

async function getData(cityName){
    const promise = await
    fetch(`http://api.weatherapi.com/v1/current.json?key=bb2e2ccd10a94511b45104842241606&q=${cityName}&aqi=yes`)
    return await promise.json()

}
/*
asynchronous :=> means not in sequence.
async keyword is only used in asynchronous Function Only and wher async is used there is must we have to declare await keyword before starting the function.
fetch is inbuilt function in js for fetching data from the server using api key.   
*/
const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")

button.addEventListener('click', async ()=>{
    const value = input.value;
     getData(value)

     const result = await getData(value);

     console.log(result);

     cityName.innerText = `${result.location.name},${result.location.region}, - ${result.location.country} `;
     cityTime.innerText = result.location.localtime;
     cityTemp.innerText = result.current.temp_c;


    /*
    console.log("This is event")
    console.log(input.value);
    */
   
})
/*
http://api.weatherapi.com/v1/current.json?key=bb2e2ccd10a94511b45104842241606&q=London&aqi=yes */
