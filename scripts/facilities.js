



// create a facility dropdown html function

const facilityList = async () => {
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()

    const html = "<selector><option>Facilities</option>"
    for (const facility of facilities) {
        html += `<option value=${facility.id}>${facility.name}</option>`
    } 
    html += "</section>"
    return html
}




// create a function that will (handle a change of dropdown) change the transient state