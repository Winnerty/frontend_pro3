import { fetchUsers } from "./utils/fetchData"

import "./style.css"

import { handleData } from "./utils/handleData"

const usersArray = await fetchUsers()
if (usersArray.length) handleData(usersArray)