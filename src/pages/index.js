import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import Bio from '../components/Bio';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Bio
					headshot='https://avatars.githubusercontent.com/u/5428219?s=460&u=93741c2f57fcef66e2eed64ba4d13b606eeb1ac6&v=4'
					name='Peter Jones'
					tagline='Helping others learn by doing'
					role='Front End Web Developer'
				/>
				<ul className={styles.posts}>
					<li>
						<Post content="Hey, I'm a new post" date='Mar 19 2021' />
					</li>
					<li>
						<Post
							content='I’m working in Figma trying to design a new website that shows all
							of my Tweets!'
							date='Mar 18 2021'
						/>
					</li>
					<li>
						<Post
							content='I’m working in Figma trying to design a new website that shows all
							of my Tweets!'
							date='Mar 18 2021'
						/>
					</li>
					<li>
						<Post
							content='I’m working in Figma trying to design a new website that shows all
							of my Tweets!'
							date='Mar 18 2021'
						/>
					</li>
				</ul>
				<PostForm />
			</main>
		</div>
	);
}
