class TableCreator {
    
    static createTable(rows = 10, columns = 4) {
        let table = document.createElement('table');
        for(let i = 0; i < rows; i++) {
            let tableRow = document.createElement('tr');
            table.appendChild(tableRow)
            for(let j = 0; j < columns; j++) {
                let column = document.createElement('td');
                column.textContent = ' ';
                tableRow.appendChild(column)
            }
        }
        document.body.appendChild(table);
    }
}
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    let rows = parseInt(document.getElementById('rows').value);
    let columns = parseInt(document.getElementById('columns').value);
    TableCreator.createTable(rows, columns);
})