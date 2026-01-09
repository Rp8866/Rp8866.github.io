const experience = [
    {
        company_name: "DK Infoway",
        job_title: "Full Stack Developer",
        start_date: "Mar 2025",
        end_date: "Present",
        location: "Surat, GJ",
        description: [
            "Developing and maintaining scalable web applications using Laravel and Vue.js.",
            "Designing REST APIs and integrating third-party services.",
            "Collaborating with UI/UX and QA teams to deliver high-quality features."
        ]
    },
    {
        company_name: "CodeWork Consulting",
        job_title: "Laravel Developer",
        start_date: "Nov 2022",
        end_date: "Jun 2024",
        location: "Surat, GJ",
        description: [
            "Built backend modules using Laravel, MySQL, and RESTful APIs.",
            "Implemented authentication, roles & permissions, and payment gateways.",
            "Optimized database queries and improved application performance."
        ]
    },
    {
        company_name: "JSR Infotech",
        job_title: "Laravel Developer",
        start_date: "Jun 2022",
        end_date: "Nov 2022",
        location: "Surat, GJ",
        description: [
            "Worked on CRM and admin panel development.",
            "Created reusable components and followed MVC architecture.",
            "Fixed bugs and improved existing modules."
        ]
    },
    {
        company_name: "WebCrypto IT Solution",
        job_title: "WordPress Developer",
        start_date: "Mar 2021",
        end_date: "Dec 2021",
        location: "Surat, GJ",
        description: [
            "Developed WordPress websites using custom themes and plugins.",
            "Converted Figma designs into responsive pages.",
            "Managed website performance and SEO basics."
        ]
    },
    {
        company_name: "WebCrypto IT Solution",
        job_title: "Sales and Marketing Specialist",
        start_date: "Mar 2021",
        end_date: "Dec 2021",
        location: "Surat, GJ",
        description: [
            "Handled client communication and requirement gathering.",
            "Planned digital marketing strategies and lead generation.",
            "Supported sales team with technical demonstrations."
        ]
    }
];


const timeline = document.getElementById("experience-timeline");

timeline.innerHTML = experience.map(exp => {
    const descriptionHTML = exp.description && exp.description.length
        ? `<ul>${exp.description.map(item => `<li>${item}</li>`).join("")}</ul>`
        : `<p>No description available.</p>`;

    return `
        <div class="experience-item">
            <span class="experience-date">
                ${exp.start_date || "N/A"} – ${exp.end_date || "N/A"}
            </span>
            <h3>${exp.company_name || "Company Name"}</h3>
            <h4>${exp.location || ""}</h4>
            <h5>${exp.job_title || "Job Title"}</h5>
            ${descriptionHTML}
        </div>
    `;
}).join("");
