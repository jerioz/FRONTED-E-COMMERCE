import React, { useContext, useEffect} from "react";
import { UserContext } from '../../context/UserContext/UserState'
import './Profile.styles.scss'
import { Card, Space, Spin } from 'antd';

const Profile = () => {
    const { getUserInfo, user } = useContext(UserContext);
   
    
    useEffect(() => {
        getUserInfo();
        console.log(user)
    }, []);
    
    if (!user) {
      return <Spin size="large" />
    }
    
    return (
    <>
    <div className="profile__data">
        <h1>Profile</h1>
        <Space direction="vertical" size={16}>
    <Card className="profile__card"
      title={user.name}
      style={{
        width: 300,
      }}
    >
      <p>{user.email}</p>
    </Card>
  </Space>
    </div>
    </>
    )

};
    
export default Profile;
