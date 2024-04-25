import { useGlobalContext } from "../context/AppContext";
import Country from "./Country";
import Loading from "./Loading";
import ConnectionError from "./ConnectionError";

const CountriesContainer = () => {

    const {countries, isLoading, isError} = useGlobalContext();
    
    if (isLoading) {
        return (
            <div className="countries-container flex-1 flex items-center justify-center">
                <Loading />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="countries-container flex-1 flex items-center justify-center">
                <ConnectionError />
            </div>
        );
    }

    return (
        <div className="countries-container w-full flex flex-col gap-2 lg:w-auto lg:flex-1">
            <div className="flex border-b-2 border-b-slate-400 w-full pb-4 md:pl-2">
                <span className="text-xs font-medium text-slate-300 basis-[11%] text-center md:text-left">Flag</span>
                <span className="text-xs font-medium text-slate-300 basis-[23%] text-center md:text-left">Name</span>
                <span className="text-xs font-medium text-slate-300 basis-[24%] text-center md:text-left">Population</span>
                <span className="text-xs font-medium text-slate-300 basis-[23%] text-center md:text-left">Area(km<sup>2</sup>)</span>
                <span className="text-xs font-medium text-slate-300 basis-[19%] text-center md:text-left">Region</span>
            </div>
            <div className="countries max-h-[42rem] overflow-auto flex flex-col pb-8">
                {countries?.map((country, i) => <Country key={i} {...country} />)}
            </div>
        </div>
    );
}

export default CountriesContainer;