
const params = new URLSearchParams(window.location.search);
const section = params.get("section");
const content = document.getElementById("content");

if (section === "about") {
    content.innerHTML = `
        <h1>About Me</h1>
        <div class="card">
            <h2>Hello, I'm Sahil Singh</h2>
            <p>
                Hello! I'm a Computer Science Engineering graduate
                from Centurion University of Technology and
                Management, Odisha.
            </p>

            <p>
                I'm an aspiring Full Stack Developer interested
                in building interactive and user-friendly web
                applications.
            </p>

            <p>
                I have worked on projects like QuickCart using
                HTML, CSS, JavaScript, and Bootstrap.
                I'm continuously improving my programming
                and problem-solving skills.
            </p>
        </div>
    `;
}

else if (section === "education") {
    content.innerHTML = `
        <h1>My Education</h1>

        <div class="card">
            <h2>B.Tech - CSE</h2>
            <p>Centurion University of Technology and Management, Odisha</p>
            <p>2022–2026 | CGPA: 8.1</p>
        </div>

        <div class="card">
            <h2>Class XII</h2>
            <p>Jan Sahakari College, Barap, Bihar</p>
            <p>2020–2022 | 70.2%</p>
        </div>

        <div class="card">
            <h2>Class X</h2>
            <p>Mother Teresa Public School, Dularpur, Bihar</p>
            <p>2019 | 62.8%</p>
        </div>
    `;
}

else if (section === "skills") {
    content.innerHTML = `
        <h1>My Skills</h1>
        <div class="card">
            <h2>Frontend</h2>
            <p>HTML, CSS, JavaScript, Bootstrap</p>
        </div>
        <div class="card">
            <h2>Backend</h2>
            <p>Python, Flask</p>
        </div>
        <div class="card">
            <h2>Tools</h2>
            <p>Git and GitHub,VS Code</p>
        </div>
    `;
}

else if (section === "projects") {
    content.innerHTML = `
        <h1>My Projects</h1>
        <a class="project-name"
           href="details.html?section=project-quickcart">
           QuickCart - E-commerce Website ↗
        </a>
        <a class="project-name"
           href="details.html?section=project-portfolio">
           Portfolio Website ↗
        </a>
        <a class="project-name"
           href="details.html?section=project-calculator">
           Calculator Website ↗
        </a>
        <a class="project-name"
           href="details.html?section=project-currency converter">
           Currency Converter Website ↗
        </a>
        <a class="project-name"
           href="details.html?section=project-smarthire">
           Smart Hire Website ↗
        </a>
        <a class="project-name"
           href="details.html?section=NOVA">
           NOVA (A Virtual Assistant) Website ↗
        </a>
        <p>Click the project name to view its details.</p>
    `;
}

else if (section === "project-quickcart") {
    content.innerHTML = `
        <h1>QuickCart</h1>
        <div class="card">
            <h2>Project Overview</h2>
            <p>An e-commerce website interface for browsing products
            and adding products to a cart.</p>
            <h2>Technologies</h2>
            <p>HTML, CSS, JavaScript, Bootstrap</p>
            <h2>Features</h2>
            <p>Product cards, navigation, login interface,
            and cart functionality as implemented.</p>
            <h2>Link to open</h2>
            <a class="project-link"
            href="https://sahilkk01.github.io/QuickCart/"
            target="_blank"
            rel="noopener noreferrer">
            Click Me →
            </a>
        </div>
        <a class="action-btn"
           href="details.html?section=projects">
           ← Back to Projects
        </a>
    `;
}
else if (section === "project-portfolio") {
    content.innerHTML = `
        <h1>Portfolio Website</h1>

        <div class="card">
            <h2>Project Overview</h2>
            <p>A personal portfolio website to showcase my skills,
            education, certificates, and projects.</p>

            <h2>Technologies</h2>
            <p>HTML, CSS, JavaScript</p>

            <h2>Features</h2>
            <p>Navigation, project details, certificate section,
            and responsive layout.</p>

            <h2>Link to open</h2>
            <a class="project-link"
               href="https://sahilkk01.github.io/Portfolio/"
               target="_blank"
               rel="noopener noreferrer">
               Visit Portfolio →
            </a>
        </div>

        <a class="action-btn"
           href="details.html?section=projects">
           ← Back to Projects
        </a>
    `;
}
else if (section === "project-calculator") {
    content.innerHTML = `
        <h1>Calculator Website</h1>

        <div class="card">
            <h2>Project Overview</h2>
            <p>A responsive calculator to Solve  complex calculation. At a time</p>

            <h2>Technologies</h2>
            <p>HTML, CSS, JavaScript</p>

            <h2>Features</h2>
            <p>Addition, Subtraction, Multiplication, Division</p>

            <h2>Link to open</h2>
            <a class="project-link"
               href="https://sahilkk01.github.io/Calculator/"
               target="_blank"
               rel="noopener noreferrer">
               Open Calculator →
            </a>
        </div>

        <a class="action-btn"
           href="details.html?section=projects">
           ← Back to Projects
        </a>
    `;
}
else if (section === "project-currency converter") {
    content.innerHTML = `
        <h1>Currency Converter Website</h1>

        <div class="card">
            <h2>Project Overview</h2>
            <p>A responsive Converter Website which is used to convert the currency at a time  
            from 6 different currencies to each other </p>

            <h2>Technologies</h2>
            <p>HTML, CSS, JavaScript</p>

            <h2>Features</h2>
            <p>USD-INR, EUR-JPY, etc</p>

            <h2>Link to open</h2>
            <a class="project-link"
               href="https://sahilkk01.github.io/Currency-Converter/"
               target="_blank"
               rel="noopener noreferrer">
               Open Website →
            </a>
        </div>

        <a class="action-btn"
           href="details.html?section=projects">
           ← Back to Projects
        </a>
    `;
}
else if (section === "project-smarthire") {
    content.innerHTML = `
        <h1>Smart Hire Website</h1>

        <div class="card">
            <h2>Project Overview</h2>
            <p>SmartHire is a Python Flask web application that compares resumes with job descriptions,
            identifies matching and missing skills, calculates a match score, and suggests improvements
            to help job seekers improve their resumes.</p>

            <h2>Technologies</h2>
            <p>python, flask, html, css, sqlite, web-scraping, resume-analyzer, render</p>

            <h2>Features</h2>
            <p>SmartHire compares resumes with job descriptions, identifies matching and missing skills, and calculates a match score.
           It also suggests resume improvements and stores previous analyses using SQLite.</p>

            <h2>Link to open</h2>
            <a class="project-link"
               href="https://smart-hire-9ndw.onrender.com"
               target="_blank"
               rel="noopener noreferrer">
               Visit Website →
            </a>
        </div>

        <a class="action-btn"
           href="details.html?section=projects">
           ← Back to Projects
        </a>
    `;
}

    else if (section === "NOVA") {
    content.innerHTML = `
        <h1>NOVA (A Virtual Assistant) Website</h1>

        <div class="card">
            <h2>Project Overview</h2>
            <p>NOVA – AI Voice Assistant: Developed a Flask-based AI voice assistant that allows users to interact through voice or text and receive intelligent responses in both text and speech.
            Supports continuous voice interaction, speech-to-text, text-to-speech, and conversation history for a hands-free, user-friendly experience.</p>

            <h2>Technologies</h2>
            <p>Python , Flask , HTML , CSS , JavaScript , Groq API , SpeechRecognition , PyAudio,| Web Speech API</p>

            <h2>Features</h2>
            <p>AI-Powered Multilingual Voice Interaction: Enables voice and text-based conversations with intelligent AI responses, speech-to-text processing, and natural-sounding spoken replies.
                  Real-Time Hands-Free Assistance: Supports continuous listening, voice interruption, interactive Start/Stop controls, and conversation history for a seamless assistant experience.</p>

            <h2>Link to open</h2>
            <a class="project-link"
               href="https://nova-1-p3rj.onrender.com"
               target="_blank"
               rel="noopener noreferrer">
               Visit NOVA →
            </a>
        </div>

        <a class="action-btn"
           href="details.html?section=projects">
           ← Back to Projects
        </a>
    `;
}

else if (section === "contact") {
    content.innerHTML = `
        <h1>Contact </h1>
        <div class="card">
        <p>
            Email:
            <a href="mailto:sahilkumarsingh97084@gmail.com">
                sahilkumarsingh97084@gmail.com
            </a>
        </p>
        <p>
            WhatsApp:
        <a href="https://wa.me/918292687840">
            +91-8292687840
        </a>
        </p>
        </div>
    `;
}


else if (section === "address") {
    content.innerHTML = `
        <h1>My Address</h1>

        <div class="address-card">
            <h2>Permanent Address</h2>
            <p>Hometown:     Ara</p>
            <p>District:     Bhojpur</p>
            <p>State:        Bihar</p>
            <p>Country:      India</p>
        </div>

        <div class="address-card">
            <h2>Current Address</h2>
            <p>City:         Hyderabad</p>
        </div>

    `;
}


else if (section === "certificates") {
    content.innerHTML = `
        <h1>My Certificates</h1>

        <div class="certificate-container">
                <a href="../public/image/certificate/Cisco Certificate Python.pdf"
                class="certificate-link">

                    <div class="certificate-card">
                        <h2>Python Certificate</h2>
                        <p>By Cisco</p>
                    </div>

                </a>
                <a href="../public/image/certificate/java GFG Certificate.pdf"
                class="certificate-link">

                    <div class="certificate-card">
                        <h2>Java Certificate</h2>
                        <p>By GFG</p>
                    </div>

                </a>

            <a href="../public/image/certificate/mango DB certificate.pdf"
                class="certificate-link">

                    <div class="certificate-card">
                        <h2>MangoDB Certificate</h2>
                        <p>By GFG</p>
                    </div>

                </a>
            <a href="../public/image/certificate/Conference Certificate.jpg"
                class="certificate-link">

                    <div class="certificate-card">
                        <h2>Conference Certificate</h2>
                        <p>By East West College</p>
                    </div>

                </a>

                <a href="../public/image/certificate/internship certificate 1.pdf"
                class="certificate-link">

                    <div class="certificate-card">
                        <h2>Internship Certificate</h2>
                        <p>By StaxTech</p>
                    </div>

                </a>
                <a href="../public/image/certificate/Internship Certificate 2.png"
                class="certificate-link">

                    <div class="certificate-card">
                        <h2>Internship Certificate</h2>
                        <p>By InternPe</p>
                    </div>

                </a>
                <a href="../public/image/certificate/Internship Certificate CSS 3.jpg"
                class="certificate-link">

                    <div class="certificate-card">
                        <h2>Internship Certificate</h2>
                        <p>By How to CSS</p>
                    </div>
                </a>
        </div>
    `;
}

else {
    content.innerHTML = `
        <h1>Section not found</h1>
        <p>Please return Home and select a section.</p>
    `;
}
