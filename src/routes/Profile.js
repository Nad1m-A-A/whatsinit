import React, {useContext} from 'react'
import MainContext from '../store/MainContext'
function Profile() {
    const context = useContext(MainContext);
    console.log(context);
    return (
        <div>
            <ul>
                <li>{context.user.username}</li>
            </ul>
        </div>
    )
}

export default Profile