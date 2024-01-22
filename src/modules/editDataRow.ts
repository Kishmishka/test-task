// import {data} from '../data'
import { IJsonData } from '../interfaces'
import { setData } from './setData'
const editInputName:HTMLInputElement = document.getElementById("editInputName") as HTMLInputElement
const editInputSurname:HTMLInputElement = document.getElementById("editInputSurname") as HTMLInputElement
const editInputColorEye:HTMLInputElement = document.getElementById("editInputColorEye") as HTMLInputElement
const editInputAbout:HTMLInputElement = document.getElementById("editInputAbout") as HTMLInputElement


// export function editDataRow(){
// 	const id:string = localStorage.getItem('selectRow') as string
// 	const row:HTMLTableRowElement = document.getElementById(id) as HTMLTableRowElement
	
// 		row.cells[0].innerHTML =`<p>${editInputName!.value}</p>`   
//    	row.cells[1].innerHTML =`<p>${editInputSurname!.value}</p>` 
//   		row.cells[2].innerHTML =`<p>${editInputColorEye!.value}</p>`  
//    	row.cells[3].innerHTML =`<p>${editInputAbout!.value}</p>`  
// }
export function editDataRow(){
	const id:string = sessionStorage.getItem('selectRow') as string
	const data:IJsonData = JSON.parse(sessionStorage.data) as IJsonData
	let userData = data.userData
	// for (let i = 0; i < sessionStorage.data.length; i++) {
	// 	if(newData[i].id===id){
	// 		newData[i].name.firstName = editInputName!.value
	// 		newData[i].name.lastName = editInputSurname!.value
	// 		newData[i].eyeColor = editInputColorEye!.value
	// 		newData[i].about = editInputAbout!.value
	// 	}
		
	// }
	for (let row of userData) {
		if(row.id===id){
			console.log(row)
			row.name.firstName = editInputName!.value
			row.name.lastName = editInputSurname!.value
			row.eyeColor = editInputColorEye!.value
			row.about = editInputAbout!.value
		}
	}
	console.log(userData)
	sessionStorage.data = JSON.stringify({userData});
	setData(0)
}
