import Banner from "../../components/banner/Banner";

export default function About() {
    return (
        <div>
            {/* appel du composant Banner */}
            <Banner page='about' />
            <h1>About</h1>
        </div>
    )
}