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

export interface IJsonData{
userData:IUserData[]
}