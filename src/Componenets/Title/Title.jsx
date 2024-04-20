import propTypes from 'prop-types'

function Title(props) {
    return(
        <h1 className={props.tagName}>{props.text}</h1>
    );
}

Title.propTypes = {
    className: propTypes.string.isRequired,
    text: propTypes.string.isRequired
}

Title.defaultProps = {
    text: "Placeholder-Title"
}

export default Title;