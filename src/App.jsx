import React from "react";
import Accueil from "./pages/Users/Accueil";
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
import Adevenement from "./pages/Admin/Adevenement";
import Adavis from "./pages/Admin/Adavis";
import Aditemart from "./pages/Admin/Aditemart";
import Adlistpod from "./pages/Admin/Adlistpod";
import Adlistpart from "./pages/Admin/Adlistpart";
import Formart from "./pages/Admin/Formart";
import Formlivre from "./pages/Admin/Formlivre";
import Formcatpod from "./pages/Admin/Formcatpod";
import Formevent from "./pages/Admin/Formevent";
import PersistLogin from "./helpers/PersistLogin";
import RequireAuth from "./helpers/RequireAuth";
import { Routes, Route } from "react-router-dom";
const roles = {
  is_admin: "admin",
  is_user: "user",
};
function App() {
  return (
    <Routes>
      <Route path="/">
        {/* routes publiques */}
        <Route path="connexion" element={<Connexion />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="apropos" element={<Apropos />} />

        {/* we want to protect these routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth roles={[roles.is_user]} />}>
            <Route path="/" element={<Accueil />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/calendrier" element={<Calendrier />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/message" element={<Message />} />
            <Route path="/userinfo" element={<Userinfo />} />
            <Route path="/updateuser" element={<Updateuser />} />
            <Route path="/article" element={<Article />} />
            <Route path="/itemarticle" element={<Itemart />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/podcastifram" element={<Podifram />} />
          </Route>

          <Route element={<RequireAuth roles={roles.is_admin} />}>
            <Route path="/admin/" element={<Adaccueil />} />
            <Route path="/admin/article" element={<Adarticle />} />
            <Route path="/admin/podcast" element={<Adpodcast />} />
            <Route path="/admin/forum" element={<Adforum />} />
            <Route path="/admin/livre" element={<Adlivre />} />
            <Route path="/admin/evenement" element={<Adevenement />} />
            <Route path="/admin/avis" element={<Adavis />} />
            <Route path="/admin/listarticle" element={<Aditemart />} />
            <Route path="/admin/listpodcast" element={<Adlistpod />} />
            <Route path="/admin/listparticipant" element={<Adlistpart />} />
            <Route path="/admin/formarticle" element={<Formart />} />
            <Route path="/admin/formlivre" element={<Formlivre />} />
            <Route path="/admin/formcatpod" element={<Formcatpod />} />
            <Route path="/admin/formpodcast" element={<Formcatpod />} />
            <Route path="/admin/formevent" element={<Formevent />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<Erreur404 />} />
      </Route>
    </Routes>
  );
}

export default App;
