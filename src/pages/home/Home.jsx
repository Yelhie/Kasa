import CardCatalogue from "../../components/cardscatalogue/CardsCatalogue";
import Banner from "../../components/banner/Banner";
import './home.scss';

function Home() {
    return (
        <section className='home_section'>
            {/* appel du composant Banner */}
            <Banner page='home' />
            {/* appel du composant Card Catalogue */}
            <CardCatalogue />
        </section>
    )
}

export default Home;