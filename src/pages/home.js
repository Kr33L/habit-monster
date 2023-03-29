import CircularWrapper from 'components/cards/CircularWrapper'

import ProgressCircle from 'components/cards/ProgressCircle'
import Adviser from 'components/adviser/Adviser'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home({ score }) {
	console.log(score, ' this is from home page')
	return (
		<div className={styles.main}>
			{/* <Image
				src="/figma/home-page.png"
				width={300}
				height={600}
				alt="home page screenshot"
			/> */}

			<Adviser
				src="/icons/bear.png"
				text="Hey [userName], pick one of the options below to get started."
				speechBg={`var(--main-beige)`}
			/>

			<div className={`${styles.flex} ${styles.center}`}>
				<div className={styles['text-box']}>
					<p>Here’s how you’re doing far:</p>
					<h2>You’re doing great! Keep going</h2>
				</div>
				<ProgressCircle percentage={20} />
			</div>
			<div className={styles.flex}>
				<Link
					href="/challenges/today"
					className={styles['flex-item']}>
					<CircularWrapper
						diameter={150}
						borderWidth={8}
						borderColour="#007CAB"
						bgColor="#FFFFFF">
						<h2>CHALLENGES</h2>
						<p>
							Take on some <span>challenges</span> for today
						</p>
					</CircularWrapper>
				</Link>
				<Link
					href="/days"
					className={styles['flex-item']}>
					<CircularWrapper
						diameter={150}
						borderWidth={8}
						borderColour="#C96563"
						bgColor="#FFFFFF">
						<h2>DAYS</h2>
						<p>
							See your
							<span> progress on a</span> calendar
						</p>
					</CircularWrapper>
				</Link>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	//const userId = context.req.session.userId

	const userId = 1
	// Fetch the tasks data for the user from the API endpoint

	const response = await fetch(
		`http://localhost:3000/api/tasks?userId=${userId}`
	)
	const score = await response.json()
	console.log(score, ' home page getServerSideProps')

	return {
		props: {
			score
		}
	}
}
