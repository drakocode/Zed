import './style.scss';

const Banner = ({ children }) => {
    return (
        <>
            <div className="banner">
            <section id="banner">
                <div className="banner-text">
                    {children}
                </div>
            </section>

            </div>
           


        </>
    )
}

export default Banner;