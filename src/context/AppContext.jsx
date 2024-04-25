/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";
import useFetch from '../hooks/useFetch';

const GlobalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {

    const {isLoading, isError, data} = useFetch("https://restcountries.com/v3.1/all?fields=name,flags,area,population,region,subregion,unMember,borders,independent,capital,cca3,languages,currencies,continents");
    const [filters, setFilters] = useState({
        sortBy: "population",
        keyword: "",
        regions: ["americas", "europe", "africa", "asia"],
        isIndependent: true,
        isMemberOfUN: false,
    });

    const handleFilterChange = (filterName, filterValue) => {
        if (filterName === "regions") {
            if (!filters.regions.includes(filterValue)) {
                setFilters(prevState => ({...prevState, [filterName]: [...prevState.regions, filterValue]}));
            }
            else {
                setFilters(prevState => ({...prevState, regions: prevState.regions.filter(region => region !== filterValue)}))
            }
        }
        else {
            setFilters(prevState => ({...prevState, [filterName]: filterValue}));
        }
    }

    const filterCountries = (filters, countries) => {
        let filteredCountries = countries && Array.from(countries);
        if (filters.sortBy === "name") {
            filteredCountries?.sort((a, b) => b.name.common > a.name.common ? -1 : 1);
        }
        else {
            filteredCountries?.sort((a, b) => b[filters.sortBy] < a[filters.sortBy] ? -1 : 1);
        }
        if (filters.regions.length > 0) {
            filteredCountries = filteredCountries?.filter(country => filters.regions.includes(country.region.toLowerCase()));
        }
        if (filters.keyword) {
            filteredCountries = filteredCountries?.filter(country => country.name.common.toLowerCase().includes(filters.keyword.toLowerCase()) || country.region.toLowerCase().includes(filters.keyword.toLowerCase()) || country.subregion.toLowerCase().includes(filters.keyword.toLowerCase()));
        }
        if (filters.isIndependent) {
            filteredCountries = filteredCountries?.filter(country => country.independent);
        }
        if (filters.isMemberOfUN) {
            filteredCountries = filteredCountries?.filter(country => country.unMember);
        }
        return filteredCountries;
    }

    const countries = useMemo(() => filterCountries(filters, data), [filters, data]);

    return (
        <GlobalContext.Provider value={{countries, isLoading, isError, handleFilterChange, filters, allCountries: data}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default AppContext;