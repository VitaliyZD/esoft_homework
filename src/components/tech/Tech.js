import styles from './Tech.module.css';

export function Tech({title}) {
    return (
        <div className={styles.tech}>
            {title}
        </div>
    );
}