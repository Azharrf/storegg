import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

export default function Profile() {
    const API_IMG = process.env.NEXT_PUBLIC_IMG;
    const [user, setUser] = useState({
        avatar: '',
        name: '',
        email: '',
    });

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const jwtToken = Buffer.from(token, 'base64').toString('ascii');
            const payload: JWTPayloadTypes = jwtDecode(jwtToken);
            const userPayload: UserTypes = payload.player;
            setUser(userPayload);
        }
    }, [])
    
    return (
        <div className="user text-center pb-50 pe-30">
            <img src={`${API_IMG}/${user.avatar}`} width="90" height="90" className="img-fluid mb-20" style={{borderRadius: '100%'}} alt="Image Profile" />
            <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
            <p className="color-palette-2 m-0">{user.email}</p>
        </div>
    )
}
