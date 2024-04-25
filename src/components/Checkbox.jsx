/* eslint-disable react/prop-types */
import { useRef } from "react";
import check from "../assets/Done_round.svg"

const Checkbox = ({onChange, label, name, id, checked, value}) => {

    const inputRef = useRef();

    return (
        <div className="checkbox relative flex items-center gap-3">
            <input 
                type="checkbox" 
                name={name}
                onChange={onChange}
                id={id}
                checked={checked}
                value={value}
                ref={inputRef}
                className="appearance-none cursor-pointer h-6 w-6 rounded-md border-[3px] border-slate-300 checked:bg-blue-300 checked:border-blue-300"
            />
            <img className="absolute left-0 top-1/2 -translate-y-1/2 hidden cursor-pointer" src={check} alt="check icon" onClick={() => inputRef.current.click()} />
            <label className="cursor-pointer text-white text-sm font-medium" htmlFor={id}>{label}</label>
        </div>
    );
}

export default Checkbox;