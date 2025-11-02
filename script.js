function insert_Row() {
    //Write your code here
	const html = `
		<tr><td>New Cell1</td> 
		<td>New Cell2</td></tr> 
	`

		const table = document.querySelector('#sampleTable');
		table.insertAdjacentHTML('afterbegin', html);
}
