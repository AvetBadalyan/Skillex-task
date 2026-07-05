import { useState } from 'react';
import './Main.scss';
import Slideshow from '../Slideshow/Slideshow';
import TopCharts from '../TopCharts/TopCharts';
import FilterBar from '../FilterBar/FilterBar';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import LabelsSection from '../LabelsSection/LabelsSection';
import { ALL_ID } from '../../constants/catalog';

function Main() {
  const [activeFormat, setActiveFormat] = useState(ALL_ID);
  const [activeCategory, setActiveCategory] = useState(ALL_ID);
  const [searchQuery, setSearchQuery] = useState('');

  // Each format has its own category taxonomy (music genres vs. podcast
  // topics, etc.), so a category picked under one format wouldn't mean
  // anything under another — reset back to "All" whenever the format changes.
  const handleFormatChange = (formatId) => {
    setActiveFormat(formatId);
    setActiveCategory(ALL_ID);
  };

  return (
    <main className="main">
      <Slideshow />
      <TopCharts
        activeFormat={activeFormat}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
      />
      <FilterBar
        activeFormat={activeFormat}
        onFormatChange={handleFormatChange}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <FeaturedSection />
      <LabelsSection />
    </main>
  );
}

export default Main;
