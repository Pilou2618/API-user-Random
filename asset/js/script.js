console.log ("coucou");

    // Faire une requête sur L'API RandomUser

let endPoint = "https://randomuser.me/api/?results=10";

function getWeatherData(userData) {
    let lat = parseInt(userData.location.coordinates.latitude);
    let longitude = parseInt(userData.location.coordinates.longitude);
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longitude}&exclude={part}&appid=59865db897304cf187d1f3ce28dd0495&units=metric&lang=fr`;
    
    
    return fetch(weatherUrl).then(response => response.json());
}

    //Fetch
fetch( endPoint )
.then(
    function (response){
        // Affichage de la reponse
        //console.log(response);

        // Affichage du code de status de la reponse
        if(response.status == 200 ){
            // interpreter le contenu
            response.json()
            .then(

                function (datas){
                    let tableau = document.getElementById("tableau");
                    datas.results.forEach(
                        (data) => {
                                getWeatherData(data).then(weatherData => {
                                    tableau.appendchild(addLine(data, weatherData));
                            });
                        }
                    );
                        
                });
               
        }
        else {
            console.log("Mauvais Statut de reponse")
        }
    } 
    )
    
/** * Ajouter une ligne dans le tableau
 * @param {Object} datasuser - Objet contenant les données d'un utilisateur
 */
 function addLine(datasuser, weatherData) { 
    // Creation des elements
    let generatedline = document.createElement("tr");
    let tdnom = document.createElement("td");
    let tdprenom = document.createElement("td");
    let tdpp = document.createElement("td");
    let pp = document.createElement("img");
    let tdville = document.createElement("td");
    let tddrapeau = document.createElement("td");
    let iconemeteo = document.createElement("img");
    let tdiconemeteo = document.createElement("td");
    let imgdrapeau = document.createElement("img");
    let isonesexe = document.createElement("img");
    let tdsexe = document.createElement("td");

    // Remplissage des elements
    imgdrapeau.src = "https://flagcdn.com/256x192/"+datasuser.nat.toLowerCase()+".png";
    iconemeteo.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    if (datasuser.gender === "female") {
        isonesexe.src = "https://th.bing.com/th/id/OIP.F29SdmaGyCHQWkKBuFEBOAHaHa?w=186&h=186&c=7&r=0&o=7&pid=1.7&rm=3"
    } else {
        isonesexe.src = "https://th.bing.com/th/id/OIP.yzzif_PYShPmYyyEH70ZrAHaEN?w=311&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    }
    tdnom.innerText = datasuser.name.last;
    tdprenom.innerText = datasuser.name.first;
    pp.src = datasuser.picture.thumbnail;
    tdville.innerText = datasuser.location.city;
    
    // Insertion des elements
    tddrapeau.appendChild(imgdrapeau);
    tdpp.appendChild(pp);
    tdiconemeteo.appendChild(iconemeteo);
    tdsexe.appendChild(isonesexe);
    generatedline.appendChild(tdpp);
    generatedline.appendChild(tdnom);
    generatedline.appendChild(tdprenom);
    generatedline.appendChild(tdville);
    generatedline.appendChild(tdsexe);
    generatedline.appendChild(tddrapeau);
    generatedline.appendChild(tdiconemeteo);
    tableau.appendChild(generatedline);
} 
