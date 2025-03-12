async function data(req, res, next) {
    try {
        const apiData = await callAPI();
        console.log(apiData); //Impresión en consola de todos los datos disponibles
        //Variables
        const lucheNameData = document.getElementById('lucheNameData');
        const sizeData = document.getElementById('sizeData');
        const colorData = document.getElementById('colorData');
        const accesoryData = document.getElementById('accesoryData');
        const quantityData = document.getElementById('quantityData');

        //Impresión de la relación de la variable con lo que ofrece la API. En este caso puse cosas random, el chiste es que agarre e imprima datos
        lucheNameData.innerText = apiData.name
        sizeData.innerText = apiData.height
        colorData.innerText = apiData.base_experience
        accesoryData.innerText = apiData.abilities[0].ability.name //Impresión de un dato específico de un arreglo
        quantityData.innerText = apiData.abilities[1].ability.name

        res.json(apiData);
    } catch (err) { 
        next(err);
    }
}

data(); //Ejecución automática al entrar en la interfaz

function filterTable() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}