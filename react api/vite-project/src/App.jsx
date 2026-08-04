import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    const res = await fetch('http://localhost:3000/api');
    const resJson = await res.json();
    console.log(resJson);

    setData(resJson);

  }
  const fetchUserDetails = async () => {

    const res = await fetch('http://localhost:3000/userData');
    const resJson = await res.json();
    console.log(resJson);
    setUserData(resJson);
  }

  return (
    <>

      <div className='ml-100 mt-40'>
        <h1>calling api from backend</h1>

        <button className='bg-amber-200 px-4 py-2 rounded' onClick={fetchData} >Submit</button>

        {data && <p className='mt-4 text-lg'>Response from API: {data.message}</p>}

        <button className='bg-amber-200 px-4 py-2 rounded' onClick={fetchUserDetails} >Get User Data</button>




        {userData &&
          Object.entries(userData).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}

      </div>


    </>
  )
}

export default App
