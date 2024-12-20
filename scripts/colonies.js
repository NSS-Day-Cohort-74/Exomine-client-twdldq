// create an async function that displays colonyHTML()
// create a fetch request to our api that converts colonies into html strings that will be rendered into the DOM
// our coloniesHTML() fetch request will expand on the colony of each governor
// define a variable coloniesResources, and we will assign the api response to it
// we then create an empty HTML string
// we'll have a forof loop tasked with iterating through each governor's colony. Our conditional (if) will include a parseInt to convert the response colony ids into an integer 
// the response data of the fetch request are javaScript objects, which have an id property (accessible through dot notation chaining)
// inside of the parseInt, we'll set up a changeEvent.target.value. then we'll set the result of the parseInt strictly equal to the colony.id
// then, our colonyHTML will have an assignment operator that assigns the awaited result of filterColonies(colony.id) 
// finally, we'll return coloniesHTML
// create the async function filterColonies(), that will be responsible for iterating through our colonyMinerals objects to check if each colonyId matches the filtered colonyId
// define filterColonies and accept a single parameter of colonyId
// define a response to be assigned to the awaited result of a fetch request of colonyMinerals, expanding on the mineral
// define a filters variable to be assigned to the awaited result of the response.json()
// define an HTML variable mineralsHTML and assign it to an empty string
// create a forof loop to iterate through the colonyMinerals, on the condition that the colonyId is strictly equal to the filter.colonyId
// then we'll create an assignment operator between the mineralsHTML variable and a string including the interpolated filter.mineralQuantity, "tons of" and filter.mineral.name
//return mineralsHTML
export const colonyHTML = async () => {
    const response = await fetch("http://localhost:8088/governors?_expand=colony")
    const colonies = await response.json()

    let coloniesHTML = ""

    for (const colony of colonies) {
        if (parseInt(changeEvent.target.value) === colonies.id) {
            coloniesHTML += await filterColonies(colony.id)
        }

    }
    return coloniesHTML
}

const filterColonies = async (colonyId) => {
    const response = await fetch("http://localhost:8088/coloniesMinerals?_expand=mineral")
    const filters = await response.json()

    let colonyMineralsHTML = ""

    for (const colonyMineral of colonyMinerals) {
        if (colonyId === colonyMineral.colonyId) {
            colonyMineralsHTML += `${colonyMineral.mineralAmount} tons of ${colonyMineral.mineral.name}`
        }

    }
    return colonyMineralsHTML
}

// html += `
// <div>${colonyResource.colony.name}</div>
// <div value=${colonyResource.colony.id}> This Colony has ${colonyResource.quantity} tons of ${colonyResource.type}</div>

`