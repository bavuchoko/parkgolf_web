import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import jwtDecode from 'jwt-decode';

function Main(props) {
    const [admin,isAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            if(decodedToken.auth.includes("ROLE_ADMIN")){
                isAdmin(true);
            }
        }
    }, []);

    return (
        <div>
            <div>가재 파크골프에 오신것을 환영합니다.</div>
            {admin &&<>
              <Link to="open"><div>경기 정보</div></Link>
              <Link to="field"><div>경기장 정보</div></Link>
            </>
            }
            <Link to="enroll"><div>경기 신청하기</div></Link>
        </div>
    );
}

export default Main;