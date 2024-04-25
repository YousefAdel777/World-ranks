/* eslint-disable react/prop-types */
import {useState} from "react";
import expandIcon from "../assets/Expand_down.svg"

const Select = ({options, value, onChange}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (e, option) => {
        e.stopPropagation();
        setIsOpen(false);
        onChange(option);
    }

    return (
        <div className="select select-none relative cursor-pointer rounded-lg w-full border-2 border-slate-400 font-medium text-md text-slate-300 bg-transparent px-3 py-2 flex flex-col gap-4" tabIndex={0} onClick={() => setIsOpen(prev => !prev)} onBlur={() => setIsOpen(false)}>
            <div className="current-option flex item-center justify-between">
                <span>
                    {(options.find(option => option.value === value)).label}
                </span>
                <img className={isOpen ? "rotate-180 duration-300" : "duration-300"} src={expandIcon} alt="expand icon" />
            </div>
            <div className={isOpen ? "options open" : "options"}>
                {options.map(option => {
                    return <div 
                    className={option.value === value ? "option active" : "option"} 
                    key={option.value} 
                    onClick={(e) => handleSelect(e, option.value)} 
                    >
                        {option.label}
                    </div>
                })}
            </div>
        </div>
    );
}

export default Select;