import Country from "./Country"

export default function Countries({children: countries = []}) {
    return (
        <div>
            <h2 className="text-center font-semibold">{countries.length} pais(es)</h2>
            {countries.map((country) => {
                return (
                    <Country key={country.cca3}>{country}</Country>
                )
            }
            )}
        </div>
    )
}
