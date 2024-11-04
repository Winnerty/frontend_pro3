import "./cardImage.css"

export const cardImage = () => {
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card-image")

    const img = new Image()
    img.src = "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
    img.setAttribute("alt", "avatar image")

    cardDiv.appendChild(img)

    return cardDiv
}