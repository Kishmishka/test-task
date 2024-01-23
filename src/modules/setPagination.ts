import { tablePageRendering } from "./tablePageRendering"
const pagination = document.querySelector(".pagination")

//функция отрисовки пагинации
export function setPagination(countPage:number){
	//создание html элемента пагинации
	let html = ''
	for (let i = 0; i < countPage; i++) {
		html += `<div class="pagination__button">${i+1}</div>`
	}
	//добавление пагинации в разметку
	pagination!.innerHTML = html
	//устанавливаем активную страницу по умолчанию
	setPage('1')
	
	const paginationButtons = document.querySelectorAll(".pagination__button")
	//установка функции выбора страницы при нажатии кнопки пагинации
	for (const button of paginationButtons) {
		button.addEventListener("click", ()=>{
			setPage(button.innerHTML)
		})
	}
}
//функция установки активной страницы
export function setPage(page:string){
	const paginationButtons = document.querySelectorAll(".pagination__button")
	for (const button of paginationButtons) {
		if(button.innerHTML === page){
			tablePageRendering(Number(page)-1)
			button.classList.add('active')
		}else{
			button.classList.remove('active')
		}
	}
}
