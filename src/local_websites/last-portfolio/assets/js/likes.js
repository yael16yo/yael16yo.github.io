const database = "datas/data.json";

function sendDataFunction(id) {

    let dataLikes = new FormData();
    dataLikes.append('nbrLikes', );

    const requestOptionForUpdating = {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(dataLikes)
    }

    fetch(database+"/"+id, requestOptionForUpdating)
    .then(response => response.json())
    .catch(error => {
        "Erreur", error; 
    });
}