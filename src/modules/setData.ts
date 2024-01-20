import {data} from '../data'

export function setData(){
//находим в html разметке тело таблицы
const tableBody = document.querySelector(".table__body");
// заполнение таблицы
for (let i = 0; i < data.length; i++) {
	let row = document.createElement('tr')

	for (const key in data[i]) {
		//заполение строки
		row.innerHTML = `<td class="table__cell columnName"><p>${data[i].name.firstName}</p></td>
								<td class="table__cell columnSurname"><p>${data[i].name.lastName}</p></td>
								<td class="table__cell columnAbout"><p>${data[i].about}</p></td>
								<td class="table__cell columnEyeColor"><p>${data[i].eyeColor}</p></td>`
	}
	tableBody?.appendChild(row)
}
}


