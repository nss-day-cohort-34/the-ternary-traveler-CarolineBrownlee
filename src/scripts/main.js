import entryToDom from "./dom";
import blogHTML from "./factory";
import API from "./data";

const dashboardMainList = (pointOfInterest, description, cost, location) => {
    return {
        "Point Of Interest": pointOfInterest.value,
        "Description": description.value,
        "Cost": cost.value,
        "Location": location
    }
}

const getPointsOfInterest = () => {
    const list = document.querySelector("#listContainer")
    API.getPOIList().then(listArray => {
            listArray.forEach(item => {
                const POIList = blogHTML.createPOIList(item)
                entryToDom(list, POIList)
            })
        })
}

// renders main container to the DOM
const mainContainer = document.querySelector("#mainContainer")
const pointsOfInterest = blogHTML.pointsOfInterest()

entryToDom(mainContainer, pointsOfInterest)
// Event Listener on Add New Point of Interest Button
// When "Clicked" Clears the DOM and Puts POI Form in Place
// Populates Add New Point of Interest Form
mainContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("createBTN")) {
        mainContainer.innerHTML = ""
        const POIForm = blogHTML.addNewPOIForm()
        entryToDom(mainContainer, POIForm)
        getPointsOfInterest()
    }
})

// Captures Location of Add New POI Container
const POIFormContainer = document.querySelector("#listContainer")
// Adds Event Listner to POI Form Save Button
mainContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("saveBTN")) {
        // get reference to input fields on Add New POI Form
        const nameInput = document.querySelector("#POINameInput")
        const descriptionInput = document.querySelector("#descriptionInput")
        const costInput = document.querySelector("#costInput")
        const locationInput = document.querySelector("#locationInput")
        // creating object out of input values
        const POIObject = dashboardMainList(nameInput, descriptionInput, costInput, locationInput)
        API.saveNewPointOfInterest(POIObject)
            .then(() => {
                // clearing container and rerendering the point of interest container
                const html = blogHTML.pointsOfInterest()
                tasksContainer.innerHTML = ""
                entryToDom(POIFormContainer, html)
                getPointsOfInterest()
            })
    }
})



