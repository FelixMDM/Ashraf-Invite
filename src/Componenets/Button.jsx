
function Button() {

    let count = 0;

    const handleClick = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
    }

    const handleClick2 = (e) => e.target.textContext = "Countdown started...";

    return(<button onDoubleClick={(e) => handleClick2(e)}>Click me!</button>);
}

export default Button;