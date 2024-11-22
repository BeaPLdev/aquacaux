document.querySelectorAll(".filter a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        let a = this.getAttribute("href").substring(1);
        document.querySelectorAll(".sets a").forEach(setLink => {
            if (!setLink.classList.contains(a) && a !== "all") {
                setLink.classList.add("hide");
            } else {
                setLink.classList.remove("hide");
            }
        });
    });
});

const btnContainer = document.getElementById("btncontainer");
const btns = btnContainer.getElementsByClassName("btn");

// Convertis la HTMLCollection en un tableau
const btnsArray = Array.from(btns);

btnsArray.forEach(btn => {
    btn.addEventListener("click", function() {
        const currentActive = document.querySelector(".btn-active");
        if (currentActive) {
            currentActive.classList.remove("btn-active");
        }
        this.classList.add("btn-active");
    });
});

const imgs = document.querySelectorAll("img");
let count;

imgs.forEach((img, index) => {
    img.addEventListener("click", function() {
        count = index;
        const openDiv = document.createElement("div");
        const imgPreview = document.createElement("img");
        const buttonsSection = document.createElement("div");
        buttonsSection.classList.add("buttonsSection");

        const closeBtn = document.createElement("button");
        const nextBtn = document.createElement("button");
        const prevButton = document.createElement("button");
        prevButton.innerText = "Précédent";
        nextBtn.innerText = "Suivant";

        nextBtn.classList.add("nextButton");
        prevButton.classList.add("prevButton");

        nextBtn.addEventListener("click", function() {
            if (count >= imgs.length - 1) {
                count = 0;
            } else {
                count++;
            }
            imgPreview.src = imgs[count].src;
        });

        prevButton.addEventListener("click", function() {
            if (count === 0) {
                count = imgs.length - 1;
            } else {
                count--;
            }
            imgPreview.src = imgs[count].src;
        });

        closeBtn.classList.add("closeBtn");
        closeBtn.innerText = "Fermer";
        closeBtn.addEventListener("click", function() {
            openDiv.remove();
        });

        imgPreview.classList.add("imgPreview");
        imgPreview.src = img.src;

        buttonsSection.append(prevButton, nextBtn);
        openDiv.append(imgPreview, buttonsSection, closeBtn);

        openDiv.classList.add("openDiv");
        document.body.append(openDiv);
    });
});







