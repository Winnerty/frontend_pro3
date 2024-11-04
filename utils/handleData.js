/* components */
import { cardComponent } from "../components/cardComponent"
import { cardImage } from "../components/cardImage"
import { usersData } from "../components/usersData"
import { usersActions } from "../components/userActions"

export function handleData(usersArray) {
	app.innerText = ""
	usersArray.forEach((user) => {
		const cardArticle = cardComponent()
		cardArticle.setAttribute("userId", user.id)
		cardArticle.setAttribute("firstName", user.firstName)
		cardArticle.setAttribute("lastName", user.lastName)
		cardArticle.appendChild(cardImage(user.profileImg))
		cardArticle.appendChild(usersData(user.firstName, user.lastName))
		cardArticle.appendChild(usersActions())

		app.appendChild(cardArticle)
	})
}