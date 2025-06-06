import React from "react";
import "../css/About.css";
import { LuLinkedin, LuGithub, LuDribbble } from "react-icons/lu";
import { SiGmail, SiAdobeillustrator } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div id="about" className="about-container">
			<h1>About Me</h1>
			<p>
				Hi, I'm <span>Kartheeswaran</span>, a passionate
				<span> Web Developer, UI/UX Designer</span> with a keen eye for design
				and functionality. I specialize in creating sleek, user-friendly web
				experiences that combine aesthetics with performance.
			</p>

			<h2>Technical Skills</h2>
			<ul>
				<li>
					<label>Frontend Development</label>
					<div className="icon">
						<i>
							<FaHtml5 />
						</i>
						<i>
							<FaCss3 />
						</i>
						<i>
							<RiJavascriptFill />
						</i>
						<i>
							<FaReact />
						</i>
						<i>
							<RiTailwindCssFill />
						</i>
					</div>
				</li>
				<li>
					<label>Backend Development</label>
					<div className="icon">
						<i>
							<IoLogoNodejs />
						</i>
						<i>
							<BiLogoMongodb />
						</i>
					</div>
				</li>
				<li>
					<label>UI/UX Design</label>
					<div className="icon">
						<i>
							<SiAdobeillustrator />
						</i>
					</div>
				</li>
			</ul>
			<p className="notes">
				I am always eager to explore new technologies and improve my skills to
				stay ahead in the ever-evolving digital landscape. Let's collaborate and
				bring your ideas to life!
			</p>
			<h3>Let's Connect</h3>
			<div className="social">
				<button
					type="button"
					onClick={() => (window.location = "mailto:karthees.in@gmail.com")}
				>
					<SiGmail />
				</button>

				<Link target="_blank" to="https://www.linkedin.com/in/MKarthees">
					<button type="button">
						<LuLinkedin />
					</button>
				</Link>
				<Link target="_blank" to="https://github.com/MKarthees">
					<button type="button">
						<LuGithub />
					</button>
				</Link>
				<Link target="_blank" to="https://dribbble.com/Karthees">
					<button type="button">
						<LuDribbble />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default About;
