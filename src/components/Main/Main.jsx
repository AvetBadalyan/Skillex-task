import './Main.scss';
import Slideshow from '../Slideshow/Slideshow';
import TopCharts from '../TopCharts/TopCharts';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import LabelsSection from '../LabelsSection/LabelsSection';
import ArtistsSection from '../ArtistsSection/ArtistsSection';

function Main() {
  return (
    <main className="main">
      <Slideshow />
      <TopCharts />
      <FeaturedSection />
      <LabelsSection />
      <ArtistsSection />
    </main>
  );
}

export default Main;
