
const blogHTML = {
    pointsOfInterest() {
        return `
            <h1 id="title">Mira's Travel Blog</h1>
            <h3 id="list--title">Points of Interest</h3>
            <div id="listContainer">list container</div>
            <button id="createBTN">Add New Point Of Interest</button>
        `
    },
    addNewPOIForm() {
        return `
            <div id="addNewPOIForm">

                <fieldset>
                    <label for="POINameInput">Point Of Interest: </label>
                    <input type="text" id="POINameInput" name="POIName">
                </fieldset>

                <fieldset>
                    <label for="descriptionInput">Description: </label>
                    <input type="text" id="descriptionInput" name="description">
                </fieldset>

                <fieldset>
                    <label for="cost">Cost: </label>
                    <input type="text" id="costInput" name="cost">
                </fieldset>

                <fieldset>
                    <label for="location">Location</label>
                    <select id="locationInput">
                        <option value="italy" id="italy">Italy</option>
                        <option value="switzerland" id="switzerland">Switzerland</option>
                        <option value="france" id="france">France</option>
                    </select>
                </fieldset>

                <button id="saveBTN">SAVE</button>

             </div>
        `
    },
    // creates object out of input values
    createPOIList(pointOfInterestObject) {
        return `
            <section id="pointOfIntrest">Point Of Interest: ${pointOfInterestObject.pointOfIntrest}</section>
            <section id="description">Description: ${pointOfInterestObject.decription}</section>
            <section id="cost">Cost: ${pointOfInterestObject.cost}</section>
            <section id="location">Location: ${pointOfInterestObject.location}</section>
            <button id="editButton_${pointOfInterestObject.id}">Edit</button>
            <button id="deleteButton_${pointOfInterestObject.id}">Delete</button>
        `
    }
}


export default blogHTML