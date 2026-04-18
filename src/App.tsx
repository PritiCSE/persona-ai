import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { AppShell } from "./components/app/AppShell";
import Dashboard from "./pages/app/Dashboard";
import AddProspect from "./pages/app/AddProspect";
import OutreachGenerator from "./pages/app/OutreachGenerator";
import Campaigns from "./pages/app/Campaigns";
import Tracking from "./pages/app/Tracking";
import Insights from "./pages/app/Insights";
import AIBrain from "./pages/app/AIBrain";
import Templates from "./pages/app/Templates";
import Integrations from "./pages/app/Integrations";
import Settings from "./pages/app/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app" element={<AppShell />}>
            <Route index element={<Dashboard />} />
            <Route path="add" element={<AddProspect />} />
            <Route path="outreach" element={<OutreachGenerator />} />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="tracking" element={<Tracking />} />
            <Route path="insights" element={<Insights />} />
            <Route path="brain" element={<AIBrain />} />
            <Route path="templates" element={<Templates />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
