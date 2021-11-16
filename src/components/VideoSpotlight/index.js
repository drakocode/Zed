import Video from '../Video';

import './style.scss';

const VideoSpotlight = () => {

    const VIDEOS = [{
        title: "Shockblade",
        url: "https://www.youtube.com/embed/aLGc5pZkl28"
    }, {
        title: "SKT T1",
        url: "https://www.youtube.com/embed/vCs6uCogfBE"
    }, {
        title: "PsyOps",
        url: "https://www.youtube.com/embed/Gfo50Bx5ZHE"
    }, {
        title: "PROJECT",
        url: "https://www.youtube.com/embed/ug2QT5E15cU"
    }, {
        title: "Prestige PROJECT",
        url: "https://www.youtube.com/embed/QA8aPcuOgxw"
    }, {
        title: "Championship",
        url: "https://www.youtube.com/embed/U9e0ubkAR6k"
    }, {
        title: "Deathsworn",
        url: "https://www.youtube.com/embed/PDUNOe8f-p8"
    }, {
        title: "Galaxy Slayer",
        url: "https://www.youtube.com/embed/Fzi4l3M_FtE"
    },]
    return (
        <>

            <section id="galeria-videos-spotlights">
                <h2> Spotlights </h2>
                <div className="grid">

                    {VIDEOS.map((video) => {
                        return (
                            <div className="col-sm mb-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="card card-skin grid-item">
                                    <div class="card-body">
                                        <div className="image-container">
                                            <Video url={video.url} title="Shockblade" />
                                        </div>
                                        <h3>{video.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

        </>
    )
}

export default VideoSpotlight;