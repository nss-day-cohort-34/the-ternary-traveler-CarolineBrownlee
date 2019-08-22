const API = {
    getPOIList() {
        return fetch("http://localhost:8088/interests")
        .then(response => response.json())
    },
    saveNewPointOfInterest(saveNew) {
        return fetch("http://localhost:8088/interests", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(saveNew)
        })
            .then(response => response.json())
    }
}

export default API