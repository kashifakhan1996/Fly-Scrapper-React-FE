const Filters = (props) =>{
    const { origin, destination, days, setOrigin, setDestination, setDays } = props
    return <div className="flex gap-4 mb-6">
                <input value={origin} onChange={e => setOrigin(e.target.value)} placeholder="Origin IATA" className="p-2 border" />
                <input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination IATA" className="p-2 border" />
                <input type="number" value={days} onChange={e => setDays(Number(e.target.value))} className="p-2 border" />
            </div>
}
export default Filters