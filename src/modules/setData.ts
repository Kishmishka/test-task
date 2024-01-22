import {data} from '../data'
import { showEditMenu } from './showEditMenu';

export function setData(page:number){
	
//находим в html разметке тело таблицы
const tableBody = document.querySelector(".table__body");

let startPoint = page * 10
let endPoint = startPoint + 10
// заполнение таблицы
for (let i = startPoint; i < endPoint; i++) {
	let row = document.createElement('tr')
	row.classList.add("tableBody__row")
	row.id=data[i].id
	row.addEventListener("click",()=>{showEditMenu(row.id)})
	let editRow = document.createElement('tr')
	editRow.id=data[i].id
	for (const key in data[i]) {
		//заполение строки
		row.innerHTML = `<td class="table__cell columnName"><p>${data[i].name.firstName}</p></td>
								<td class="table__cell columnSurname"><p>${data[i].name.lastName}</p></td>
								<td class="table__cell columnEyeColor"><p>${data[i].eyeColor}</p></td>
								<td class="table__cell columnAbout"><p>${data[i].about}</p></td>`
	}
	tableBody?.appendChild(row)
}
}


