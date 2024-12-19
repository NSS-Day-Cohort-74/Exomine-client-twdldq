
// create a function that displays colonys 


export const colonyData = async () => {

    const response = await fetch("http://localhost:8088/colonysMinerals?_expand=mineral&_expand=facility&_expand=colony")
    const colonysResources = await response.json()

    let colonyHTML = ""

    for (const colonyResource of colonysResources) {

        html += `
            <div>${colonyResource.colony.name}</div>
            <div value=${colonyResource.facility.id}> This Colony has ${colonyResource.quantity} tons of ${colonyResource.type}</div>
        
        `
    }

return colonyHTML

}

