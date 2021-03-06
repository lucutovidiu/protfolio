import React from "react";
import Link from "next/link";
// import { sendMailVisitor } from "./HelperFunctions";

const LandingPageInfo = props => {
	// React.useEffect(() => {
	//   sendMailVisitor();
	// }, []);
	return (
		<div className="lp_info_wrapper pt-4">
			<div className="container">
				<h4 className="lp_info_wrapper_intro">A little intro about myself</h4>
				<div className="row pt-4 centerText">
					<div className="col-md-6">
						<h4>My Passion</h4>
						<p className="lead text-left text-justify pt-2">
							Starting since I was about 7 by that time there wasn't too many
							computers, but the first time I've seen one on TV made me fall in
							love with..., a few years later I've got my first computer at home
							and I was very very pleased. I have started programming in High
							School and always continued to study and programming. Then I went
							to the University and continued with programming and really loved
							learning about new technologies and frameworks. I'm really keen on
							getting better and better. Recently like 3 years ago I've started with
							developing in javascript with node and React, but about a year ago I've
							started intensively with Angular 2 and Java on backend, I absolutely love both.
						</p>
						<div className=" text-left pt-0 mt-0 mb-3">
							{/* <Link href="/about">
                <a className="badge">Check my story on the About Page</a>
              </Link> */}
						</div>
					</div>
					<div className="col-md-6">
						<h4>My Skills</h4>
						<p className="lead text-left text-justify pt-2">
							In the High School I've started Programing in Pascal with Visual
							Fox Pro as a database, it was a good brake into Programing. Then
							after in the University I've started hard into Programming
							starting with C and than C++, I used to use them to make daemon
							servers that do communication with a website or multi threading
							apps, I did love them... But the most I loved was Java,
							and of course more different technoloies and frameworks.
							Recently from about 3 years I've started hard on web programming
							in which I see big potential. So at the moment I work in my company as
							a Angular / Java programmer, on backend I we use Kafka as messaging service,
							as well as docker on daily basis, doing tests on java with JUnit and Mokito using as well sonarqube, also
							using Git daily which I master, we are developing in a Linux based environment
							sometines doing linux different scripts. below are tech I use: &nbsp;
							<span className="font-weight-bold small">
                HTML, CSS / SCSS, JAVASCRIPT / ANGULAR / REACT, JAVA EE / Spring Boot, 
                NODE / EXPRESS, MySql, MongoDB / GraphQL, Kafka, Git, Docker and Frameworks them.
              </span>
						</p>
						<div className="text-left pt-0 mt-0 ">
							<Link href="/About">
								<a className="badge">Checkout my About Page</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPageInfo;
