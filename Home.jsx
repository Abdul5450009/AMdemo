import React, { useEffect, useState } from "react";
import "./Home.css";
function Home() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState("about");
    const [underlineStyle, setUnderlineStyle] = useState({ top: 0, height: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {

        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let current = "about";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 150;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });

            setActiveSection(current);
            updateUnderlinePosition(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const updateUnderlinePosition = (id) => {
        const activeLink = document.querySelector(`.nav-link[data-id='${id}']`);
        if (activeLink) {
            setUnderlineStyle({
                top: activeLink.offsetTop,
                height: activeLink.offsetHeight,
            });
        }
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
            setActiveSection(id);
            updateUnderlinePosition(id);
        }
    };

    return (
        <>
            <div className="cursor" style={{ left: position.x, top: position.y }}></div>

            <div>
                <h1 className="Heading1">Abdul Muqeet</h1>
                <h3 className="Heading3">Front-End Developer</h3>
                <p className="p1">
                    I create simple website using react+vite <br /> which is a very popular tool
                </p>
            </div>
            <div>
                
            <p className="p2">
                    I'm Abdul Muqeet, a <span className="target1">front-end developer who enjoys crafting responsive</span>, visually appealing websites that combine elegant design with efficient code. I specialize in HTML, CSS, and React+Vite, <span className="target2">focusing on creating seamless user experiences.</span> <br /> <br />
                    <span className="target3">My work revolves around accessibility, performance, and responsiveness,</span> ensuring that every website I build adapts smoothly across all screen sizes.
                    <br /> <br />
                    I take pride in writing clean, maintainable code and constantly explore new design techniques to refine my craft. <span className="target4">My goal is to create intuitive </span>, interactive experiences that not only function well but also feel engaging and dynamic.
                    <br /> <br />
                    Beyond development, I enjoy experimenting with UI animations, testing out new CSS tricks, and diving into JavaScript frameworks. I’m always looking for ways to enhance my skills, whether through hands-on projects or keeping up with the latest front-end trends.
                    <br /> <br />
                    <span className="target5">Building user-friendly and aesthetically</span> pleasing interfaces is what drives me. From small personal projects to larger-scale applications, I strive to deliver pixel-perfect designs that stand out. Coding, for me, isn’t just about writing lines of code—it’s about creating something meaningful.
                </p>
            </div>
            <nav className="navbar-column">
                <div className="underline" style={{ top: underlineStyle.top, height: underlineStyle.height }}></div>
                <a
                    href="#about"
                    className={`nav-link nav1 ${activeSection === "about" ? "active" : ""}`}
                    data-id="about"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("about");
                    }}
                >
                    About
                </a>
                <a
                    href="#education"
                    className={`nav-link nav2 ${activeSection === "education" ? "active" : ""}`}
                    data-id="education"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("education");
                    }}
                >
                    Education
                </a>
                <a
                    href="#skills"
                    className={`nav-link nav3 ${activeSection === "skills" ? "active" : ""}`}
                    data-id="skills"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("skills");
                    }}
                >
                    Skills
                </a>
            </nav>

            <section id="about">
                Hello
            </section>
            <div className="d1">
            <div className="Date1">2005-2019</div>
            <div className="tittle1">Kips School</div>
            <div className="p4">I have done Matric from kips school actually i have changed so many schools in past like frist i was from Lyceum then Beachonhouse and Kips</div>
            </div>

            <div className="d2"><div className="Date2">2020-2022</div></div>

            <div className="Date3">2023-2027</div>

            <div>
                <div className="tittle2">Punjab College</div>
                <div className="tittle3">University Of Managment And Technology</div>
            </div>
            <div>
                <div className="p5">Completed ICS from Punjab College, laying the foundation for my passion in tech and innovation.</div>
                <div className="p6">I am Doin Data Science From UMT i am in 4th semester currently</div>
            </div>
            <section id="education">
            Hello
            </section>

            <section id="skills">
            hello
            </section>
            <div>
                <img src="/c-.png" alt="" className="icon1" />
                <img src="/oop.png" alt="" className="icon2"/>
                <img src="/g.png" alt="" className="icon3"/>
                <img src="/w.png" alt="" className="icon4"/>
            </div>
            <div>
                <div className="Tittle1">C++</div>
                <div className="Tittle2">OOP</div>
                <div className="Tittle3">Graphic desgining</div>
                <div className="Tittle4">Data Entry</div>
            </div>
            <div className="P1">From loops to logic, I craft efficiency in every line of C++ code.</div>
            <div className="P2">Encapsulating ideas, inheriting knowledge, and polymorphing logic into innovation.</div>
            <div className="P3">Turning imagination into visuals, where creativity meets pixels.</div>
            <div className="P4">Precision and speed—every keystroke counts towards perfection.</div>
            
            <div>
               <a href="https://www.facebook.com/share/18wsFSbr5q/"><img src="/facebook.png" alt="" className="ICON1"/></a>
               <a href="https://www.youtube.com/@op_gamer346"><img src="/youtube.png" alt="" className="ICON2"/></a>
               <a href="https://www.instagram.com/abdulmuqeet4577?igsh=MXRqcnBmYnRxNWlwZA=="><img src="/instagram.png" alt="" className="ICON3"/></a>
            </div>
            <div className="Resume">
                <a href="https://drive.google.com/file/d/17a-TO1ggPm2iJgH7hqRVIbLQryUEUNdw/view?usp=sharing" target="_blank">View full resume</a>
                <img src="/right-up.png" alt="" className="right-up"/>
            </div>
        </>
    );
}

export default Home;
