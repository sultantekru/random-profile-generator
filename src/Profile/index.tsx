import React, { useEffect, useState } from 'react'
import './style.css';
import axios from 'axios';

export const Profile: React.FC = () => {
    const [profileImage, setProfileImage] = useState();
    const [profileEmail, setProfileEmail] = useState();
    const [profileName, setProfileName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();

    const generateProfile = () => {
        axios.get("https://randomuser.me/api").then(res => {
            console.log(res);
            setPhoneNumber(res.data.results[0].cell)
            setProfileEmail(res.data.results[0].email)
            setProfileImage(res.data.results[0].picture.large);
            setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
        })
    }
    useEffect(()=>{
        generateProfile()
    },[])

    return (
        <div className='profile-container'>
            <div className="img-container">
                <img src={profileImage} />
            </div>
            <div className="info-container">
                <h2>{profileName}</h2>
                <h3>{profileEmail}</h3>
                <h4>{phoneNumber}</h4>
            </div>
            <div className="btn-container">
                <button className='btn' onClick={generateProfile}>Generate Random Profile</button>
            </div>
        </div>
    )
}






