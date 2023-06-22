

const Header = () => {
  return (
    <div className="container pt-5">

      <div className="dropdown">
        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">All</a></li>
          <li><a className="dropdown-item" href="#">Tech</a></li>
          <li><a className="dropdown-item" href="#">Skill Jobs</a></li>
        </ul>
      </div>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Jobs" aria-label="Search" />
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
  </div>
  )
}

export default Header