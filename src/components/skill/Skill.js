import styles from './Skill.module.css';

export function Skill({title}) {
    return (
        <div className={styles.skill}>
            {title}
        </div>
    );
}