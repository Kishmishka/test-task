import { IJsonData } from '../interfaces';
import { showEditMenu } from './showEditMenu';

//Функция отрисовки таблицы и записи в строки значений
export function tablePageRendering(page:number){
//получаем данные пользователей из sessionStorage
const data:IJsonData = JSON.parse(sessionStorage.data) as IJsonData
//находим в html разметке тело таблицы
const tableBody = document.querySelector(".table__body");
//очищаем тело таблицы
tableBody!.innerHTML=''
//устанавливаем диапазон данных для отрисовки страницы
const countRowsPerPage = 10
let startPoint = page * countRowsPerPage
let endPoint = startPoint + countRowsPerPage

// заполнение таблицы
for (let i = startPoint; i < endPoint; i++) {
	//создаем строку таблицы
	let row = document.createElement('tr')
	row.classList.add("tableBody__row")
	row.id=data.userData[i].id
	//при клике на строку вызываем отрисовку редактирования строки
	row.addEventListener("click",()=>{showEditMenu(row.id)})
	//заполение строки
	
	for (const key in data.userData[i]) {
		row.innerHTML = `<td class="table__cell columnName"><p>${data.userData[i].name.firstName}</p></td>
								<td class="table__cell columnSurname"><p>${data.userData[i].name.lastName}</p></td>
								<td class="table__cell columnEyeColor"><p>${data.userData[i].eyeColor}</p></td>
								<td class="table__cell columnAbout"><p>${data.userData[i].about}</p></td>`
	}
	//добавление строки в разметку
	tableBody?.appendChild(row)
}
}


