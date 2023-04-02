import {NavLink} from "react-router-dom"
export default function Button ({label, path}){
    return (
        <div>
            <NavLink to={path}>
                <button className="bg-opacity left-20 top-5 w-48 text-black text-sm">{label}</button>
            </NavLink>
        </div>
    )
}