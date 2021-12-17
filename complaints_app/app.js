const userInput = document.getElementById("userInput");
const brooklynButton = document.getElementById("Brooklyn");
const manhattanButton = document.getElementById("Manhattan");
const queensButton = document.getElementById("Queens");
const statenIslandButton = document.getElementById("StatenIsland");
const theBronxButton = document.getElementById("TheBronx");
const displayDescriptor = document.getElementById("displayDescriptor");
const url1 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BROOKLYN`;
const url2 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN`;
const url3 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS`;
const url4 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=STATEN ISLAND`;
const url5 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX`;
const counter = 0;

displayPoliceResolution = (resolutionDescription, elementId) =>
{ let pTagSelector = document.querySelector(`#description${elementId}`)
    if( pTagSelector !=null && pTagSelector.style.display != "none"){
        pTagSelector.style.display = "none"
       
    }
    else if(pTagSelector != null){ 
        pTagSelector.style.display = "block"
    
    }else document.getElementById(elementId).innerHTML += `<p id ="description${elementId}"> ${resolutionDescription} </p>`
} ;

  fetchingTheFetch = (Boroughs) => {
        let userInput2 = userInput.value;
        fetch(Boroughs)
            .then((res) => res.json())
            .then((data) => {
                
            console.log(data);
            displayDescriptor.innerHTML = `<ul>`;
            for (let i = 1; i <= userInput2; i++)
            displayDescriptor.innerHTML += `<li id = "row${i}" > ${data[i].descriptor} 
            <button onclick="displayPoliceResolution('${data[i].resolution_description}','row${i}')" >   what did the police do? </button></li>`;
            displayDescriptor.innerHTML += `</ul>`})
            .catch((error) => {  console.log(error)});
        };

        brooklynButton.addEventListener("click", () => {fetchingTheFetch(url1)});
        
        manhattanButton.addEventListener("click", () => {fetchingTheFetch(url2)});

        queensButton.addEventListener("click", () => { fetchingTheFetch(url3)});
        
        statenIslandButton.addEventListener("click", () => {fetchingTheFetch(url4)});
        
        theBronxButton.addEventListener("click", () => { fetchingTheFetch(url5)});


