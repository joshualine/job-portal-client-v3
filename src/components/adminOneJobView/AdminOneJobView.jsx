import './adminOneJobView.css'

const AdminOneJobView = () => {
  return (
    <>
      <div className="container">
        <div className="multiplePost">
          <div className="multiplePostWrapper">

            <h1 className="multiplePostTitle">
              Product Designer
              <div className="multiplePostEdit">
                <i className="multiplePostIcon far fa-edit"></i>
                <i className="multiplePostIcon far fa-trash-alt"></i>
              </div>
            </h1>
            <div className="multiplePostInfo">
              <span>
                Location:
                <b className="multiplePostAuthor"> Lagos, Nigeria</b>
              </span>
              <span>1 day ago</span>
            </div>
            <p className="multiplePostDesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore
              ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
              voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
              eos, dolore ea iusto impedit! Voluptatum necessitatibus eum
              beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Iste error quibusdam ipsa quis
              quidem doloribus eos, dolore ea iusto impedit! Voluptatum
              necessitatibus eum beatae, adipisci voluptas a odit modi eos!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            
            </p>
          </div>
          <button className="registerButton1">Delete Job</button>
          <button className="registerButton1">View Applicants</button>
        </div>
      </div>
    </>
  )
}

export default AdminOneJobView