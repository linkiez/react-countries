export default function Country({children: country = null}){
    if(!country){
        return <div>Country not found</div>
    }
    
    return (
        <div>
            {country.name.common}
        </div>
    )
}
