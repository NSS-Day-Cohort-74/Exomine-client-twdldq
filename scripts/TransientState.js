const state = {
    "governorId": 0,
    "mineralId": 0,
    "facilityId": 0,
}

export const setFacility = (facilityId) => {
    state.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setGovernor = (governorId) => {
    state.selectedFacility = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setMineral = (mineralId) => {
    state.selectedFacility = mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}




export const purchaseMineral = () => {
    
    /*
        Does the chosen governor's colony already own some of this mineral?
            - If yes, what should happen?
            - If no, what should happen?

        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you
        should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */



    document.dispatchEvent(new CustomEvent("stateChanged"))
}
