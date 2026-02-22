const modalPage = document.getElementById("modal-page");
const closeBtn = document.getElementById("closeModal");
const groupTitle = document.getElementById("we-are");
const membersGrid = document.getElementById("members-grid");
const contactForm = document.getElementById("contact-form");
const contactFeedback = document.getElementById("contact-feedback");

const imageViewer = document.getElementById("image-viewer");
const imageViewerImg = document.getElementById("image-viewer-img");
const imageViewerClose = document.getElementById("image-viewer-close");
const modalCard = document.querySelector(".parts-content");
const modalImagePanel = document.querySelector(".image-part-details");

const modalFields = {
    fullname: document.getElementById("modal-fullname"),
    age: document.getElementById("modal-age"),
    phone: document.getElementById("modal-phone"),
    email: document.getElementById("modal-email"),
    github: document.getElementById("modal-github"),
    stack: document.getElementById("modal-stack"),
    description: document.getElementById("modal-description"),
    image: document.getElementById("modal-image"),
};

const members = [
    {
        id: 1,
        nom: "RASOANIRINA",
        prenom: "Fetra Sarobidy",
        description:
            "Developpeur full-stack passionne de science des donnees et de solutions utiles.",
        github: "https://github.com/Patrick-p25s",
        numero: "038 89 45 215",
        email: "nomp6836@gmail.com",
        age: "18",
        langage: "PHP, Javascript, Python",
        image: "images/fond1.jpg",
        html: "personallePage/patrick.html",
    },
    {
        id: 2,
        nom: "TOTOZAFY",
        prenom: "Jean Brindo",
        description:
            "Administrateur systeme et reseau, j'aime construire des architectures robustes.",
        github: "https://github.com/brind-toto",
        numero: "038 92 00 111",
        email: "brindtoto@gmail.com",
        age: "18",
        langage: "Linux, PHP, Javascript",
        image: "Brindo/Brindo1.png",
        html: "Brindo/Brindo.html",
    },
    {
        id: 3,
        nom: "RANDRIANANTSOA",
        prenom: "Steeve Edith",
        description:
            "Passionne par le web moderne, l'UI propre et les experiences fluides.",
        github: "https://github.com/edit-p25",
        numero: "034 11 88 333",
        email: "edit-emit@gmail.com",
        age: "19",
        langage: "HTML, CSS, Javascript",
        image: "Edith/edtih.png",
        html: "Edith/edith.html",
    },
    {
        id: 4,
        nom: "RASOAMANANA",
        prenom: "Elia Carène",
        description:
            "Curieux et rigoureux, j'aime transformer les idees en applications concretes.",
        github: "https://github.com/elia",
        numero: "034 67 45 120",
        email: "lova.emit@gmail.com",
        age: "19",
        langage: "PHP, MySQL, Javascript",
        image: "images/fond4.jpg",
        html: "personallePage/elia.html",
    },
    {
        id: 5,
        nom: "ANDONIAINA",
        prenom: "Voary",
        description:
            "Interesse par le backend, la qualite du code et la maintenance long terme.",
        github: "https://github.com/voary",
        numero: "033 40 25 781",
        email: "ando.emit@gmail.com",
        age: "18",
        langage: "Node.js, PHP, SQL",
        image: "Voary/Voary1.jpg",
        html: "Voary/Voary.html",
    },
    {
        id: 6,
        nom: "MAMILALAINA",
        prenom: "Fleuria",
        description:
            "Je prefere les interfaces propres, lisibles et faciles a utiliser sur mobile.",
        github: "https://github.com/fleuria",
        numero: "034 21 56 008",
        email: "miora.emit@gmail.com",
        age: "18",
        langage: "CSS, Javascript, UI",
        image: "Fleuria/Fleuria1.jpg",
        html: "Fleuria/Fleuria.html",
    },
    {
        id: 7,
        nom: "RAVELONARIVO",
        prenom: "Stephan",
        description:
            "Concentre sur les performances et la clarte des choix techniques.",
        github: "https://github.com/stephan",
        numero: "032 57 00 441",
        email: "tahina.emit@gmail.com",
        age: "19",
        langage: "Python, Javascript, API",
        image: "Stephan/Stephan1.jpg",
        html: "Stephan/Stephan.html",
    },
    {
        id: 8,
        nom: "RAKOTOMALALA",
        prenom: "Johny Nantenaina",
        description:
            "J'aime apprendre vite, prototyper et livrer un rendu solide.",
        github: "https://github.com/johny",
        numero: "034 88 10 500",
        email: "nirina.emit@gmail.com",
        age: "18",
        langage: "HTML, CSS, PHP",
        image: "Johny/Johny1.jpg",
        html: "Johny/Johny.html",
    },
    {
        id: 9,
        nom: "RANDRIANANTENAINA",
        prenom: "Nomentsoa Patrick",
        description:
            "Interesse par l'algorithmique, la logique et le developpement web.",
        github: "https://github.com/Patrick-p25s",
        numero: "032 09 42 210",
        email: "mamy.emit@gmail.com",
        age: "18",
        langage: "C, PHP, Javascript",
        image: "Patrick/patrick.png",
        html: "Patrick/Patrick.html",
    },
    {
        id: 10,
        nom: "RANDRIAMANANA",
        prenom: "Alain Odon",
        description:
            "Toujours motivee pour collaborer et faire avancer le projet en equipe.",
        github: "https://github.com/felana",
        numero: "033 21 09 773",
        email: "odon.emit@gmail.com",
        age: "18",
        langage: "HTML, CSS, Javascript",
        image: "Alain/Odon.jpg",
        html: "Alain/Odon.html",
    },
];

const groupNames = [
    "GROUPE B METU",
    "LES 10 FANTASTIQUES",
    "LES COURAGEUX",
    "LES SOLIDAIRES",
];

const THEME_STORAGE_KEY = "emit-theme";

let titleIndex = 0;
let isModalOpen = false;
let isViewerOpen = false;

function renderMembers() {
    membersGrid.innerHTML = members
        .map(
            (member) => `
                <article class="info-card">
                    <div class="card-img">
                        <img src="${member.image}" alt="Photo de ${member.prenom}" class="image click-fullscreen">
                    </div>
                    <section class="text-card">
                        <h3 class="card-title">${member.prenom}</h3>
                        <p class="card-description">${member.description}</p>
                        <div class="card-buttons">
                            <button class="en-savoir-plus button" type="button" data-member-id="${member.id}">En savoir plus</button>
                            <button class="perso-btn button"><a href="${member.html}" target="_blank" class="link">Details</a></button>
                        </div>
                    </section>
                </article>
            `
        )
        .join("");
}

function animateGroupTitle() {
    groupTitle.classList.remove("we-are-anim");
    void groupTitle.offsetWidth;

    groupTitle.textContent = groupNames[titleIndex];
    groupTitle.classList.add("we-are-anim");
    titleIndex = (titleIndex + 1) % groupNames.length;
}

function fillModal(member) {
    modalFields.fullname.textContent = `${member.nom} ${member.prenom}`;
    modalFields.age.textContent = `${member.age} ans`;
    modalFields.phone.textContent = member.numero;
    modalFields.email.textContent = member.email;
    modalFields.stack.textContent = member.langage;
    modalFields.description.textContent = member.description;
    modalFields.image.src = member.image;
    modalFields.image.alt = `Photo de ${member.prenom}`;

    modalFields.github.href = member.github;
    modalFields.github.textContent = member.github;
}

function openModal(memberId) {
    const member = members.find((item) => item.id === memberId);
    if (!member) return;

    fillModal(member);
    isModalOpen = true;
    if (modalCard) {
        modalCard.classList.remove("mobile-info-open");
    }
    modalPage.classList.add("is-open");
    modalPage.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    isModalOpen = false;
    modalPage.classList.remove("is-open");
    if (modalCard) {
        modalCard.classList.remove("mobile-info-open");
    }
    modalPage.setAttribute("aria-hidden", "true");

    if (!isViewerOpen) {
        document.body.style.overflow = "";
    }
}

function bindMemberActions() {
    membersGrid.addEventListener("click", (event) => {
        const actionBtn = event.target.closest("[data-member-id]");
        if (!actionBtn) return;

        const memberId = Number(actionBtn.dataset.memberId);
        openModal(memberId);
    });
}

function openImageViewer(src, altText) {
    if (!src) return;

    imageViewerImg.src = src;
    imageViewerImg.alt = altText || "Fullscreen image";
    imageViewer.classList.add("is-open");
    imageViewer.setAttribute("aria-hidden", "false");
    isViewerOpen = true;
    document.body.style.overflow = "hidden";
}

function closeImageViewer() {
    imageViewer.classList.remove("is-open");
    imageViewer.setAttribute("aria-hidden", "true");
    isViewerOpen = false;

    if (!isModalOpen) {
        document.body.style.overflow = "";
    }
}

function bindImageFullscreen() {
    document.addEventListener("click", (event) => {
        const clickedImage = event.target.closest(".click-fullscreen");
        if (!clickedImage) return;
        if (
            clickedImage.id === "modal-image" &&
            window.matchMedia("(max-width: 680px)").matches
        ) {
            return;
        }

        openImageViewer(clickedImage.src, clickedImage.alt);
    });

    imageViewerClose.addEventListener("click", closeImageViewer);

    imageViewer.addEventListener("click", (event) => {
        if (event.target === imageViewer) {
            closeImageViewer();
        }
    });
}

function initModalControls() {
    closeBtn.addEventListener("click", closeModal);

    modalPage.addEventListener("click", (event) => {
        if (event.target === modalPage) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && isViewerOpen) {
            closeImageViewer();
            return;
        }

        if (event.key === "Escape" && isModalOpen) {
            closeModal();
        }
    });

    if (modalImagePanel && modalCard) {
        modalImagePanel.addEventListener("click", () => {
            if (!window.matchMedia("(max-width: 680px)").matches) return;
            modalCard.classList.toggle("mobile-info-open");
        });
    }
}

function initCarousel() {
    const carouselRoot = document.getElementById("hero-carousel");
    const slides = Array.from(document.querySelectorAll(".carousel-slide"));
    const dotsContainer = document.getElementById("carousel-dots");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    let dots = [];

    if (!carouselRoot || !slides.length || !dotsContainer || !prevBtn || !nextBtn) {
        return;
    }

    dotsContainer.innerHTML = slides
        .map(
            (_, idx) =>
                `<button type="button" class="carousel-dot${
                    idx === 0 ? " is-active" : ""
                }" data-slide="${idx}" aria-label="Slide ${idx + 1}"></button>`
        )
        .join("");
    dots = Array.from(dotsContainer.querySelectorAll(".carousel-dot"));

    let slideIndex = 0;
    let carouselTimer;

    function showSlide(nextIndex) {
        slideIndex = (nextIndex + slides.length) % slides.length;

        slides.forEach((slide, idx) => {
            slide.classList.toggle("is-active", idx === slideIndex);
        });

        dots.forEach((dot, idx) => {
            dot.classList.toggle("is-active", idx === slideIndex);
        });
    }

    function startCarousel() {
        clearInterval(carouselTimer);
        carouselTimer = setInterval(() => {
            showSlide(slideIndex + 1);
        }, 3400);
    }

    prevBtn.addEventListener("click", () => {
        showSlide(slideIndex - 1);
        startCarousel();
    });

    nextBtn.addEventListener("click", () => {
        showSlide(slideIndex + 1);
        startCarousel();
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            showSlide(Number(dot.dataset.slide));
            startCarousel();
        });
    });

    carouselRoot.addEventListener("mouseenter", () => clearInterval(carouselTimer));
    carouselRoot.addEventListener("mouseleave", startCarousel);

    showSlide(0);
    startCarousel();
}

function initThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    function setTheme(nextTheme) {
        document.body.setAttribute("data-theme", nextTheme);
        try {
            localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        } catch (error) {
            // Ignore storage errors and keep the in-memory theme switch.
        }
        themeToggle.setAttribute(
            "aria-label",
            nextTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        );
    }

    function resolveInitialTheme() {
        let storedTheme = null;
        try {
            storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        } catch (error) {
            storedTheme = null;
        }
        if (storedTheme === "light" || storedTheme === "dark") {
            return storedTheme;
        }

        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }

        return "light";
    }

    setTheme(resolveInitialTheme());

    themeToggle.addEventListener("click", () => {
        const isDark = document.body.getAttribute("data-theme") === "dark";
        setTheme(isDark ? "light" : "dark");
    });
}


function initContactForm() {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        contactFeedback.textContent = "Message envoye avec succes. Merci pour votre confiance.";
        contactForm.reset();

        setTimeout(() => {
            contactFeedback.textContent = "";
        }, 3600);
    });
}

renderMembers();
bindMemberActions();
bindImageFullscreen();
initModalControls();
initCarousel();
initThemeToggle();
initContactForm();

animateGroupTitle();
setInterval(animateGroupTitle, 2600);

document.body.classList.add("page-loaded");
