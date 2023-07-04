import React from 'react';
import {JellyTriangle} from '@uiball/loaders'
function Loading() {
    return (
        <>
            <div aria-live="polite" className="loading-container" >
                <JellyTriangle size={80}/>

            </div>
            <p className="text-center mt-[20px]">
                Loading...
            </p>
        </>
    );
}

export default Loading;