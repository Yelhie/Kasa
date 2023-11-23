import './about.scss';
import Collapse from '../../components/collapse/Collapse';
import aboutJson from '../../Data/about.json'
import Banner from "../../components/banner/Banner";

export default function About() {

    return (
        <div>
            {/* appel du composant Banner */}
            <Banner page='about' />

            <section className='about_section'>
                {aboutJson.map(aboutData => {
                    return (
                        <div key={aboutData.id} className="about_collapse">
                            <Collapse title={aboutData.title} content={aboutData.content} />
                        </div>
                    )
                }
                )}
            </section>
        </div>
    )
}