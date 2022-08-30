import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

export function NavBar() {
    return (
        <div className="styles1">
            <h2 className="styles2">
                Bassed
            </h2>
            <ul className="styles2">
                <li>
                    Our Craft

                </li>
                <li>
                    Home

                </li>
                <li>
                    Contact Us

                </li>
                <CartWidget/>
            </ul>
        </div>
    )
}
