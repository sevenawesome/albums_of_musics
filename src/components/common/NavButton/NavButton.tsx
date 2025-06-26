import { NavLink } from "react-router-dom";
import type NavButtonProps from "./NavButton.types";
import Icon from "../Icon/Icon.tsx";

export default function NavButton({ to, label, iconName }: NavButtonProps) {
    return (
        <NavLink to={to} className={({ isActive }) => (isActive ? "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group bg-gray-200" : "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group")}>
            <Icon name={iconName} />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{label}</span>
        </NavLink>
    )
}   