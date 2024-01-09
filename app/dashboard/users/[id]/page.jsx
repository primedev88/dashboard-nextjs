import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt='' fill/>
                </div>
                Anuj Kumar
            </div>
            <div className={styles.formContainer}></div>
        </div>
    )
}

export default SingleUserPage