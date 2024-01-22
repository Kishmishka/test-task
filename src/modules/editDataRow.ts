import {data} from '../data'
import { setData } from './setData'
const editInputName:HTMLInputElement = document.getElementById("editInputName") as HTMLInputElement
const editInputSurname:HTMLInputElement = document.getElementById("editInputSurname") as HTMLInputElement
const editInputColorEye:HTMLInputElement = document.getElementById("editInputColorEye") as HTMLInputElement
const editInputAbout:HTMLInputElement = document.getElementById("editInputAbout") as HTMLInputElement


export function editDataRow(){
	const id:string = localStorage.getItem('selectRow') as string
	const row:HTMLTableRowElement = document.getElementById(id) as HTMLTableRowElement
	
		row.cells[0].innerHTML =`<p>${editInputName!.value}</p>`   
   	row.cells[1].innerHTML =`<p>${editInputSurname!.value}</p>` 
  		row.cells[2].innerHTML =`<p>${editInputColorEye!.value}</p>`  
   	row.cells[3].innerHTML =`<p>${editInputAbout!.value}</p>`  
}
// export function editDataRow(){
// 	const id:string = localStorage.getItem('selectRow') as string
// 	for (const row of data) {
// 		if(row.id===id){
// 			row.name.firstName = editInputName!.value
// 			row.name.lastName = editInputSurname!.value
// 			row.eyeColor = editInputColorEye!.value
// 			row.about = editInputAbout!.value
// 		}
// 	}
// 	setData(1);
// }
