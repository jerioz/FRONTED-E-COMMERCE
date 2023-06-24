import React, { useContext, useEffect} from "react";
import { UserContext } from '../../context/UserContext/UserState'
import './Profile.styles.scss'

const Profile = () => {
    const { getUserInfo, user } = useContext(UserContext);
   
    
    useEffect(() => {
        getUserInfo();
        console.log(user)
    }, []);
    
    if (!user) {
        return <span>Cargando...</span>;
    }
    
    return (
    <>
    <div className="data">
        <h1>Profile</h1>
        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
    </div>
    </>
    )

};
    
export default Profile;
