/* eslint-disable jsx-a11y/anchor-is-valid */
import Imagem from '../Imagem'
import './style.scss'

const Galeria = () => {

    return (
        <section id="galeria-imagens">
        <h2> Skins </h2>
        <div className="container">
          <div className="row">


            {Imagem.map((imagem) => {
              return (
                <>
                  <div className="col-sm mb-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="card card-skin grid-item">
                      <div className="card-body">
                        <div className="image-container">
                          <img src={imagem.url} class="card-img-top" alt="Zed" />
                        </div>
                        <h5 class="card-title">{imagem.name}</h5>
                        <button href={imagem.view} type="button" className="btn btn-primary">3D view</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}


          </div>
        </div>
      </section>
    )


}


export default Galeria;