import { setData } from "./setData"
const pagination = document.querySelector(".pagination")
const paginationButtons = document.querySelectorAll(".pagination__button")

export function setPagination(countPage:number){
	let html = ''
		//заполение строки
	for (let i = 0; i < countPage; i++) {
		html += `<div class="pagination__button">${i+1}</div>`
		
	}
	pagination!.innerHTML = html

	const paginationButtons = document.querySelectorAll(".pagination__button")

	for (const button of paginationButtons) {
		button.addEventListener("click", ()=>{
			setData(Number(button.innerHTML)-1)
		})
	}
}


