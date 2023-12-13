let url= 'https://api.openweathermap.org/data/2.5/weather?q'
// let city= 'lima'
let api_key= '6fbe90bbf6ff6f15be2f9b9ebe3fc926'
let difKelvin= 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const city = document.getElementById('ciudadEntrada').value
    if(city){
        fetchDatosClima(city)
    }    
});

function fetchDatosClima(city){
    fetch(`${url}=${city}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
};

function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura= data.main.temp
    const humendad= data.main.humidity
    const descripcion= data.weather[0].description
    const icono= data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaParrafo = document.createElement('p')
    temperaturaParrafo.textContent = `Temperatura: ${Math.floor(temperatura- difKelvin)} °C`

    const humedadParrafo = document.createElement('p')
    humedadParrafo.textContent = `Humedad: ${humendad} %`

    const iconoImagen = document.createElement('img')
    iconoImagen.src = `http://openweathermap.org/img/w/${icono}.png`    

    const descripcionParrafo = document.createElement('p')
    descripcionParrafo.textContent = `Descripción: ${descripcion}`


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaParrafo)
    divDatosClima.appendChild(humedadParrafo)
    divDatosClima.appendChild(iconoImagen)
    divDatosClima.appendChild(descripcionParrafo)

};


