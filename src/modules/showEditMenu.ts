import { editDataRow } from "./editDataRow"
//получаем элементы формы редактирования
const editMenu = document.querySelector(".editMenu")
const closeEditmenu = document.getElementById("closeEditmenu")
const editInputName:HTMLInputElement = document.getElementById("editInputName") as HTMLInputElement
const editInputSurname:HTMLInputElement = document.getElementById("editInputSurname") as HTMLInputElement
const editInputColorEye:HTMLInputElement = document.getElementById("editInputColorEye") as HTMLInputElement
const editInputAbout:HTMLInputElement = document.getElementById("editInputAbout") as HTMLInputElement
const editButton = document.getElementById("editButton")
//обработчик нажания кнопки закрытьия формы редактированиЯ
function handleCloseEditMenu() {
	editMenu?.classList.remove('active')
	closeEditmenu?.removeEventListener("click",handleCloseEditMenu)
 }
//обработчик нажания кнопки редактироания
 function handleEditRow() {
		editDataRow()
		editButton?.removeEventListener("click",handleCloseEditMenu)
 }

//функция отрисовки меню редактирования
export function showEditMenu(id:string){
	//записывем id редактируемой строки
	sessionStorage.setItem('selectRow', id)
	//получаем редактируемую строку
	const row:HTMLTableRowElement = document.getElementById(id) as HTMLTableRowElement
	//отрисовываем меню редактирования
	editMenu?.classList.add('active')
	//вешаем обработчики событий
	closeEditmenu?.addEventListener("click",handleCloseEditMenu)
	editButton?.addEventListener("click",handleEditRow)
	//заполняем данные формы редактирования текущими данными выбранной строки
	editInputName!.value = row.cells[0].innerText
	editInputSurname!.value = row.cells[1].innerText
	editInputColorEye!.value = row.cells[2].innerText
	editInputAbout!.value = row.cells[3].innerText
}