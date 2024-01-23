//интерфэйс пользователья
export interface IUserData{
	id: string,
	name: {
		firstName: string,
	  lastName: string
	},
	phone: string,
	about: string,
	eyeColor: string
	[key: string]: any;
}
//вид хранения данных в sessionStorage
export interface IJsonData{
userData:IUserData[]
}