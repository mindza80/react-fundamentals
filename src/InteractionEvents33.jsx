export function InteractionEvents33() {
    function handleClick() {
        alert('Button was clicked.');
    };
    
    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <button onClick={handleClick}>
                Button
            </button>
            <input type="text" onChange={handleChange}/>
        </div>
    );
};

