import { motion } from "framer-motion";
import { Pause, Sparkles, Copy, MoreHorizontal, Play } from "lucide-react";
import { campaigns } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Campaigns = () => {
  const [campaignStates, setCampaignStates] = useState<Record<number, string>>(
    campaigns.reduce((acc, c, i) => ({ ...acc, [i]: c.status }), {})
  );
  const { toast } = useToast();

  const handleCampaignAction = async (
    campaignId: number,
    action: "pause" | "resume" | "optimize" | "duplicate"
  ) => {
    try {
      const backendId = campaignId + 1; // Convert index to campaign ID
      const response = await fetch(
        `http://localhost:8000/api/v1/campaigns/${backendId}/${action}`,
        { method: "POST" }
      );

      // Check if response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (action === "pause") {
        setCampaignStates(prev => ({ ...prev, [campaignId]: "Paused" }));
      } else if (action === "resume") {
        setCampaignStates(prev => ({ ...prev, [campaignId]: "Active" }));
      }

      toast({
        title: "Success",
        description: data.message || `Campaign ${action}ed successfully`,
      });
    } catch (error) {
      console.error(`Error ${action}ing campaign:`, error);
      toast({
        title: "Error",
        description: `Failed to ${action} campaign`,
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-4">
        {campaigns.map((c, i) => {
          const currentStatus = campaignStates[i] || c.status;
          return (
            <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              className="card-premium p-6 relative overflow-hidden group hover:-translate-y-0.5 transition">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-primary opacity-10 blur-3xl" />
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-semibold text-lg">{c.name}</h3>
                    <span className={cn("text-[10px] font-medium px-2 py-0.5 rounded-md border",
                      currentStatus === "Active" ? "bg-success/15 text-success border-success/30" : "bg-warning/15 text-warning border-warning/30")}>
                      {currentStatus}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">AI score · <span className="font-mono text-primary-glow">{c.score}</span></p>
                </div>
                <button className="h-8 w-8 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3 mb-5">
                {[["Sent", c.sent], ["Opens", c.opens], ["Replies", c.replies], ["Meetings", c.meetings]].map(([l, v]) => (
                  <div key={l as string}>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{l}</p>
                    <p className="font-display font-semibold text-xl">{(v as number).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-4">
                <div className="h-full gradient-primary" style={{ width: `${(c.replies / c.sent) * 100 * 3}%` }} />
              </div>

              <div className="flex items-center gap-2">
                {currentStatus === "Active" ? (
                  <button
                    onClick={() => handleCampaignAction(i, "pause")}
                    className="h-9 px-3 rounded-lg glass text-xs font-medium inline-flex items-center gap-1.5 hover:bg-surface-elevated">
                    <Pause className="h-3.5 w-3.5" /> Pause
                  </button>
                ) : (
                  <button
                    onClick={() => handleCampaignAction(i, "resume")}
                    className="h-9 px-3 rounded-lg glass text-xs font-medium inline-flex items-center gap-1.5 hover:bg-surface-elevated">
                    <Play className="h-3.5 w-3.5" /> Resume
                  </button>
                )}
                <button
                  onClick={() => handleCampaignAction(i, "optimize")}
                  className="h-9 px-3 rounded-lg gradient-primary text-primary-foreground text-xs font-medium inline-flex items-center gap-1.5 hover:opacity-90">
                  <Sparkles className="h-3.5 w-3.5" /> Optimize
                </button>
                <button
                  onClick={() => handleCampaignAction(i, "duplicate")}
                  className="h-9 px-3 rounded-lg glass text-xs font-medium inline-flex items-center gap-1.5 hover:bg-surface-elevated">
                  <Copy className="h-3.5 w-3.5" /> Duplicate
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Campaigns;
