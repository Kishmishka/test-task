import { editDataRow } from "./editDataRow"

const editMenu = document.querySelector(".editMenu")
const closeEditmenu = document.getElementById("closeEditmenu")

const editInputName:HTMLInputElement = document.getElementById("editInputName") as HTMLInputElement
const editInputSurname:HTMLInputElement = document.getElementById("editInputSurname") as HTMLInputElement
const editInputColorEye:HTMLInputElement = document.getElementById("editInputColorEye") as HTMLInputElement
const editInputAbout:HTMLInputElement = document.getElementById("editInputAbout") as HTMLInputElement
const editButton = document.getElementById("editButton")

function handleCloseEditMenu() {
	editMenu?.classList.remove('active')
	closeEditmenu?.removeEventListener("click",handleCloseEditMenu)
 }
 function handleEditRow() {
		editDataRow()
		editButton?.removeEventListener("click",handleCloseEditMenu)
 }


export function showEditMenu(id:string){
	
	sessionStorage.setItem('selectRow', id)
	const row:HTMLTableRowElement = document.getElementById(id) as HTMLTableRowElement
	closeEditmenu?.addEventListener("click",handleCloseEditMenu)

	editButton?.addEventListener("click",handleEditRow)

	editMenu?.classList.add('active')
	
	editInputName!.value = row.cells[0].innerText
	editInputSurname!.value = row.cells[1].innerText
	editInputColorEye!.value = row.cells[2].innerText
	editInputAbout!.value = row.cells[3].innerText
}