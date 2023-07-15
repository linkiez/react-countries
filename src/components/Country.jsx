import Item from "./Item";

export default function Country({
  children: country = null,
  onCountryClick = null,
  isVisited = false,
}) {
  if (!country) {
    return <div>Country not found</div>;
  }

  const DemographicDensity = country.population / country.area;
  const {
    name: { common: name },
    capital,
    region,
    population,
    area,
  } = country;

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(country.cca3);
    }
  }

  const isVisitedClassName = isVisited ? "bg-green-400" : "bg-white";

  return (
    <div
      className={`border border-black p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer ${isVisitedClassName}`}
      onClick={handleCountryClick}
    >
      <img src={country.flags.svg} alt={country.flags.alt} className="w-48" />
      <ul>
        <li>
          <Item label="Nome:">{name}</Item>
        </li>
        <li>
          <Item label="Capital:">{capital}</Item>
        </li>
        <li>
          <Item label="Região:">{region}</Item>
        </li>
        <li>
          <Item label="População:">{population}</Item>
        </li>
        <li>
          <Item label="Area²:">{area}</Item>
        </li>
        <li>
          <Item label="Densidade demografica:">{DemographicDensity}</Item>
        </li>
      </ul>
    </div>
  );
}
