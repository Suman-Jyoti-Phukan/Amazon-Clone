import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <div className="font-AmazonEmberReg text-fontSizePrimary text-textPrimary bg-bodyMain">
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
