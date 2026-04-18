import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight, User, Building2, Briefcase, Globe, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface FieldProps {
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const Field = ({ label, icon: Icon, children }: FieldProps) => (
  <label className="block">
    <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{label}</span>
    <div className="mt-1.5 relative group">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-glow transition" />
      {children}
    </div>
  </label>
);

const inputCls = "w-full h-11 pl-10 pr-3 rounded-xl bg-input/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm transition placeholder:text-muted-foreground";

interface FormData {
  name: string;
  email: string;
  linkedin_url: string;
  company: string;
  role: string;
  industry: string;
  company_size: string;
  region: string;
}

const AddProspect = () => {
  const [filled, setFilled] = useState(0);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    linkedin_url: "",
    company: "",
    role: "CTO",
    industry: "SaaS",
    company_size: "1–10",
    region: "North America",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({ ...prev, [name as keyof FormData]: value }));
    if (name === "name") {
      setFilled(value.length > 0 ? Math.max(filled, 1) : 0);
    }
  };

  const handleSaveProspect = async () => {
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in required fields",
        variant: "destructive"
      });
      return;
    }

    setSaving(true);
    try {
      const response = await fetch("http://localhost:8000/api/v1/prospects/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      toast({
        title: "Success",
        description: data.message || "Prospect saved successfully"
      });
      setFormData({
        name: "",
        email: "",
        linkedin_url: "",
        company: "",
        role: "CTO",
        industry: "SaaS",
        company_size: "1–10",
        region: "North America",
      });
      setFilled(0);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save prospect",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-2 card-premium p-7">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-semibold text-xl">Prospect details</h2>
            <p className="text-sm text-muted-foreground">The agent uses these fields to choose an angle.</p>
          </div>
          <div className="text-xs text-muted-foreground">Step 1 of 2</div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full name" icon={User}>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={inputCls}
              placeholder="Rahul Mehta"
            />
          </Field>
          <Field label="Email" icon={Mail}>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={inputCls}
              placeholder="rahul@scaleflow.io"
            />
          </Field>
          <Field label="LinkedIn URL" icon={Linkedin}>
            <input
              name="linkedin_url"
              value={formData.linkedin_url}
              onChange={handleInputChange}
              className={inputCls}
              placeholder="linkedin.com/in/rahul-mehta"
            />
          </Field>
          <Field label="Company" icon={Building2}>
            <input
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className={inputCls}
              placeholder="ScaleFlow"
            />
          </Field>
          <Field label="Role" icon={Briefcase}>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className={inputCls + " appearance-none"}>
              <option>CTO</option><option>Founder</option><option>VP Sales</option>
              <option>CMO</option><option>Recruiter</option><option>Head of Growth</option>
            </select>
          </Field>
          <Field label="Industry" icon={Globe}>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className={inputCls + " appearance-none"}>
              <option>SaaS</option><option>Fintech</option><option>Marketplace</option>
              <option>AI / ML</option><option>Healthcare</option><option>E-commerce</option>
            </select>
          </Field>
          <Field label="Company size" icon={Building2}>
            <select
              name="company_size"
              value={formData.company_size}
              onChange={handleInputChange}
              className={inputCls + " appearance-none"}>
              <option>1–10</option><option>11–50</option><option>51–200</option>
              <option>201–500</option><option>500+</option>
            </select>
          </Field>
          <Field label="Region" icon={Globe}>
            <select
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className={inputCls + " appearance-none"}>
              <option>North America</option><option>Europe</option><option>APAC</option><option>LATAM</option>
            </select>
          </Field>
        </div>

        <div className="flex items-center justify-between mt-7 pt-5 border-t border-border">
          <button className="text-sm text-muted-foreground hover:text-foreground transition">Save as draft</button>
          <div className="flex gap-2">
            <button
              onClick={handleSaveProspect}
              disabled={saving}
              className="h-11 px-5 rounded-xl glass text-sm font-medium hover:bg-surface-elevated disabled:opacity-50">
              {saving ? "Saving..." : "Save Prospect"}
            </button>
            <Link to="/app/outreach" className="h-11 px-5 rounded-xl gradient-primary text-primary-foreground text-sm font-medium inline-flex items-center gap-1.5 hover:opacity-90 shadow-[0_0_24px_-4px_hsl(var(--primary)/0.6)]">
              <Sparkles className="h-4 w-4" /> Generate Outreach <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Side AI hint */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="card-premium p-6 relative overflow-hidden h-fit">
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-primary opacity-15 blur-2xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-primary-glow" />
            <span className="text-[10px] uppercase tracking-wider text-primary-glow font-semibold">Agent suggestion</span>
          </div>
          <h3 className="font-display font-semibold text-base mb-2">Looks like a CTO at a SaaS scale-up</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Based on memory of <span className="text-foreground font-medium">83 similar prospects</span>,
            an ROI-led email sent Tuesday 9am has the highest projected reply rate.
          </p>
          <div className="mt-4 space-y-2">
            <Pattern label="Angle" value="ROI" weight={94} />
            <Pattern label="Channel" value="Email" weight={71} />
            <Pattern label="Timing" value="Tue 9:00am" weight={88} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Pattern = ({ label, value, weight }: { label: string; value: string; weight: number }) => (
  <div className="rounded-xl border border-border bg-surface/40 p-3">
    <div className="flex items-center justify-between mb-1.5">
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="text-xs font-mono">{weight}%</span>
    </div>
    <div className="text-sm font-medium mb-1.5">{value}</div>
    <div className="h-1 rounded-full bg-muted overflow-hidden">
      <motion.div initial={{ width: 0 }} animate={{ width: `${weight}%` }} transition={{ duration: 0.8 }}
        className="h-full gradient-primary" />
    </div>
  </div>
);

export default AddProspect;
