// export function sortTableByColumn(table: HTMLTableElement, columnIndex: number, asc: boolean) {
// 	const tableBody = document.querySelector(".table__body");
// 	const rows = Array.from(table.rows).slice(1);

import { IJsonData, IUserData } from "../interfaces";
import { setData } from "./setData";

// 	const sortedRows = rows.sort((a, b) => {
// 	  const cellA = a.cells[columnIndex];
// 	  const cellB = b.cells[columnIndex];
// 	  const textA = cellA.textContent || '';
// 	  const textB = cellB.textContent || '';
// 	  return asc ? textA.localeCompare(textB) : textB.localeCompare(textA);
// 	});
 
 
// 	for (const row of sortedRows) {
// 		tableBody!.appendChild(row);
// 	}
//  }


 export function sortArrayOfObjects( property: string, order: 'asc' | 'desc' = 'asc') {
	const data:IJsonData = JSON.parse(sessionStorage.data) as IJsonData
	if (!Array.isArray(data.userData) || typeof property !== 'string') {
	  throw new Error('Invalid input');
	}

	 const userData = data.userData.sort((a, b) => {
	  if (order === 'asc') {
			if(property==="firstName" || property==="lastName"){
				return a['name'][property] > b['name'][property] ? 1 : -1
			}else{
				return a[property] > b[property] ? 1 : -1;
			}
	  } else {
		if(property==="firstName" || property==="lastName"){
			return a['name'][property] < b['name'][property] ? 1 : -1
		}else{
			return a[property] < b[property] ? 1 : -1;
		}
	  }
	});
	sessionStorage.data = JSON.stringify({userData});
	setData(0)
 }