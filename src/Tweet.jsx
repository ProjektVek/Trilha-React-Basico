import styles from './App.module.css'

function Tweet(props) {
    console.log(props)
    return (
        <div className={styles.container}>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

export { Tweet };