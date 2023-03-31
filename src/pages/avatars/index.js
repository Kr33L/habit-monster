import Image from 'next/image'
import AvatarList from 'components/avatars/AvatarList'
import { getAllAvatars } from '../../model/avatars'
import styles from '../../styles/Avatar.module.css'

export default function AvatarShop({ avatars }) {
	return (
		<div className="bg">
			<h1 className={styles.heading}>The Avatar Shop</h1>
			<div className={styles.divider}></div>
			<div className="main-container">
				<AvatarList avatars={avatars} />
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const avatars = getAllAvatars()

	return {
		props: {
			avatars
		}
	}
}
