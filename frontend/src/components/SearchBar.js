export function SearchBar({ text, icon, position}) {

    if (position === "left") {
        return (
            <div style={{display: 'flex', alignItems: 'center', position: "relative", backgroundColor: '#e6e6e6' , padding: '5px',paddingLeft: '10px', borderRadius: '10px', marginBottom:'20px'}}>
                <img src={icon} style={{position:"relative"}}/>
                <input type="text" placeholder={text} style={{border: 'none', backgroundColor: 'transparent', paddingLeft: '10px'}}/>
            </div>
        )
    } else {
        return (
            <div style={{display: 'flex', alignItems: 'center', position: "relative", backgroundColor: '#e6e6e6' , padding: '5px', borderRadius: '10px',  marginBottom:'20px'}}>
                <input type="text" placeholder={text} style={{border: 'none', backgroundColor: 'transparent', padding: '5px'}}/>
                <img style={{position:"relative"}} src={icon}/>
            </div>
        )
    }
}