import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TutorialdaplataformaOne = React.lazy(
  () => import("pages/TutorialdaplataformaOne"),
);
const Tutorialdaplataforma = React.lazy(
  () => import("pages/Tutorialdaplataforma"),
);
const Seucadastrofoiconcluidocomsucesso = React.lazy(
  () => import("pages/Seucadastrofoiconcluidocomsucesso"),
);
const SeucadastrofoiconcluidocomsucessoOne = React.lazy(
  () => import("pages/SeucadastrofoiconcluidocomsucessoOne"),
);
const Senha = React.lazy(() => import("pages/Senha"));
const SenhaOne = React.lazy(() => import("pages/SenhaOne"));
const Importareimportar = React.lazy(() => import("pages/Importareimportar"));
const Cadastrarse = React.lazy(() => import("pages/Cadastrarse"));
const CadastrarseOne = React.lazy(() => import("pages/CadastrarseOne"));
const Selecioneoperfil = React.lazy(() => import("pages/Selecioneoperfil"));
const SelecioneoperfilOne = React.lazy(
  () => import("pages/SelecioneoperfilOne"),
);
const Novoprosuto = React.lazy(() => import("pages/Novoprosuto"));
const Simuladordefretes = React.lazy(() => import("pages/Simuladordefretes"));
const ConfiguraesOne = React.lazy(() => import("pages/ConfiguraesOne"));
const SuporteOne = React.lazy(() => import("pages/SuporteOne"));
const Integraes = React.lazy(() => import("pages/Integraes"));
const Finaceiro = React.lazy(() => import("pages/Finaceiro"));
const Envios = React.lazy(() => import("pages/Envios"));
const Ordens = React.lazy(() => import("pages/Ordens"));
const ProdutosOne = React.lazy(() => import("pages/ProdutosOne"));
const Notificaes = React.lazy(() => import("pages/Notificaes"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Login = React.lazy(() => import("pages/Login"));
const Configuraes = React.lazy(() => import("pages/Configuraes"));
const Suporte = React.lazy(() => import("pages/Suporte"));
const IntegraesOne = React.lazy(() => import("pages/IntegraesOne"));
const Produtos = React.lazy(() => import("pages/Produtos"));
const Reembolsos = React.lazy(() => import("pages/Reembolsos"));
const Pedidos = React.lazy(() => import("pages/Pedidos"));
const Catalago = React.lazy(() => import("pages/Catalago"));
const NotificaesOne = React.lazy(() => import("pages/NotificaesOne"));
const HomeOne = React.lazy(() => import("pages/HomeOne"));
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homeone" element={<HomeOne />} />
          <Route path="/notificaesone" element={<NotificaesOne />} />
          <Route path="/catalago" element={<Catalago />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/reembolsos" element={<Reembolsos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/integraesone" element={<IntegraesOne />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/configuraes" element={<Configuraes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/notificaes" element={<Notificaes />} />
          <Route path="/produtosone" element={<ProdutosOne />} />
          <Route path="/ordens" element={<Ordens />} />
          <Route path="/envios" element={<Envios />} />
          <Route path="/finaceiro" element={<Finaceiro />} />
          <Route path="/integraes" element={<Integraes />} />
          <Route path="/suporteone" element={<SuporteOne />} />
          <Route path="/configuraesone" element={<ConfiguraesOne />} />
          <Route path="/simuladordefretes" element={<Simuladordefretes />} />
          <Route path="/novoprosuto" element={<Novoprosuto />} />
          <Route
            path="/selecioneoperfilone"
            element={<SelecioneoperfilOne />}
          />
          <Route path="/selecioneoperfil" element={<Selecioneoperfil />} />
          <Route path="/cadastrarseone" element={<CadastrarseOne />} />
          <Route path="/cadastrarse" element={<Cadastrarse />} />
          <Route path="/importareimportar" element={<Importareimportar />} />
          <Route path="/senhaone" element={<SenhaOne />} />
          <Route path="/senha" element={<Senha />} />
          <Route
            path="/seucadastrofoiconcluidocomsucessoone"
            element={<SeucadastrofoiconcluidocomsucessoOne />}
          />
          <Route
            path="/seucadastrofoiconcluidocomsucesso"
            element={<Seucadastrofoiconcluidocomsucesso />}
          />
          <Route
            path="/tutorialdaplataforma"
            element={<Tutorialdaplataforma />}
          />
          <Route
            path="/tutorialdaplataformaone"
            element={<TutorialdaplataformaOne />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
