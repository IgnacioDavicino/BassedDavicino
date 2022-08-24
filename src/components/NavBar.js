let styles1 = {
    display: "inline",
    color:"orange",
};

let styles2 = {
    fontSize: "30px",
    backgroundColor: "black",
    listStyle:"none"
}


export function NavBar () {
    return (
        <div style={styles1}>
            <h2 style={styles2}>
                Bassed
            </h2>
            <ul style={styles2}>
            <li>
            Nuestros Bajos

            </li>
            <li>
            Inicio

            </li>
            Contactanos
            <li>

            </li>
        </ul>
        </div>
    )
}