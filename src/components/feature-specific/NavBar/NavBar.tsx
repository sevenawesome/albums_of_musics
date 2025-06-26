import type NavBarProps from "./NavBar.types";
import NavButton from "../../common/NavButton/NavButton";

export default function NavBar({ navLinks }: NavBarProps) {
    return (
        <nav className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium" >
            {navLinks.map(link => {
                return <NavButton
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    iconName={link.iconName}
                    className={link.className} />
            })}
        </nav>
    );
}


