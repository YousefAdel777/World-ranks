import {Link} from "react-router-dom";

const CountryError = () => {
    return (
        <div className="container">
            <section className="country-error px-4 py-6 bg-slate-600 rounded-lg flex flex-col items-center justify-center gap-4 text-center text-gray-200 lg:mt-16">
                <h1 className="text-2xl font-semibold">Error 404</h1>
                <h2 className="text-xl font-medium">Country Not Found !</h2>
                <Link to="/" className="block mx-auto px-3 py-2 bg-blue-300 rounded-md">
                    Go Home
                </Link>
            </section>
        </div>
    );
}

export default CountryError;