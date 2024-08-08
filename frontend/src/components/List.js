import {SearchBar} from "./SearchBar";


export function List({items, pointStyle}) {
    let listItems

    if (pointStyle === 'none') {
        listItems = items.map(item =>
            <li style={{listStyleType: 'none'}} key={item.id}> <SearchBar position={item.position} text={item.text} icon={item.icon}/></li>
        );
    } else {
        listItems = items.map(item =>
            <li key={item.id}> <SearchBar position={item.position} text={item.text} icon={item.icon}/></li>
        );
    }

    return <ul>{listItems}</ul>

}