import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutPreview from "../components/AboutPreview";
import Speciality from "../components/Speciality";
import AcademicExcellence from "../components/AcademicExcellence";
import Facilities from "../components/Facilities";
import EventsNews from "../components/EventsNews";
import GalleryPreview from "../components/GalleryPreview";
import AdmissionCTA from "../components/AdmissionCTA";
import ContactPreview from "../components/ContactPreview";

function Home() {
  return (
    <main>
      <Hero />

      <Stats />

      <AboutPreview />

      <Speciality />

      <AcademicExcellence />

      <Facilities />

      <EventsNews />

      <GalleryPreview />

      <AdmissionCTA />

      <ContactPreview />
    </main>
  );
}

export default Home;