
import propTypes from "prop-types"
import styles from './Card.module.css'
import defaultImage from '/src/assets/opium.jpg'

function Card(props) {
    return(
        <div class={styles.card}>
            <img className={styles.image} src={props.src} alt={props.alt}></img>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.text}>{props.text}</p>
        </div>
    );
}

Card.propTypes = {
    src: propTypes.string.isRequired,
    title: propTypes.string,
    text: propTypes.string,
    alt: propTypes.string
}

Card.defaultProps = {
    src: {defaultImage},
    title: "Title",
    text: "Body",
    alt: "alternate-text"
}
export default Card;

