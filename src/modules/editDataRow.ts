import { IJsonData } from '../interfaces'
import { setPage } from './setPagination'
//получаем измененные значения из формы редактирования
const editInputName:HTMLInputElement = document.getElementById("editInputName") as HTMLInputElement
const editInputSurname:HTMLInputElement = document.getElementById("editInputSurname") as HTMLInputElement
const editInputColorEye:HTMLInputElement = document.getElementById("editInputColorEye") as HTMLInputElement
const editInputAbout:HTMLInputElement = document.getElementById("editInputAbout") as HTMLInputElement

//Функция редакитрования строки
export function editDataRow(){
	//получаем id b данные пользователей из sessionStorage
	const id:string = sessionStorage.getItem('selectRow') as string
	const data:IJsonData = JSON.parse(sessionStorage.data) as IJsonData
	let userData = data.userData

	//присваиваем измененные значения из формы редактирования в новый массив
	for (let user of userData) {
		if(user.id===id){
			console.log(user)
			user.name.firstName = editInputName!.value
			user.name.lastName = editInputSurname!.value
			user.eyeColor = editInputColorEye!.value
			user.about = editInputAbout!.value
		}
	}
	// записываем новые значения пользователей в sessionStorage
	sessionStorage.data = JSON.stringify({userData});
	//находим выбранныю странизу пагинации на момент редактирования
	const selectPaginationButton = document.querySelector(".pagination__button.active")
	//устанавливаем найденную страницу
	setPage(selectPaginationButton!.innerHTML)
}
