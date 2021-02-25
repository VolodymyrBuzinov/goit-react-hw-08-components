import styles from './startPage.module.css';



export default function StartPage() {
    return (
        <>
            <div className={styles.start}>
                <h1>Guest! Welcome to home page of our application!!!</h1>
                <br/>
                <p>If you want to use app you must register or login!</p>
        </div>
        </>
    )
}