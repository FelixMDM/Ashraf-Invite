

function List(props) {

    const itemList = props.items;

    itemList.sort((a, b) => a.name.localeCompare(b.name));

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp; 
                                            <b>{item.weight}{item.age}</b></li>);

    return(<>
        <h3 className="list-category">{props.category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>);
}

export default List;