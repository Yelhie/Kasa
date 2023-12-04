import './about.scss';
import Collapse from '../../components/collapse/Collapse';
import aboutJson from '../../Data/about.json'
import Banner from "../../components/banner/Banner";

export default function About() {

    return (
        <section className='about_section'>
            {/* appel du composant Banner */}
            <Banner page='about' />
            {aboutJson.map(aboutData => {
                return (
                    <div className='collapse' key={aboutData.id} >
                        <Collapse title={aboutData.title} content={aboutData.content} />
                    </div>
                )
            }
            )}
        </section>

    )
}