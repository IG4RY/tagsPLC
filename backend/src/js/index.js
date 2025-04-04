// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('fecha').value = new Date().toISOString().split('T')[0];
// });

let selectedRow = null

function onFormSubmit() {
    event.preventDefault();
    let formData = readFormData()
    if (selectedRow == null)
        insertNewRecord(formData)
    else
        updateRecord(formData)
    resetForm()
}

function readFormData() {
    let formData = {}

    formData["tagName"] = document.getElementById("name").value
    formData["tagDescSelect"] = document.getElementById("dscSel").value
    formData["tagAddress"] = document.getElementById("addr").value
    formData["tagType"] = document.getElementById("type").value
    formData["tagScale"] = document.getElementById("scl").value
    formData["tagRate"] = document.getElementById("rte").value
    formData["tagValue"] = document.getElementById("val").value

    return formData
}

function insertNewRecord(data) {
    let table = document.getElementById("tagTable").getElementsByTagName('tbody')[0]
    let newRow = table.insertRow(-1) // -1 = Add in the last row

    cell1 = newRow.insertCell(0); cell1.innerHTML = data.tagName
    cell2 = newRow.insertCell(1); cell2.innerHTML = data.tagDescSelect
    cell3 = newRow.insertCell(2); cell3.innerHTML = data.tagAddress
    cell4 = newRow.insertCell(3); cell4.innerHTML = data.tagType
    cell5 = newRow.insertCell(4); cell5.innerHTML = data.tagScale
    cell6 = newRow.insertCell(5); cell6.innerHTML = data.tagRate
    cell7 = newRow.insertCell(6); cell7.innerHTML = data.tagValue

    cell8 = newRow.insertCell(7)
    cell8.innerHTML =
    `<a onClick="onEdit(this)">Edit</a>
    <br>
    <a onClick="onDelete(this)">Remove</a>`
}

function resetForm() {
    document.getElementById("name").value = ""
    document.getElementById("dscSel").value = ""
    document.getElementById("addr").value = ""
    document.getElementById("type").value = ""
    document.getElementById("scl").value = "1" // Minimum value
    document.getElementById("rte").value = "1000" // Minimum value
    document.getElementById("val").value = ""
    
    selectedRow = null
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement
    document.getElementById("name").value = selectedRow.cells[0].innerHTML
    document.getElementById("dscSel").value = selectedRow.cells[1].innerHTML
    document.getElementById("addr").value = selectedRow.cells[2].innerHTML
    document.getElementById("type").value = selectedRow.cells[3].innerHTML
    document.getElementById("scl").value = selectedRow.cells[4].innerHTML
    document.getElementById("rte").value = selectedRow.cells[5].innerHTML
    document.getElementById("val").value = selectedRow.cells[6].innerHTML
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.tagName
    selectedRow.cells[1].innerHTML = formData.tagDescSelect
    selectedRow.cells[2].innerHTML = formData.tagAddress
    selectedRow.cells[3].innerHTML = formData.tagType
    selectedRow.cells[4].innerHTML = formData.tagScale
    selectedRow.cells[5].innerHTML = formData.tagRate
    selectedRow.cells[6].innerHTML = formData.tagValue
}

function onDelete(td) {
    if (confirm('Are you sure to delete this row?')) {
        row = td.parentElement.parentElement
        document.getElementById("tagTable").deleteRow(row.rowIndex)
        resetForm()
    }
}