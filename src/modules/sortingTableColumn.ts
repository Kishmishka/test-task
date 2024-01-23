import { IJsonData} from "../interfaces";
import { setPage } from "./setPagination";

//функция сортировки таблицы
 export function sortArrayOfObjects( property: string, order: 'asc' | 'desc' = 'asc') {
	//получаем данные пользователей 
	const data:IJsonData = JSON.parse(sessionStorage.data) as IJsonData

	//сортируем массив данных по свойству
	 const userData = data.userData.sort((a, b) => {
	  if (order === 'asc') {
			if(property==="firstName" || property==="lastName"){
				return a['name'][property] > b['name'][property] ? 1 : -1
			}else{
				return a[property] > b[property] ? 1 : -1;
			}
	  } else {
		if(property==="firstName" || property==="lastName"){
			return a['name'][property] < b['name'][property] ? 1 : -1
		}else{
			return a[property] < b[property] ? 1 : -1;
		}
	  }
	});
	//записивыем отсортированный массив в sessionStorage
	sessionStorage.data = JSON.stringify({userData});
	//переходим на первую страницу
	setPage('1')
 }