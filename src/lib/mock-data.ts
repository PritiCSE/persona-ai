// Centralized mock data for Outbound — keeps pages consistent and demo-ready.

export type Status = "Replied" | "Opened" | "Sent" | "Ignored" | "Meeting";
export type Channel = "Email" | "LinkedIn" | "Follow-up";

export const kpis = [
  { label: "Prospects Contacted", value: 1240, suffix: "", trend: 12.4, icon: "users" },
  { label: "Reply Rate", value: 28, suffix: "%", trend: 4.1, icon: "reply" },
  { label: "Meetings Booked", value: 97, suffix: "", trend: 18.2, icon: "calendar" },
  { label: "Revenue Influenced", value: 42, prefix: "$", suffix: "k", trend: 22.7, icon: "dollar" },
  { label: "Active Campaigns", value: 6, suffix: "", trend: 0, icon: "rocket" },
] as const;

export const replyRateSeries = [
  { week: "W1", rate: 12, baseline: 11 },
  { week: "W2", rate: 14, baseline: 12 },
  { week: "W3", rate: 17, baseline: 12 },
  { week: "W4", rate: 19, baseline: 13 },
  { week: "W5", rate: 22, baseline: 13 },
  { week: "W6", rate: 24, baseline: 14 },
  { week: "W7", rate: 26, baseline: 14 },
  { week: "W8", rate: 28, baseline: 15 },
];

export const channelPerformance = [
  { channel: "Email", value: 32 },
  { channel: "LinkedIn", value: 41 },
  { channel: "Follow-up", value: 27 },
];

export const personaFunnel = [
  { stage: "Sent", count: 1240 },
  { stage: "Opened", count: 812 },
  { stage: "Replied", count: 348 },
  { stage: "Meeting", count: 97 },
];

export type Prospect = {
  id: string;
  name: string;
  role: string;
  company: string;
  channel: Channel;
  messageType: string;
  status: Status;
  score: number;
  initials: string;
};

export const prospects: Prospect[] = [
  { id: "1", name: "Rahul Mehta", role: "CTO", company: "ScaleFlow", channel: "Email", messageType: "ROI", status: "Replied", score: 94, initials: "RM" },
  { id: "2", name: "Ankit Verma", role: "Founder", company: "LaunchOS", channel: "LinkedIn", messageType: "Vision", status: "Ignored", score: 41, initials: "AV" },
  { id: "3", name: "Priya Shah", role: "Recruiter", company: "TalentPro", channel: "Email", messageType: "Speed", status: "Opened", score: 72, initials: "PS" },
  { id: "4", name: "Maya Chen", role: "VP Sales", company: "Northwind", channel: "LinkedIn", messageType: "Social Proof", status: "Meeting", score: 98, initials: "MC" },
  { id: "5", name: "Devon Pierce", role: "CTO", company: "Quantica", channel: "Email", messageType: "ROI", status: "Replied", score: 91, initials: "DP" },
  { id: "6", name: "Sara Kim", role: "Head of Growth", company: "Loopline", channel: "Follow-up", messageType: "Curiosity", status: "Opened", score: 68, initials: "SK" },
  { id: "7", name: "Jonas Weber", role: "Founder", company: "Nimbus", channel: "Email", messageType: "Vision", status: "Sent", score: 55, initials: "JW" },
  { id: "8", name: "Lina Park", role: "CMO", company: "Brightwave", channel: "LinkedIn", messageType: "Pain Point", status: "Replied", score: 88, initials: "LP" },
];

export const insightPatterns = [
  { title: "CTOs respond 43% better to ROI messaging", detail: "Compared to feature-based pitches sent on Tuesday mornings.", weight: "high" },
  { title: "Founders prefer vision-led intros", detail: "Vision messaging outperforms ROI by 22% for early-stage founders.", weight: "high" },
  { title: "Recruiters convert on speed + volume", detail: "Short, direct CTAs lift reply rate by 31%.", weight: "med" },
  { title: "Best send window: Tue 9:00 AM", detail: "Across 1,240 sends — opens peak between 8:45 and 9:30.", weight: "med" },
  { title: "Long intros reduce replies by 17%", detail: "Keep first paragraph under 280 characters.", weight: "low" },
  { title: "LinkedIn DMs win for VPs", detail: "VP-level personas reply 2.4× more on LinkedIn than email.", weight: "med" },
];

export const reflections = [
  { time: "2m ago", text: "Switched CTO segment to ROI angle — projected lift +12%." },
  { time: "1h ago", text: "Detected long intros reducing replies. Trimming templates." },
  { time: "3h ago", text: "Recruiter persona: speed-led CTA outperforming by 31%." },
  { time: "Yesterday", text: "Stored 14 new memories from replied conversations." },
];

export const nextActions = [
  { title: "Re-engage Rahul Mehta", reason: "Opened 3× in 48h, no reply yet.", impact: "+1 meeting" },
  { title: "Retry CTO segment with ROI v3", reason: "New template scored 0.91 in simulation.", impact: "+8% reply" },
  { title: "Increase Tuesday sends by 25%", reason: "Best window has 2.1× lift.", impact: "+14 replies/wk" },
];

export const campaigns = [
  { name: "SaaS Founders Q4", sent: 412, opens: 281, replies: 96, meetings: 28, score: 92, status: "Active" },
  { name: "Recruiters Outbound", sent: 308, opens: 197, replies: 71, meetings: 19, score: 84, status: "Active" },
  { name: "Agencies Pilot", sent: 188, opens: 112, replies: 38, meetings: 11, score: 76, status: "Optimizing" },
  { name: "Enterprise CTOs", sent: 332, opens: 222, replies: 143, meetings: 39, score: 96, status: "Active" },
];

export const activity = [
  { who: "Rahul Mehta", what: "replied to your ROI email", when: "2m ago", type: "reply" },
  { who: "AI Brain", what: "updated CTO template to v3.1", when: "12m ago", type: "ai" },
  { who: "Maya Chen", what: "booked a meeting", when: "38m ago", type: "meeting" },
  { who: "Campaign 'Enterprise CTOs'", what: "sent 48 messages", when: "1h ago", type: "send" },
  { who: "AI Brain", what: "stored 6 new memories", when: "2h ago", type: "ai" },
];

export const personaHeatmap = [
  { persona: "CTO", roi: 43, vision: 18, social: 22, pain: 27 },
  { persona: "Founder", roi: 21, vision: 38, social: 24, pain: 19 },
  { persona: "VP Sales", roi: 29, vision: 22, social: 34, pain: 31 },
  { persona: "Recruiter", roi: 18, vision: 14, social: 20, pain: 36 },
  { persona: "CMO", roi: 26, vision: 28, social: 32, pain: 24 },
];

export const memories = [
  { tag: "CTO", text: "Mentioning infra cost reduction → 2.1× reply rate." },
  { tag: "Founder", text: "Reference to YC batch boosts open rate by 19%." },
  { tag: "Timing", text: "Tue 9am beats Mon 10am by 14% on opens." },
  { tag: "Template", text: "Sub-280 char intros lift replies by 17%." },
  { tag: "Channel", text: "VP personas: LinkedIn 2.4× email." },
  { tag: "Follow-up", text: "Day-3 nudge with question CTA = +9% reply." },
];
