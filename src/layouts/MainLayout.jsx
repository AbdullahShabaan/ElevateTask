import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import "react-loading-skeleton/dist/skeleton.css";
function MainLayout() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Home />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default MainLayout;
