import React from 'react';
import './Loading.css';

export default function Loading() {
    return (
        <div className="loading-page">
            <div className="coast">
                <div className="wave-rel-wrap">
                    <div className="wave"></div>
                </div>
            </div>
            <div className="coast delay">
                <div className="wave-rel-wrap">
                    <div className="wave delay"></div>
                </div>
            </div>
            <div className="loading-text text-w">l</div>
            <div className="loading-text text-a">o</div>
            <div className="loading-text text-v">a</div>
            <div className="loading-text text-a">o</div>
        </div>
    );
}
