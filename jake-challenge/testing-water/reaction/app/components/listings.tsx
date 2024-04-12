
type thing = {
    item: string
};

type array = {
    items: string[]
};

export default function Listings({ items }: array) {
    const listItems = items.map(item => <li>{item}</li>)
    //map creates a new array populated with the results of calling a provided function on every element in the array
    return (
        <ul>{listItems}</ul>
    )
}