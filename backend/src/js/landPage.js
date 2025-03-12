function validateInput(event) {
    const pattern = new RegExp("^[0-9.]*$");
    const input = event.key;

    if (!pattern.test(input))
        event.preventDefault();
}

let tagData, addTagRef, addRow, addCell 
const addTagForm = document.getElementById('addTagForm') // Get the form reference

addTagForm.addEventListener('submit', function(event){
    event.preventDefault() // Prevent the form from submitting
    tagData = new FormData(addTagForm)
    tableRef = document.getElementById('tagTable').getElementsByTagName("tbody")[0] // Get the table reference

    addRow = tableRef.insertRow() // -1 = Add inte the last row

    // Add the cells (columns) in the row
    addRow.insertCell(0).textContent = tagName
    addRow.insertCell(1).textContent = tagDesc
    addRow.insertCell(2).textContent = tagIP
    addRow.insertCell(3).textContent = tagType
    addRow.insertCell(4).textContent = tagScale
    addRow.insertCell(5).textContent = tagScan

    addCell.textConcent = tagData.get() // Add the tag in the cell

    addCell = addRow.insertCell(1) // Add the cell in the first column (0,-1)
    addCell.textConcent = tagData.get('tag') // Add the tag in the cell

    addCell = addRow.insertCell(2) // Add the cell in the first column (0,-1)
    addCell.textConcent = tagData.get('tag') // Add the tag in the cell
})