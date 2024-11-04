import "./usersData.css"
/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {HTMLDivElement}
 */

export const usersData = (firstName, lastName) => {
	const dataContainer = document.createElement("div")
	dataContainer.classList.add("data-container")

	const ul = document.createElement("ul")

	for (let index = 0; index < 2; index++) {
		const li = document.createElement("li")
		if (index === 0) li.innerText = `First Name: ${firstName}`
		else li.innerText = `Last Name: ${lastName}`
		ul.appendChild(li)
	}

	dataContainer.appendChild(ul)

	return dataContainer
}