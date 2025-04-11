export function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '240px', height: '100vh' }}>
            <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-5 fw-bold">채널 목록</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        츠나
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        미오
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        후부키
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        토와
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        미코
                    </a>
                </li>
            </ul>
        </div>
    );
}
