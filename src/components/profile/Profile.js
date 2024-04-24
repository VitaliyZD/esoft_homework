import styles from './Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.profileImg}>
                <img src="https://yobte.ru/uploads/posts/2019-11/rosomaha-52-foto-26.jpg" />
            </div>
            <div className={styles.profileTitle}>Логан Геннадьевич Росомахин</div>
        </div>
    );
}