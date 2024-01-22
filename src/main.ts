import './style.scss'
import './resetStyle.scss'
import { setData } from './modules/setData.ts'
import { setSortingListener } from './modules/setSortingListener.ts'

const table:HTMLTableElement = document.getElementById("table") as HTMLTableElement

setData(4)

const titleName = document.querySelector(".titleName")!
const titleSurname = document.querySelector(".titleSurname")!
const titleAbout = document.querySelector(".titleAbout")!
const titleEyeColor = document.querySelector(".titleEyeColor")!

setSortingListener(titleName,table,[titleSurname,titleAbout,titleEyeColor],0)
setSortingListener(titleSurname,table,[titleName,titleAbout,titleEyeColor],1)
setSortingListener(titleEyeColor,table,[titleSurname,titleAbout,titleName],2)
setSortingListener(titleAbout,table,[titleSurname,titleName,titleEyeColor],3)



