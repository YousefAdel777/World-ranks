import { useParams, Link } from "react-router-dom";
import CountryError from "./CountryError"
import { useGlobalContext } from "../context/AppContext";

const CountryPage = () => {

    const { allCountries } = useGlobalContext();
    const {countryCode} = useParams();
    const country = allCountries?.find(country => country.cca3 === countryCode);
    
    if (!country) {
        return <CountryError />
    }

    return (
        <div className="container pb-20">
            <section className="country-page relative pt-44 pb-[4.5rem] border-2 border-slate-400 bg-slate-600 mx-auto w-full shadow-md shadow-slate-600 lg:w-3/5 lg:rounded-2xl">
                <img className="w-72 max-h-[13rem] absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/4 rounded-xl" src={country?.flags.svg} alt={`${country?.name.common} flag image`} />
                <div className="country-info">
                    <div className="country-name text-gray-200 text-center mb-9">
                        <h2 className="font-bold text-3xl">{country?.name.common}</h2>
                        <h3 className="max-w-xs text-center mx-auto">{country?.name.official}</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8 justify-center text-gray-200 mb-10 md:flex-row">
                    <div className="flex bg-slate-400 items-center justify-center rounded-xl py-2 divide-x-2 divide-slate-600">
                        <span className="px-5 py-1 text-sm">Population</span>
                        <span className="px-5 py-1">{country?.population.toLocaleString("en-US")}</span>
                    </div>
                    <div className="flex bg-slate-400 items-center justify-center rounded-xl py-2 divide-x-2 divide-slate-600">
                        <span className="px-5 py-1 text-sm">Area (km<sup>2</sup>)</span>
                        <span className="px-5 py-1">{country?.area.toLocaleString("en-US")}</span>
                    </div>
                </div>
                <div className="divide-y-2 divide-slate-400 border-t-2 border-slate-400 mb-8">
                    <div className="flex justify-between px-5 py-[1.375rem] text-sm">
                        <span className="text-slate-300">Capital</span>
                        <span className="text-white">{country?.capital.join(", ")}</span>
                    </div>
                    <div className="flex justify-between px-5 py-[1.375rem] text-sm">
                        <span className="text-slate-300">Subregion</span>
                        <span className="text-white">{country?.subregion}</span>
                    </div>
                    <div className="flex justify-between px-5 py-[1.375rem] text-sm">
                        <span className="text-slate-300">Language</span>
                        <span className="text-white">{country?.languages && Object.values(country.languages).join(", ")}</span>
                    </div>
                    <div className="flex justify-between px-5 py-[1.375rem] text-sm">
                        <span className="text-slate-300">Currencies</span>
                        <span className="text-white">{country?.currencies && Object.values(country.currencies).map(currency => currency.name).join(", ")}</span>
                    </div>
                    <div className="flex justify-between px-5 py-[1.375rem] text-sm">
                        <span className="text-slate-300">Continents</span>
                        <span className="text-white">{country?.continents && Object.values(country.continents).join(", ")}</span>
                    </div>
                </div>
                <div className="neighbour-countries px-5">
                    <span className="text-slate-300 block mb-5 text-sm">Neighbouring Countries</span>
                    <div className="flex items-center gap-4 max-w-full overflow-auto pb-3">
                        {country?.borders.map(borderCode => {
                            const borderCountry = allCountries.find(country => country.cca3 === borderCode);
                            return (
                                <Link to={`/${borderCountry.cca3}`} key={borderCode} className="border-country">
                                    <img className="mb-2 min-w-[5rem] max-w-[5rem] rounded-sm h-14 max-h-14" src={borderCountry.flags.png} alt={`${borderCountry.name.common} flag image`} />
                                    <span className="text-white max-w-[9ch] overflow-hidden whitespace-nowrap text-ellipsis text-center w-full block text-xs lg:text-left">{borderCountry.name.common}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CountryPage;