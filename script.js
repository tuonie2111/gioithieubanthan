// Lấy các phần tử cần animation
const elements = document.querySelectorAll(
    ".timeline-item, .skill-card, .project-card"
);


// Hiệu ứng xuất hiện khi cuộn trang
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Theo dõi từng phần tử
elements.forEach((element) => {

    observer.observe(element);

});


// Header thay đổi nhẹ khi scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});