import { sortArrayOfObjects } from "./sortingTableColumn"

//вспомогательная функция установки обработчиков события для сортировки таблицы
export function setSortingListener(activeElement:Element, property:string, inactiveElements:Element[]){
	activeElement!.addEventListener("click",()=>{
		
		for (const element of inactiveElements) {
			element!.classList.remove('active')
			element!.classList.remove('sortingUP')
		}
	
		if(activeElement?.classList.contains('active')){
			if(activeElement?.classList.contains('sortingUP')){
				sortArrayOfObjects(property)
				activeElement!.classList.remove('sortingUP')
			}else{
				sortArrayOfObjects(property,'desc')
				activeElement!.classList.add('sortingUP')
			}
			
		}else{
			activeElement!.classList.add('active')
			sortArrayOfObjects(property)
		}
		})
}