function insert_Row() {
    //Write your code here
	const table = document.querySelector('#sampleTable');
    const row = table.insertRow(0);
    row.insertCell(0).innerText = 'New Cell1';
    row.insertCell(1).innerText = 'New Cell2';
}
