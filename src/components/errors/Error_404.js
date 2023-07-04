import React from 'react';
import '../../utils_css.css';
function Error_404() {
    return (
        <div className="error-container">
            <p className="error-code color-404">
                404
            </p>
            <div className="error-msg-box">
                <p className="error-msg mb-2">Not Found</p>
                <p className="error-msg-detail-eng mb-2">The page you're looking for doesn't exist.</p>
                <p className="error-msg-detail-kor">해당 페이지가 존재하지 않습니다.</p>
            </div>
        </div>


    );
}

export default Error_404;