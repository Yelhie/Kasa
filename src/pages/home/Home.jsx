import CardCatalogue from "../../components/cardscatalogue/CardsCatalogue";
import Banner from "../../components/banner/Banner";

function Home() {
    return (
        <>
            {/* appel du composant Banner */}
            <Banner page='home' />
            {/* appel du composant Card Catalogue */}
            <div className='home'>
                <CardCatalogue />
            </div>
        </>
    )
}

export default Home;