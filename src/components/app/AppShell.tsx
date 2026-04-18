import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { TopNav } from "./TopNav";

const titleMap: Record<string, { title: string; subtitle?: string }> = {
  "/app": { title: "Executive Dashboard", subtitle: "Real-time view of your AI prospecting agent." },
  "/app/add": { title: "Add Prospect", subtitle: "Capture context — the agent will tailor outreach." },
  "/app/outreach": { title: "Outreach Generator", subtitle: "Persona-aware messages, generated in milliseconds." },
  "/app/campaigns": { title: "Campaigns", subtitle: "Monitor and optimize active outreach." },
  "/app/tracking": { title: "Outreach Tracking", subtitle: "Every send, open, reply — live." },
  "/app/insights": { title: "Insights", subtitle: "What the agent has learned this week." },
  "/app/brain": { title: "AI Brain", subtitle: "Memory, retrieval and reflection — exposed." },
  "/app/templates": { title: "Template Library", subtitle: "Reusable angles, scored by outcome." },
  "/app/integrations": { title: "Integrations", subtitle: "Connect your stack." },
  "/app/settings": { title: "Settings", subtitle: "Workspace preferences." },
};

export const AppShell = () => {
  const { pathname } = useLocation();
  const meta = titleMap[pathname] ?? { title: "Outbound" };
  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <TopNav title={meta.title} subtitle={meta.subtitle} />
        <main className="flex-1 p-6 lg:p-8 max-w-[1500px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
