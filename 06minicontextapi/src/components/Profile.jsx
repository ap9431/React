import React from "react";
import userContext from "../context/UserContext";

function Profile() {
    const {user} = React.useContext(userContext);
    
       if(!user) {
        return <h1>Please login to view your profile</h1>
       }

    return (
        <div>
            <h1>Welcome</h1>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}

export default Profile;