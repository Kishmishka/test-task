import './styles/resetStyle.scss'
import './styles/task.scss'
import './styles/table.scss'
import './styles/editMenu.scss'
import './styles/pagination.scss'
import { setSortingListener } from './modules/setSortingListener.ts'
import {userData} from './data'
import { setPage, setPagination } from './modules/setPagination.ts'

sessionStorage.data =JSON.stringify({userData})

setPage('1')

const titleName = document.querySelector(".titleName")!
const titleSurname = document.querySelector(".titleSurname")!
const titleAbout = document.querySelector(".titleAbout")!
const titleEyeColor = document.querySelector(".titleEyeColor")!

setSortingListener(titleName,"firstName",[titleSurname,titleAbout,titleEyeColor])
setSortingListener(titleSurname,"lastName",[titleName,titleAbout,titleEyeColor])
setSortingListener(titleEyeColor,"eyeColor",[titleSurname,titleAbout,titleName])
setSortingListener(titleAbout,"about",[titleSurname,titleName,titleEyeColor])

setPagination(Math.floor(userData.length/10))
