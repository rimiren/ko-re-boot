import React from 'react';

export function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '240px', height: '100vh' }}>
            <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-5 fw-bold">채널 목록</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {['츠나', '미오', '후부키', '토와', '미코'].map(name => (
                    <li key={name}>
                        <a href="#" className="nav-link link-dark">{name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
