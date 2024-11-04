import "./cardImage.css"

export const cardImage = (cardImg) => {
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card-image")

    const img = new Image()
    img.src = cardImg || "../assets/blank-profile.jpg"
    img.setAttribute("alt", "avatar image")

    cardDiv.appendChild(img)

    return cardDiv
}