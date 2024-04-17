
function List(props) {


    const itemList = props.items;
    const category = props.category;

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Aphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); //numeric
    // fruits.sort((a, b) => b.name - (a.name)); //Reverse numeric

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);


    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b></li>);
    return (<><h3 className="list-category">{category}</h3><ol className="list-items">{listItems}</ol></>)


}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayof(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))

}
List.defaultProps = {
    category: "Category",
    items: []
}
export default List;