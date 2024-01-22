import { IJsonData } from '../interfaces';
import { showEditMenu } from './showEditMenu';



export function setData(page:number){

const data:IJsonData = JSON.parse(sessionStorage.data) as IJsonData
console.log(data.userData)
//находим в html разметке тело таблицы
const tableBody = document.querySelector(".table__body");

tableBody!.innerHTML=''

let startPoint = page * 10
let endPoint = startPoint + 10

// заполнение таблицы
for (let i = startPoint; i < endPoint; i++) {
	let row = document.createElement('tr')
	row.classList.add("tableBody__row")
	row.id=data.userData[i].id
	row.addEventListener("click",()=>{showEditMenu(row.id)})
	let editRow = document.createElement('tr')
	editRow.id=data.userData[i].id
	for (const key in data.userData[i]) {
		//заполение строки
		row.innerHTML = `<td class="table__cell columnName"><p>${data.userData[i].name.firstName}</p></td>
								<td class="table__cell columnSurname"><p>${data.userData[i].name.lastName}</p></td>
								<td class="table__cell columnEyeColor"><p>${data.userData[i].eyeColor}</p></td>
								<td class="table__cell columnAbout"><p>${data.userData[i].about}</p></td>`
	}
	tableBody?.appendChild(row)
}
}


