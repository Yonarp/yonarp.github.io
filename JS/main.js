import "./anim.js";

let flag = 0;

if (window.scrollTop) {
    flag = 0;
    // To make sure landing auto scroll only occurs once
}

document
    .querySelector(".image-container")
    .addEventListener("wheel", function(e) {
        if (flag === 0) {
            const delta = e.deltaY; // direction of mouse scroll

            if (delta > 0) {
                // if mouse scrolls downwards then start the auto scroll
                Jump(".graph-section", {
                    duration: 3000,
                });
                flag++;
            }
        } else {
            return;
        }
    });