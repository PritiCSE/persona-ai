import { motion } from "framer-motion";
import { Filter, Search, Download, ChevronDown } from "lucide-react";
import { prospects } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const statusColor: Record<string, string> = {
  Replied: "bg-success/15 text-success border-success/30",
  Meeting: "bg-accent/15 text-accent-glow border-accent/30",
  Opened: "bg-primary/15 text-primary-glow border-primary/30",
  Sent: "bg-muted text-muted-foreground border-border",
  Ignored: "bg-destructive/10 text-destructive border-destructive/20",
};

interface FilterDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  openDropdown: string | null;
  setOpenDropdown: (value: string | null) => void;
}

const FilterDropdown = ({ label, value, options, onChange, openDropdown, setOpenDropdown }: FilterDropdownProps) => (
  <div className="relative inline-block">
    <button
      onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
      className={cn(
        "h-9 px-3 rounded-lg border text-xs font-medium inline-flex items-center gap-1.5",
        openDropdown === label
          ? "border-border-strong bg-muted/60"
          : "border-border text-muted-foreground hover:text-foreground hover:border-border-strong"
      )}
    >
      <Filter className="h-3 w-3" /> {value}
      <ChevronDown className="h-3 w-3" />
    </button>
    {openDropdown === label && (
      <div className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-border bg-background shadow-lg z-50">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => {
              onChange(opt);
              setOpenDropdown(null);
            }}
            className={cn(
              "w-full text-left px-4 py-2.5 text-sm hover:bg-muted/60 transition first:rounded-t-lg last:rounded-b-lg",
              value === opt ? "bg-primary/10 text-primary font-medium" : ""
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    )}
  </div>
);

const Tracking = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All roles");
  const [selectedOutcome, setSelectedOutcome] = useState("All outcomes");
  const [selectedDateRange, setSelectedDateRange] = useState("Last 30 days");
  const [selectedIndustry, setSelectedIndustry] = useState("All industries");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { toast } = useToast();

  const allProspects = [...prospects, ...prospects];

  const filteredProspects = allProspects.filter((p) => {
    const matchesSearch = searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = selectedRole === "All roles" || p.role === selectedRole;
    const matchesOutcome = selectedOutcome === "All outcomes" || p.status === selectedOutcome;

    return matchesSearch && matchesRole && matchesOutcome;
  });

  const handleExport = () => {
    const csv = [
      ["Prospect", "Company", "Role", "Channel", "Angle", "Status", "AI Score"],
      ...filteredProspects.map(p => [
        p.name,
        p.company,
        p.role,
        p.channel,
        p.messageType,
        p.status,
        p.score.toString()
      ])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tracking-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Success",
      description: `Exported ${filteredProspects.length} records`,
    });
  };

  const filterOptions = {
    role: ["All roles", "CTO", "Founder", "VP Sales", "Recruiter", "CMO"],
    outcome: ["All outcomes", "Replied", "Meeting", "Opened", "Sent", "Ignored"],
    dateRange: ["Last 7 days", "Last 30 days", "Last 90 days", "All time"],
    industry: ["All industries", "Tech", "Finance", "Healthcare", "Retail"]
  };

  return (
    <div className="space-y-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="card-premium p-4 flex flex-wrap items-center gap-3 relative overflow-visible">
        <div className="flex items-center gap-2 h-9 px-3 rounded-lg bg-input/60 border border-border flex-1 min-w-[200px]">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none text-sm w-full text-foreground placeholder-muted-foreground"
            placeholder="Search prospects, companies..."
          />
        </div>

        <FilterDropdown
          label="role"
          value={selectedRole}
          options={filterOptions.role}
          onChange={setSelectedRole}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <FilterDropdown
          label="outcome"
          value={selectedOutcome}
          options={filterOptions.outcome}
          onChange={setSelectedOutcome}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <FilterDropdown
          label="dateRange"
          value={selectedDateRange}
          options={filterOptions.dateRange}
          onChange={setSelectedDateRange}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <FilterDropdown
          label="industry"
          value={selectedIndustry}
          options={filterOptions.industry}
          onChange={setSelectedIndustry}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <button
          onClick={handleExport}
          className="h-9 px-3 rounded-lg gradient-primary text-primary-foreground text-xs font-medium inline-flex items-center gap-1.5 hover:opacity-90"
        >
          <Download className="h-3 w-3" /> Export
        </button>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="card-premium overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border bg-surface/40">
              <th className="text-left font-medium px-5 py-3">Prospect</th>
              <th className="text-left font-medium px-3 py-3">Role</th>
              <th className="text-left font-medium px-3 py-3">Channel</th>
              <th className="text-left font-medium px-3 py-3">Angle</th>
              <th className="text-left font-medium px-3 py-3">Status</th>
              <th className="text-right font-medium px-5 py-3">AI Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredProspects.map((p, i) => (
              <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-surface-elevated/40 transition">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg gradient-primary p-[1.5px]">
                      <div className="h-full w-full rounded-[7px] bg-card flex items-center justify-center text-[11px] font-semibold">{p.initials}</div>
                    </div>
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <p className="text-[11px] text-muted-foreground">{p.company}</p>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3.5 text-muted-foreground">{p.role}</td>
                <td className="px-3 py-3.5 text-muted-foreground">{p.channel}</td>
                <td className="px-3 py-3.5"><span className="text-xs font-mono text-muted-foreground">{p.messageType}</span></td>
                <td className="px-3 py-3.5">
                  <span className={cn("inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-md border", statusColor[p.status])}>
                    {p.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-16 h-1 rounded-full bg-muted overflow-hidden">
                      <div className="h-full gradient-primary" style={{ width: `${p.score}%` }} />
                    </div>
                    <span className="font-mono text-xs w-7 text-right">{p.score}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredProspects.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No prospects found matching your filters
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Tracking;
