export function sortTableByColumn(table: HTMLTableElement, columnIndex: number, asc: boolean) {
	const tableBody = document.querySelector(".table__body");
	const rows = Array.from(table.rows).slice(1);

	const sortedRows = rows.sort((a, b) => {
	  const cellA = a.cells[columnIndex];
	  const cellB = b.cells[columnIndex];
	  const textA = cellA.textContent || '';
	  const textB = cellB.textContent || '';
	  return asc ? textA.localeCompare(textB) : textB.localeCompare(textA);
	});
 
 
	for (const row of sortedRows) {
		tableBody!.appendChild(row);
	}
 }