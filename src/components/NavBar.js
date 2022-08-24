


let styles1 = {
    display: "flex",
    flexDirection: "column",
    color:"black",
    justifyContent:"center",
    textAlign:"center",
    background: "hsla(72, 100%, 47%, 1)",
    background:" linear-gradient(135deg, hsla(72, 100%, 47%, 1) 10%, hsla(246, 100%, 39%, 1) 100%)",
    background: "-moz-linear-gradient(135deg, hsla(72, 100%, 47%, 1) 10%, hsla(246, 100%, 39%, 1) 100%)",
    background: "-webkit-linear-gradient(135deg, hsla(72, 100%, 47%, 1) 10%, hsla(246, 100%, 39%, 1) 100%)",
};

let styles2 = {
    display:"flex",
    flexDirection:"column",
    fontSize: "30px",
    listStyle:"none",
    alignItems: "center",
    textAlign: "center",
    textTransform: "upperCase"
}



export function NavBar () {
    return (
        <div style={styles1}>
            <h2 style={styles2}>
                Bassed
            </h2>
            <ul style={styles2}>
            <li>
            Our Craft

            </li>
            <li>
            Home

            </li>
            Contact Us
            <li>

            </li>
        </ul>
        </div>
    )
}