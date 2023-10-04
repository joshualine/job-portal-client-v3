import Job from '../job/Job'
import './jobs.css'


const Jobs = () => {
  return (
    <>
      {/* <div classNameName="main">
        <div classNameName="row">
          <Job />
        </div>
      </div> */}

<main>
    
    <div className="divisions division_2 flex padding_2x">
        <section className="flex_content padding_2x">
            <article>
                <h2 className="title medium">The Best Bank in the world!</h2>
                <span className="bar"></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, reprehenderit!</p>
            </article>
        </section>
        <section className="flex_content padding_1x">
            <figure>
                <img src="https://i.postimg.cc/bNg3J3hH/01.png" alt="" loading="lazy" />
            </figure>
        </section>
    </div>
    
    
</main>
    </>
  )
}

export default Jobs