import Video from '../Video';

import './style.scss';


const VideoMontage = () => {
    return (
        <>
            
            <section id="galeria-videos-montages">
                <h2> Montages </h2>
                <div className="grid">
                    <Video url="https://www.youtube.com/embed/HBB7Jefp-IE" title="𝔰 𝔱 𝔞 𝔯 𝔰" />

                    <Video url="https://www.youtube.com/embed/fa_Gn6WuEOA" title="𝔞 𝔟 𝔢 𝔯 𝔯 𝔞 𝔱 𝔦 𝔬 𝔫" />

                    <Video url="https://www.youtube.com/embed/u2BaMZUyfhk" title="𝔢 𝔵 𝔱 𝔦 𝔫 𝔠 𝔱 𝔦 𝔬 𝔫" />
                </div>
            </section>

        </>
    )
}

export default VideoMontage;