import {Link} from "react-router-dom"

/* eslint-disable react/prop-types */

const Country = ({name, flags, population, area, region, cca3}) => {

    return (
        <Link className="country flex min-h-[3.75rem] gap-0.5 items-center pl-1 text-white text-xs duration-300 hover:bg-slate-300 md:pl-2 md:text-base" to={`/${cca3}`}>
            <div className="flag-image basis-[11%]">
                <img src={flags.png} alt={`${name.common} flag image`} className="w-12 h-7" />
            </div>
            <span className="basis-[24%] text-center md:text-left">{name.common}</span>
            <span className="basis-[24%] text-center md:text-left">{population.toLocaleString("en-US")}</span>
            <span className="basis-[23%] text-center md:text-left">{area.toLocaleString("en-US")}</span>
            <span className="basis-[19%] text-center md:text-left">{region}</span>
        </Link>
    );
}

export default Country;