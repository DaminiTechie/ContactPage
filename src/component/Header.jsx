const Header =() => {
    return(
        <>
        <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:'1000px', margin:'0 auto'}}>
           <div className="header">
            <img src="image/Frame.png" alt="logo" style={{width:'82px', hight: '82px', top:'4px', left:'91px'}}/>
           </div>
           <ul style={{display:"flex", justifyContent:'space-between', alignContent:'center', listStyle:'none',
             gap:'10px', margin: '0 50px',
             padding:'0 20px', hight:'72px'}}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
           </nav>
        </>
    )
}
export default Header;