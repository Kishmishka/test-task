import { sortTableByColumn } from "./sortingTableColumn"

export function setSortingListener(activeElement:Element, table:HTMLTableElement, inactiveElements:Element[], column:number){
	activeElement!.addEventListener("click",()=>{
		
		for (const element of inactiveElements) {
			element!.classList.remove('active')
		}
	
		if(activeElement?.classList.contains('active')){
			if(activeElement?.classList.contains('sortingUP')){
				sortTableByColumn(table, column, true)
				activeElement!.classList.remove('sortingUP')
			}else{
				sortTableByColumn(table, column, false)
				activeElement!.classList.add('sortingUP')
			}
			
		}else{
			activeElement!.classList.add('active')
		}
		})
}