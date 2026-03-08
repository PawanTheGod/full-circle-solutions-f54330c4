import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import UnifiedPage from "./UnifiedPage";
import BrandOrbit from "@/components/BrandOrbit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ScrollToTop is disabled as UnifiedPage handles internal scrolling */}
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<UnifiedPage />} />
            <Route path="/services" element={<UnifiedPage />} />
            <Route path="/plans" element={<UnifiedPage />} />
            <Route path="/portfolio" element={<UnifiedPage />} />
            <Route path="/testimonials" element={<UnifiedPage />} />
            <Route path="/about" element={<UnifiedPage />} />
            <Route path="/contact" element={<UnifiedPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BrandOrbit />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
