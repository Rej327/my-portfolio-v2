import React from "react";
import classes from "./Contact.module.css";
import Link from "next/link";

const Contact = () => {
	return (
		<div className={classes.socialPlatforms}>
			<h1 className="text-2xl mb-8">My Social Accounts</h1>

			<Link
				className={`${classes.btn} ${classes.btnIcon} ${classes.btnFacebook}`}
				href="https://www.facebook.com/resujeff27"
				target="_blank"
			>
				<i className="fa fa-facebook"></i>
				<span>Facebook</span>
			</Link>
			<Link
				className={`${classes.btn} ${classes.btnIcon} ${classes.btnGooglePlus}`}
				href="#"
			>
				<i className="fa fa-google-plus"></i>
				<span>Google+</span>
			</Link>
			<Link
				className={`${classes.btn} ${classes.btnIcon} ${classes.btnLinkedIn}`}
				href="www.linkedin.com/in/jeffersonrsrrccn"
				target="_blank"
			>
				<i className="fa fa-linkedin"></i>
				<span>LinkedIn</span>
			</Link>
			<Link
				className={`${classes.btn} ${classes.btnIcon} ${classes.btnGitHub}`}
				href="https://github.com/Rej327"
				target="_blank"
			>
				<i className="fa fa-github"></i>
				<span>GitHub</span>
			</Link>
		</div>
	);
};

export default Contact;
