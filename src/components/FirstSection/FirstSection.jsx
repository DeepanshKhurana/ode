import Intro from '../Intro/Intro.jsx';
import HomepageViewer from '../HomepageViewer/HomepageViewer.jsx';

import Navigation from '../Navigation/Navigation.jsx';

import './FirstSection.scss';

function FirstSection({ config }) {
  return <div className='first-section'>
    <div className='sidebar'>
      <Navigation />
      <Intro />
    </div>
    <HomepageViewer siteTitle={config?.site?.title || ''} />
  </div>;
}

export default FirstSection;
