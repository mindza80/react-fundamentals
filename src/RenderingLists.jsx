const listForRender = [
    { value: 3, name: "List item value 3" },
    { value: 4, name: "List item value 4" },
    { value: 10, name: "List item value 10" },
    { value: 13, name: "List item value 13" },
    { value: 62, name: "List item value 62" },
    { value: 22, name: "List item value 22" },
    { value: 47, name: "List item value 47" },
    { value: 7, name: "List item value 7" },
    { value: 8, name: "List item value 8" },
  ];

export function RenderedList() {
    const listItems = listForRender.map(listValue =>
        <li key={listValue.value}>
            {listValue.name}
        </li>
    );

    const filteredItems = listForRender.filter(filteredValue =>
        filteredValue.value%2 == 0
    );

    const filteredListItems = filteredItems.map(filteredValue =>
        <li key={filteredValue.value}>
            {filteredValue.name}
        </li>
    );

return (
    <div>
        <h2>Full list:</h2>
        <ul>{listItems}</ul>
        <h2>Filtered list:</h2>
        <ul>{filteredListItems}</ul>
    </div>);
}