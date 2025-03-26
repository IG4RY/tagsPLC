function validateInput(event) {
    const pattern = new RegExp("^[0-9.]*$");
    const input = event.key;

    if (!pattern.test(input))
        event.preventDefault();
}


let tagData, addTagRef, addRow, addCell
const addTagForm = document.getElementById('addTagForm') // Get the form reference

addTagForm.addEventListener("submit", function(event){
    event.preventDefault() // Prevent the form from reload the page
    tagData = new FormData(addTagForm)
    addRowForm(tagData)
})

function addRowForm(tagData) {
    let tagTable = document.getElementById('tagTable') // Get the table reference
    addRow = tagTable.insertRow(-1) // -1 = Add in the the last row

    // Add the cells (colum ns) in the row
    addCell = addRow.insertCell(0)
    addCell.textContent = tagData.get('tagName')
    addCell = addRow.insertCell(1)
    addCell.textContent = tagData.get('tagIP')
    addCell = addRow.insertCell(2)
    addCell.textContent = tagData.get('tagType')
}