import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import CreationSite from '../pages/Services/CreationSite';
import RefonteSite from '../pages/Services/RefonteSite';
import CreationLogo from '../pages/Services/CreationLogo';
import Realisations from '../pages/Realisations';
import APropos from '../pages/APropos';
import Blog from '../pages/Blog';
import Subventions from '../pages/Subventions';
import MentionsLegales from '../pages/MentionsLegales';
import NotFound from "../pages/NotFound.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      {/*<Route path="/nos-services/creation-site" element={<CreationSite />} />*/}
      {/*<Route path="/nos-services/refonte-site" element={<RefonteSite />} />*/}
      {/*<Route path="/nos-services/creation-logo" element={<CreationLogo />} />*/}
      {/*<Route path="/nos-realisations" element={<Realisations />} />*/}
      {/*<Route path="/a-propos" element={<APropos />} />*/}
      {/*<Route path="/blog" element={<Blog />} />*/}
      {/*<Route path="/subventions" element={<Subventions />} />*/}
      {/*<Route path="/mentions-legales" element={<MentionsLegales />} />*/}
    </Routes>
  );
}

export default AppRouter;
