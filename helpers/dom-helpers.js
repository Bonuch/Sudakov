export function setBodyHidden() {
    const body = document.querySelector("body");

    if (body) {
        if (body.classList.contains("overflow-hidden")) {
            body.classList.remove("overflow-hidden");
        } else {
            body.classList.add("overflow-hidden");
        }
    }
};

export function setBodyVisible() {
    const body = document.querySelector("body");

    if (body) {
        body.classList.remove("overflow-hidden");
    }
};
