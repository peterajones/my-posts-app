import styles from './Bio.module.scss';

const Bio = ({ headshot, name, tagline, role }) => {
	return (
		<div className={styles.bio}>
			<div className={styles.bioImage}>
				<img
					src='https://avatars.githubusercontent.com/u/5428219?s=460&u=93741c2f57fcef66e2eed64ba4d13b606eeb1ac6&v=4'
					alt={`avatar of ${name}`}
				/>
			</div>
			<div className={styles.bioContent}>
				<p className={styles.bioContentName}>{name}</p>
				<p className={styles.bioContentTagline}>{tagline}</p>
				<p className={styles.bioContentRole}>{role}</p>
			</div>
		</div>
	);
};

export default Bio;
