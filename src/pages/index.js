import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useAuth } from '../hooks/useAuth';
import { getAllPosts, createPost } from '../lib/posts';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import Bio from '../components/Bio';
import styles from '../styles/Home.module.scss';

export default function Home({ posts: defaultPosts }) {
	const [posts, updatePosts] = useState(defaultPosts);

	const postsSorted = posts.sort(function (a, b) {
		return new Date(b.date) - new Date(a.date);
	});

	const { user, logIn, logOut } = useAuth();

	async function handleOnSubmit(data, e) {
		e.preventDefault();
		await createPost(data);

		const posts = await getAllPosts();
		updatePosts(posts);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{!user && (
				<p>
					<button onClick={logIn}>Log In</button>
				</p>
			)}

			{user && (
				<p>
					<button onClick={logOut}>Log Out</button>
				</p>
			)}

			<main className={styles.main}>
				<Bio
					headshot='https://avatars.githubusercontent.com/u/5428219?s=460&u=93741c2f57fcef66e2eed64ba4d13b606eeb1ac6&v=4'
					name='Peter Jones'
					tagline='Helping others learn by doing'
					role='Front End Web Developer'
				/>
				<ul className={styles.posts}>
					{postsSorted.map(post => {
						const { id, content, date } = post;
						return (
							<li key={id}>
								<Post
									content={content}
									date={new Intl.DateTimeFormat('en-US', {
										dateStyle: 'short',
										timeStyle: 'short'
									}).format(new Date(date))}
								/>
							</li>
						);
					})}
				</ul>
				{user && <PostForm onSubmit={handleOnSubmit} />}
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const posts = await getAllPosts();

	return {
		props: {
			posts
		}
	};
}
