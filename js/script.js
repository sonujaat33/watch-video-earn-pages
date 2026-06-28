document.addEventListener("DOMContentLoaded", () => {

    const items =
        document.querySelectorAll(".faq-item");

    items.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            items.forEach(i => {

                if (i !== item) {

                    i.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });

});
