import { BrowserRouter, Outlet } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Navbar from "./components/feature/Navbar";
import Footer from "./components/feature/Footer";
import MaintenancePage from "./pages/maintenance/page";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// ============================================================
// 🔧 全局维护开关
// 设置为 true 时默认false，全站进入维护模式，任何路由都只显示维护页面
// 不渲染 Navbar、Footer、Layout 或任何正常页面
// ============================================================
const MAINTENANCE_MODE = false;

function App() {
  // 维护模式：直接渲染维护页面，不启动路由系统
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
export { Layout };