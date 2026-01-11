const datas = [
    {
        name: "Cherish Diams",
        subtitle: "Luxury Jewellery & Diamond E-commerce Platform",
        project_start: "Apr 2025",
        project_end: "Sep 2025",
        description: "A full-featured jewellery and diamond e-commerce platform with real-time price calculation, product customization, wishlist, cart, and secure checkout.",
        link: "https://cherishdiams.com/",
        imgsrc: "images/projects/cherish.jpg",
        type: ["E-commerce", "Jewellery", "Diamond Platform"],
        technology: ["Laravel", "Vue.js", "MySQL", "Bootstrap"]
    },
    {
        name: "Charitag",
        subtitle: "Shop with Purpose",
        description: "An e-commerce platform promoting conscious shopping by rewarding users with charity points. Includes merchant dashboards and admin impersonation.",
        link: "https://www.charitag.com/",
        imgsrc: "images/projects/charitag.jpg",
        type: ["Charity", "E-commerce"],
        technology: ["Laravel", "React", "TypeScript"]
    },
    // {
    //     name: "FreeMyArt",
    //     description: "Marketplace for artists to sell services with RESTful APIs and secure transactions.",
    //     link: "http://www.freemyart.org/",
    //     imgsrc: "#",
    //     type: ["Laravel API", "Mobile App"],
    //     technology: ["Laravel", "Azure DevOps"]
    // },
    {
        name: "Harbor Towns Cruises",
        description: "Geo-location based mobile app for discovering nearby events, cruises, and shops.",
        link: "https://play.google.com/store/apps/details?id=app.falco.vancouver.harbourcruises",
        imgsrc: "images/projects/HarborTownsCruises.png",
        type: ["Mobile App", "Travel"],
        technology: ["Laravel API"]
    },
    {
        name: "InHouseCME",
        description: "Medical education platform with live Zoom session integration for doctors.",
        link: "https://www.inhousecme.com",
        imgsrc: "images/projects/inhouse.jpg",
        type: ["Medical", "Zoom API"],
        technology: ["Laravel", "Vue.js"]
    },
    {
        name: "LegacyScrapbook",
        description: "Cloud-based photo & video sharing mobile application.",
        link: "#",
        imgsrc: "images/projects/legacyScrapbook.png",
        type: ["Mobile App", "Cloud"],
        technology: ["Laravel", "Firebase"]
    },
    {
        name: "TWC Foundation",
        description: "Mentorship and community platform built for foundation initiatives.",
        link: "https://twcfoundation.org",
        imgsrc: "images/projects/twcfoundation.jpg",
        type: ["Foundation", "Mentorship"],
        technology: ["Laravel", "Vue.js"]
    },
    {
        name: "Vervet Travel",
        description: "School and trip management mobile app with itineraries, expenses, and live updates.",
        link: "#",
        imgsrc: "images/projects/vervet.jpg",
        type: ["Travel", "Education"],
        technology: ["Laravel", "Flutter"]
    }
];


const projects = document.getElementById("posts");

projects.innerHTML = datas.map(data => {
    const image = data.imgsrc || "#";
    const link = data.link || "#";
    const types = Array.isArray(data.type) ? data.type.join(" • ") : data.type || "";
    const subtitle = data.subtitle ? `<small>${data.subtitle}</small>` : "";

    return `
        <div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
            <a href="${link}" target="_blank"
               class="portfolio-item isotope-item gsap-reveal-img">
               
                <div class="overlay">
                    <span class="wrap-icon icon-link2"></span>
                    <div class="portfolio-item-content">
                        <h3>${data.name}</h3>
                        ${subtitle}
                        <p>${types}</p>
                    </div>
                </div>

                <img src="${image}" class="img-fluid" alt="${data.name}" />
            </a>
        </div>
    `;
}).join("");
