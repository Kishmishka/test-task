import './style.scss'
import './resetStyle.scss'
import { setData } from './modules/setData.ts'
import { setSortingListener } from './modules/setSortingListener.ts'
import {userData} from './data'
import { setPagination } from './modules/setPagination.ts'

const table:HTMLTableElement = document.getElementById("table") as HTMLTableElement

sessionStorage.data =JSON.stringify({userData})

setData(0)

const titleName = document.querySelector(".titleName")!
const titleSurname = document.querySelector(".titleSurname")!
const titleAbout = document.querySelector(".titleAbout")!
const titleEyeColor = document.querySelector(".titleEyeColor")!

setSortingListener(titleName,"firstName",[titleSurname,titleAbout,titleEyeColor])
setSortingListener(titleSurname,"lastName",[titleName,titleAbout,titleEyeColor])
setSortingListener(titleEyeColor,"eyeColor",[titleSurname,titleAbout,titleName])
setSortingListener(titleAbout,"about",[titleSurname,titleName,titleEyeColor])

setPagination(Math.floor(userData.length/10))
