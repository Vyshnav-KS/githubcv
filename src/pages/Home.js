import { StyleSheet, css } from "aphrodite";
import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import Ghub from "../ghub.png";
import Mail from "../mail.png";
import Web from "../web.png";
import Twt from "../twitter.png";
// import { Image } from "semantic-ui-react";

const Home = () => {
	const [name, setName] = useState("");
	const [userName, setUserName] = useState("");
	const [followers, setFollowers] = useState("");
	const [following, setFollowing] = useState("");
	const [repos, setRepos] = useState("");
	const [avatar, setAvatar] = useState("");
	const [userInput, setUserInput] = useState("");
	const [bio, setBio] = useState("");
	const [tuname, setTuname] = useState("");
	const [email, setEmail] = useState("");
	const [website, setWebsite] = useState("");
	const [error, setError] = useState(null);
	const [profile, setProfile] = useState("");

	useEffect(() => {
		fetch("https://api.github.com/users/example")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setData(data);
			});
	}, []);

	const setData = ({
		name,
		login,
		followers,
		following,
		public_repos,
		avatar_url,
		bio,
		twitter_username,
		blog,
		email,
		html_url,
	}) => {
		setName(name);
		setUserName(login);
		setFollowers(followers);
		setFollowing(following);
		setRepos(public_repos);
		setAvatar(avatar_url);
		setBio(bio);
		setTuname(twitter_username);
		setWebsite(blog);
		setEmail(email);
		setProfile(html_url);
	};

	const handleSearch = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = () => {
		fetch(`https://api.github.com/users/${userInput}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.message) {
					setError("No user found");
				} else {
					setData(data);
					setError(null);
				}
			});
	};

	return (
		<div className={css(styles.root)}>
			<div className={css(styles.search)}>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Input onChange={handleSearch} placeholder="Github userame" />

						<Form.Button content="Submit" />
					</Form.Group>
				</Form>
			</div>

			{error ? (
				<h1>{error}</h1>
			) : (
				<div className={css(styles.container)}>
					<div className={css(styles.leftContainer)}>
						<div className={css(styles.leftContents)}>
							<div className={css(styles.imgsec)}>
								<div>
									<img
										src={avatar}
										alt="avatar"
										className={css(styles.avatar)}
									/>
								</div>
								<span className={css(styles.uname)}>{userName}</span>
							</div>
							<div className={css(styles.socials)}>
								<div className={css(styles.socialIcons)}>
									<img src={Web} alt="" className={css(styles.iconStyle)} />
									<span className={css(styles.desc)}>{website}</span>
								</div>
								<div className={css(styles.socialIcons)}>
									<img src={Twt} alt="" className={css(styles.iconStyle)} />
									<span className={css(styles.desc)}>{tuname}</span>
								</div>
								<div className={css(styles.socialIcons)}>
									<img src={Mail} alt="" className={css(styles.iconStylem)} />
									<span className={css(styles.desc)}>{email}</span>
								</div>
							</div>
							<div className={css(styles.btnsec)}>
								<button className={css(styles.button)}>
									<img src={Ghub} alt="" className={css(styles.buttonimg)} />
								</button>
							</div>
						</div>
					</div>

					{/* Right section */}
					<div className={css(styles.rightContainer)}>
						<div className={css(styles.rightContents)}>
							<div className={css(styles.nameSection)}>
								<span className={css(styles.fullName)}>{name}</span>
								<div className={css(styles.divider)}></div>
							</div>

							{/* bio Sectiom */}

							<div className={css(styles.bioSection)}>
								<span className={css(styles.bio)}>Bio</span>
								<div className={css(styles.bioCard)}>
									<span className={css(styles.bioContent)}>{bio}</span>
								</div>
							</div>

							{/* Status section */}

							<div className={css(styles.statusSection)}>
								<div className={css(styles.statusCard)}>
									<div className={css(styles.circle)}>
										<div className={css(styles.statusNo)}>{followers}</div>
									</div>
									<span className={css(styles.statusText)}>followers</span>
								</div>
								<div className={css(styles.statusCard)}>
									<div className={css(styles.circle)}>
										<div className={css(styles.statusNo)}>{following}</div>
									</div>
									<span className={css(styles.statusText)}>following</span>
								</div>
								<div className={css(styles.statusCard)}>
									<div className={css(styles.circle)}>
										<div className={css(styles.statusNo)}>{repos}</div>
									</div>
									<span className={css(styles.statusText)}>repos</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	// img: {
	// 	width: 100,
	// 	height: 100,
	// },

	container: {
		display: "flex",
		flexDirection: "row",
		marginTop: 30,
		height: 850,
		width: 1200,
		borderRadius: 15,
		// filter: "blur(4px)",
		backdropFilter: "blur(30px)",
		background:
			"linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));",
	},
	leftContainer: {
		marginTop: "0px !important",
		textAlign: "left",
		width: 414,
		height: 850,
		borderRadius: 15,
		background:
			"linear-gradient(141.57deg, rgba(255, 255, 255, 0.7) 0.88%, rgba(255, 255, 255, 0.3) 77.88%)",
	},
	leftContents: {
		marginLeft: 23,
		marginRight: 23,
		width: 368,
		height: 640,
		paddingTop: 71,
	},
	imgsec: {
		display: "flex",
		flexDirection: "column",
		marginLeft: "auto",
		marginRight: "auto",
		textAlign: "center",
	},
	avatar: {
		width: 200,
		height: 200,
		borderRadius: "50%",
	},
	uname: {
		fontWeight: "bold",
		fontSize: 28,
		lineHeight: "34px",
		fontStyle: "normal",
		color: "#0A4A58",
	},
	socials: {
		minHeight: 205,
	},
	socialIcons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		marginBottom: 46,
		marginTop: 52,
	},
	iconStyle: {
		width: 40,
		height: 40,
	},
	iconStylem: {
		width: 33,
		height: 30,
	},
	desc: {
		fontWeight: 500,
		fontSize: 24,
		lineHeight: "29px",
		fontStyle: "normal",
		marginLeft: 20,
		color: "#0A4A58",
	},
	btnsec: {
		textAlign: "center",
	},
	button: {
		width: 169,
		height: 72,
		border: "1px solid #0A4A58",
		borderRadius: 15,
		background: "transparent",
		marginTop: 26,
		textAlign: "center",
		cursor: "pointer",
	},
	buttonimg: {
		width: 40,
		height: 40,
	},

	rightContents: {
		height: 587,
		width: 487,
		marginTop: 131,
		marginLeft: 59,
	},
	nameSection: {
		width: "auto",
		textAlign: "left",
		marginBottom: 66,
	},
	fullName: {
		fontSize: 50,
		lineHeight: "61px",
		fontWeight: "bold",
		fontStyle: "normal",
		color: "#0A4A58",
	},
	divider: {
		background: "rgba(255, 255, 255, 0.5)",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: 15,
		width: 361,
		height: 25,
	},
	bioSection: {
		width: 487,
		height: 221,
		textAlign: "left",
	},
	bio: {
		fontStyle: "normal",
		color: "#0A4A58",
		fontSize: 30,
		fontWeight: 600,
		lineHeight: "37px",
		marginBottom: 12,
	},
	bioCard: {
		maxWidth: 487,
		height: 171,
		background:
			"linear-gradient(105.1deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 100%)",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: 15,
		textAlign: "center",
		paddingTop: 46,
		paddingLeft: 33,
		paddingRight: 33,
		textAlign: "left",
	},
	bioContent: {
		fontStyle: "normal",
		color: "#0A4A58",
		fontSize: 30,
		fontWeight: "normal",
		lineHeight: "37px",
	},
	statusSection: {
		display: "flex",
		flexDirection: "row",
		marginTop: 67,
		justifyContent: "space-between",
	},
	statusCard: {
		width: 148,
		height: 135,
		background:
			"linear-gradient(105.1deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 100%)",
		textAlign: "center",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: 15,
	},

	circle: {
		width: 80,
		height: 80,
		background:
			"linear-gradient(180deg, rgba(141, 223, 139, 0.65) 0%, rgba(255, 255, 255, 0.13) 100%)",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		textAlign: "center",
		borderRadius: "50%",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 33,
		marginLeft: 33,
		marginTop: 12,
	},
	statusNo: {
		padding: 20,
		fontStyle: "normal",
		color: "#0A4A58",
		fontSize: 30,
		fontWeight: "bold",
		lineHeight: "37px",
	},
	statusText: {
		fontStyle: "normal",
		color: "#0A4A58",
		fontSize: 22,
		fontWeight: "bold",
		lineHeight: "27px",
	},
});

export default Home;
