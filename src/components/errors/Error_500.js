import React from 'react';
import '../../utils_css.css';
function Error_500() {
    return (
        <div className="error-container">
            <p className="error-code color-500">
                500
            </p>
            <div className="error-msg-box">
                <p className="error-msg mb-2">Internal Server Error</p>
                <p className="error-msg-detail-eng mb-2">Something bad happen.</p>
                <p className="error-msg-detail-kor">서버에러가 발생하였습니다: 관리자에게 문의하세요.</p>
            </div>
        </div>


    );
}

export default Error_500;