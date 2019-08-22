
const blogHTML = {
    pointsOfInterest() {
        return `
            <h3 id=title>Points of Interest</h3>
            <div id=list>
                
            </div>
            <div>
                <button id="createBTN">Add New Point Of Interest</button>
            </div>
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
    // creats object out of input values
    createPOIList(pointOfIntrestObject) {
        return `
            <section id="pointOfIntrest">Point Of Interest: ${pointOfIntrestObject.pointOfIntrest}</section>
            <section id="description">Description: ${pointOfIntrestObject.decription}</section>
            <section id="cost">Cost: ${pointOfIntrestObject.cost}</section>
            <section id="location">Location: ${pointOfIntrestObject.location}</section>
            <button id="editButton_${pointOfIntrestObject.id}">Edit</button>
            <button id="deleteButton_${pointOfIntrestObject.id}">Delete</button>
        `
    }
}


export default blogHTML