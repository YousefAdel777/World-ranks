import Sidebar from "../components/Sidebar";
import CountriesContainer from "../components/CountriesContainer";
import Search from "../components/Search";
import { useGlobalContext } from "../context/AppContext";

const Home = () => {

    const {countries} = useGlobalContext();

    return ( 
        <div className="container pb-20">
            <section className="home shadow-md shadow-slate-600 pt-5 pb-7 px-3 bg-slate-600 border-2 border-slate-400 lg:rounded-2xl md:px-8">
                <div className="flex flex-col gap-6 items-center mb-10 md:flex-row md:gap-0 md:justify-between">
                    <p className="font-semibold text-slate-300">Found {countries?.length} countries</p>
                    <Search />
                </div>
                <div className="flex flex-col gap-14 lg:gap-6 lg:flex-row">
                    <Sidebar />
                    <CountriesContainer />
                </div>
            </section>
        </div>
    );
}

export default Home;