import React, { useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'

const Homepage = () => {
    let [jobs, setJobs] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)
    useEffect(()=>{
        getJobs()

    },[])

    let getJobs = async()=>{
        let response = await fetch('http://127.0.0.1:8000/api/jobs/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.statusa === 200){
            setJobs(data)

        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
        

    }
    return (
        <div>
            <p>This is the home page</p>
            <ul>
                {jobs.map(job =>(
                    <li>{job.description}</li>
                ))}
            </ul>

        </div>
    )
}

export default Homepage
