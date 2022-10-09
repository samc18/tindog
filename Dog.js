class Dog {
    constructor(dog) {
        this.name = dog.name
        this.avatar = dog.avatar
        this.age = dog.age
        this.bio = dog.bio
        this.hasBeenSwiped = dog.hasBeenSwiped
        this.hasBeenLiked = dog.hasBeenLiked 
    }

    displayDog() {
        document.getElementById("dog-card").innerHTML =
            `<div class="dog-card">
                <img class="dog-pic" src="${this.avatar}"/>
                <div class="dog-info">
                    <p class="dog-name-age">${this.name}, ${this.age}</p>
                    <p class="dog-phrase">${this.bio}</p>
                </div>
                <div id="dog-verdict" class="hidden">
                </div>
            </div>`
    }
    
    getLiked() {
        const dogVerdict = document.getElementById("dog-verdict")
        dogVerdict.innerHTML =
            `<img src="/images/badge-like.png"/>`
        dogVerdict.classList.remove("hidden")
        this.hasBeenLiked = true
        this.hasBeenSwiped = true
    }

    getNoped() {
        const dogVerdict = document.getElementById("dog-verdict")
        dogVerdict.innerHTML =
            `<img src="/images/badge-nope.png"/>`
        dogVerdict.classList.remove("hidden")
        this.hasBeenSwiped = true
    } 
}

export default Dog