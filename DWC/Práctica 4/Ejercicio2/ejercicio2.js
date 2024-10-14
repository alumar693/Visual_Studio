class tableCreator {
    
    createTable(rows, columns) {
        let table = document.createElement('table');
        for(i = 0; i < rows; i++) {
            let column = table.appendChild('tr')
            for(j = 0; j < columns; j++) {
                column.appendChild('td')
            }
        }
    }

    createTable() {

    }
}