import Accueil from "./pages/Users/Accueil";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Forum from "./pages/Users/Forum";
import Erreur404 from "./pages/Users/Erreur404";
import Calendrier from "./pages/Users/Calendrier";
import Boutique from "./pages/Users/Boutique";
import Apropos from "./pages/Users/Apropos";
import Connexion from "./pages/Users/Connexion";
import Inscription from "./pages/Users/Inscription";
import Message from "./pages/Users/Message";
import Userinfo from "./pages/Users/Userinfo";
import Updateuser from "./pages/Users/Updateuser";
import Article from "./pages/Users/Article";
import Itemart from "./pages/Users/Itemart";
import Podcast from "./pages/Users/Podcast";
import Podifram from "./pages/Users/Podifram";
import Adaccueil from "./pages/Admin/Adaccueil";
import Adarticle from "./pages/Admin/Adarticle";
import Adpodcast from "./pages/Admin/Adpodcast";
import Adforum from "./pages/Admin/Adforum";
import Adlivre from "./pages/Admin/Adlivre";
import Adevenement from "./pages/Admin/Adevenement"
import Adavis from "./pages/Admin/Adavis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/calendrier" element={<Calendrier/>} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/message" element={<Message />} />
        <Route path="/userinfo" element={<Userinfo />} />
        <Route path="/updateuser" element={<Updateuser />} />
        <Route path="/article" element={<Article />} />
        <Route path="/itemarticle" element={<Itemart />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/podcastifram" element={<Podifram />} />
        <Route path="/admin/" element={<Adaccueil />} />
        <Route path="/admin/article" element={<Adarticle />} />
        <Route path="/admin/podcast" element={<Adpodcast />} />
        <Route path="/admin/forum" element={<Adforum />} />
        <Route path="/admin/livre" element={<Adlivre />} />
        <Route path="/admin/evenement" element={<Adevenement />} />
        <Route path="/admin/avis" element={<Adavis />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
