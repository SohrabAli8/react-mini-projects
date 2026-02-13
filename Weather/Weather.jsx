import React, { useEffect, useState } from 'react'

function Weather() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [weather, setWeather] = useState(null)
    const [value, setValue] = useState('')

    const fetchData = async () => {
        try {
            setLoading(true)
            const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=ea13e08c2aa4886da731c54464f07b80&units=metric`)
            const data = await result.json()
                console.log(data)
                setWeather(data)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }




        const handleClick = ()=>{
            fetchData()
        }

        function getCurrentDate(){
            return new Date().toLocaleString('en-us',{
                weekday:'long',
                month:'long',
                day:'numeric',
                year:'numeric'
            })
        }

   

    if (error) return <div>error occured ! Please Try Again</div>
    if (loading) return <div>Loading Please Wait..........!</div>
    return (
        <div className='flex flex-col items-center bg-yellow-400 min-h-screen'>
            <h1 className='text-4xl mt-30'>Wheather Application</h1>
            <div className='h-96 mt-10 w-md bg-cyan-20 rounded-2xl'>
                <input type="text"
                    placeholder='Enter city name'
                    name='value'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    className='bg-amber-50 mt-8 mx-6 p-2 w-65 border-none text-start px-4 rounded-xl  outline hover:bg-green-100 ' />

                <button className='bg-black p-2 mt-4 rounded-2xl cursor-pointer
                px-6 text-2xl text-white mb-8' onClick={handleClick}>Search</button>
            <div>
                 {
                weather && (<div>
                    
                    <p className=' text-2xl mt-2 font-bold  mx-25 '>
                        {weather?.name}
                         <span className='mx-4 '>
                        {weather?.sys?.country}
                        </span>
                        </p>
                        <p className='mx-25 text-3xl mb-4'> {weather?.main?.temp}°C</p>
                        <span className='mx-10 text-xl mb-8'>{ getCurrentDate()}</span>
                        <p className='mx-25 text-xl mt-2'>                            {
                            weather.weather && weather.weather[0]? weather.weather[0].description:''}
                        </p>
                            
                        <div>
                            <div className='mt-6 text-xl font-light'>
                                <p className='mx-15'>Wind Speed :{weather?.wind?.speed}km/h</p>
                                <p className='mx-25'>Humidity :{weather?.main?.humidity}%</p>
                            </div>
                        </div>
 

                </div>)
            }     
            </div>
                
            </div>
          
            
        </div>
    )
}

export default Weather