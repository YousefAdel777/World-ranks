import { useGlobalContext } from "../context/AppContext"
import Select from "../components/Select"
import Checkbox from "./Checkbox";

const options = [{label: "Population", value: "population"}, {label: "Area", value: "area"}, {label: "Name", value: "name"}]
const regions = ["americas", "antarctic", "africa", "asia", "europe", "oceania"];

const Sidebar = () => {
    const {handleFilterChange, filters} = useGlobalContext();

    const handleCheckbox = (e) => {
        handleFilterChange(e.target.name, e.target.checked);
    }

    return (
        <div className="sidebar w-full md:w-auto md:basis-[23%]">
            <div className="sort-select mb-9">
                <span className="block mb-1 text-slate-300 text-xs">Sort by</span>
                <Select options={options} value={filters.sortBy} onChange={(option) => handleFilterChange("sortBy", option)} />
            </div>
            <div className="regions-options mb-8">
                <span className="block mb-2 text-slate-300 text-xs">Region</span>
                <div className="flex flex-wrap gap-2">
                    {regions.map((region, i) => <button className={filters.regions.includes(region) ? "region-btn active" : "region-btn"} key={i} onClick={() => handleFilterChange("regions", region)}>{`${region[0].toUpperCase()}${region.slice(1,)}`}</button>)}
                </div>
            </div>
            <div className="status flex flex-col gap-3">
                <span className="block text-slate-300 text-xs">Status</span>
                <Checkbox 
                    onChange={handleCheckbox} 
                    name="isMemberOfUN" 
                    id="memeberOfUN"
                    label="Member of the United Nations"
                    checked={filters.isMemberOfUN}
                    value="isMemberOfUN"
                />
                <Checkbox 
                    onChange={handleCheckbox} 
                    label="Independent"
                    name="isIndependent" 
                    id="independent" 
                    checked={filters.isIndependent}
                    value="isIndependent" 
                />
            </div>
        </div>
    );
}

export default Sidebar;