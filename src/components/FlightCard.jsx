import logo from '../assets/airplane.png'
export default function FlightCard(props) {
  const { airline, flightNo, date, time } = props
    return (
      <div className="bg-[#1c2b3f] rounded-xl p-4 flex justify-between items-start shadow-md hover:scale-[1.02] transition">
      <div className='bg-white rounded-md flex items-center h-[100%] w-[20%]'>
        <img src={logo} styleheight={50} width={50}/>
      </div>
      
      <div>     
        <div className="text-gray-400 text-sm">{date}</div>
        <div className="text-xl font-semibold mt-1">{airline}</div>
        <div className="mt-1">Flight no.- {flightNo}</div>
        <div className="text-sm text-gray-300">{time}</div>
      </div>
      </div>
    )
  }
  