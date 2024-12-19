



// create a facility dropdown html function

import { setFacility } from "./TransientState.js"

export const facilityList = async () => {
    document.addEventListener("change", handleFacilityChange)
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()

    const html = "<selector id=facility><option>Facilities</option>"
    for (const facility of facilities) {
        html += `<option value=${facility.id}>${facility.name}</option>`
    } 
    html += "</selector>"
    return html
}



// create a function that will (handle a change of dropdown) change the transient state



const handleFacilityChange = (changeEvent) => {
    if(changeEvent.target.id === "facility") {
        const facilityId = changeEvent.target.value
        setFacility(facilityId)
        const dispatchId = new CustomEvent()
        document.dispatchEvent(dispatchId)
    }
}


/* 

1. Make a function that... displays the facilities minerals and quantities 
2. be able to select a mineral from the facility
3. decrement the quantity per purchase from facility 
4. increment the quantity of selected mineral to colony
5.

*/


document.addEventListener(
    "stateChanged", 
    (changeEvent) => {
        
        

    }

)










