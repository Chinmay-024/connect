import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../public/connect.png";

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Image src={logo} width={140} height={60} />
			</div>
			<nav>
				<ul>
					<li>
						<Link href="/">All Meetups</Link>
					</li>
					<li>
						<Link href="/new-meetup">Add New Meetup</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
