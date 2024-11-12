import { fetchUsers } from "./utils/fetchData"
import "./style.css"
import { handleData } from "./utils/handleData"
import { modalComp } from "./components/modalComp"

export async function init() {
    const usersArray = await fetchUsers()
    if (usersArray.length) handleData(usersArray)
    app.appendChild(modalComp())
}

init()
