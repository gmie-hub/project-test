import styles from '../Button/button.module.css'

const Button = () => {
    return (
        <button className={styles.container}>
            <div>
                <h3>$7,000</h3>
                <p>Estimated hedging payment</p>
            </div>
            <div className={styles.line}></div>
            <div>
                <h3>&gt; 15%</h3>
                <p>Strike rate</p>
            </div>
        </button>
    )
}

export default Button;