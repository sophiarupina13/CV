import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAboutMe = () => {
    const projectsSection = document.getElementById('about-me');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContacts = () => {
    const projectsSection = document.getElementById('contacts');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleButtonClickGitHub = () => {
    window.open('https://github.com/sophiarupina13', '_blank');
  };

  const handleButtonClickTelegram = () => {
    window.open('https://t.me/sophiarupina', '_blank');
  };

  const handleButtonClickWhatsApp = () => {
    window.open('https://wa.me/+79680577942', '_blank');
  };

  const handleButtonClickHH = () => {
    window.open('https://hh.ru/resume/c649a347ff0d1900ac0039ed1f633072334e65', '_blank');
  };

  const handleButtonClickKOMPAS = () => {
    window.open('https://github.com/sophiarupina13/KOMPAS-3D_API.git', '_blank');
  };

  const handleButtonClickSQL = () => {
    window.open('https://github.com/sophiarupina13/MySQL.git', '_blank');
  };

  const handleButtonClickShop = () => {
    window.open('https://github.com/sophiarupina13/ReactJS-Shop.git', '_blank');
  };

  const handleButtonClickCustomView = () => {
    window.open('https://github.com/sophiarupina13/customViewAndroid.git', '_blank');
  };

  const handleButtonClickTimeZones = () => {
    window.open('https://github.com/sophiarupina13/TimeZonesAndCities.git', '_blank');
  };

  return (
    <div>
      <Header handleScrollToProjects={handleScrollToProjects} 
      handleScrollToAboutMe={handleScrollToAboutMe} 
      handleScrollToContacts={handleScrollToContacts}/>
      <Main handleScrollToProjects={handleScrollToProjects}
      handleButtonClickKOMPAS={handleButtonClickKOMPAS}
      handleButtonClickSQL={handleButtonClickSQL}
      handleButtonClickShop={handleButtonClickShop}
      handleButtonClickCustomView={handleButtonClickCustomView}
      handleButtonClickTimeZones={handleButtonClickTimeZones}/>
      <Footer handleButtonClickGitHub={handleButtonClickGitHub} 
      handleButtonClickTelegram={handleButtonClickTelegram}
      handleButtonClickWhatsApp={handleButtonClickWhatsApp}
      handleButtonClickHH={handleButtonClickHH}/>
    </div>
  );
}

export default App;
