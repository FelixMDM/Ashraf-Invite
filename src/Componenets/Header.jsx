
function Header(props) {

    return(
        <header className="header-container">
            <div className="title-header">
                <h1>
                    Ashraf Invitational 2024
                </h1>
                <button className="go-button" onClick={props.handleClick}>Go to</button>
            </div>
        </header>
    );
}

export default Header