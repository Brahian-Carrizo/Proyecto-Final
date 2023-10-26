import "./Navbar.css"

function Navbar(){
    
    return(
     <>
        <nav className="navbar_container  navbar navbar-expand-lg ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Quienes Somos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Iniciar Sesion</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar Productos " aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
     </>
    )
}
export default Navbar