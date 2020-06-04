let items = document.querySelectorAll(".item-bar");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
        let content = this.nextElementSibling;
        content.classList.toggle("hide");
    });
}
