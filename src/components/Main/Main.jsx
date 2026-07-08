import { useState } from 'react';
import './Main.scss';
import Slideshow from '../Slideshow/Slideshow';
import TopCharts from '../TopCharts/TopCharts';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import LabelsSection from '../LabelsSection/LabelsSection';
import ArtistsSection from '../ArtistsSection/ArtistsSection';
import { ALL_ID } from '../../constants/catalog';

function Main() {
  const [activeFormat, setActiveFormat] = useState(ALL_ID);
  const [activeCategory, setActiveCategory] = useState(ALL_ID);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFormatChange = (formatId) => {
    setActiveFormat(formatId);
    setActiveCategory(ALL_ID);
  };

  return (
    <main className="main">
      <Slideshow />
      <TopCharts
        activeFormat={activeFormat}
        onFormatChange={handleFormatChange}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <FeaturedSection />
      <LabelsSection />
      <ArtistsSection />
    </main>
  );
}

export default Main;
