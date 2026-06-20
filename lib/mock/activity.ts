export type ActivityType = "review" | "audit" | "upload" | "meeting" | "filing";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  actor: string;
  initials: string;
  action: string;
  detail: string;
  timestamp: string;
  caseRef?: string;
}

export const activityFeed: ActivityItem[] = [
  {
    id: "act-001",
    type: "review",
    actor: "Sarah Mitchell",
    initials: "SM",
    action: "reviewed documents",
    detail: "Contract Review — Reed vs Horizon",
    timestamp: "2 min ago",
    caseRef: "A8834",
  },
  {
    id: "act-002",
    type: "audit",
    actor: "System",
    initials: "SY",
    action: "completed compliance audit",
    detail: "All 48 GDPR checkpoints passed",
    timestamp: "18 min ago",
  },
  {
    id: "act-003",
    type: "upload",
    actor: "James Thornton",
    initials: "JT",
    action: "uploaded evidence package",
    detail: "Exhibit A–F added to secure vault",
    timestamp: "1 hr ago",
    caseRef: "B2291",
  },
  {
    id: "act-004",
    type: "meeting",
    actor: "Olivia Chambers",
    initials: "OC",
    action: "scheduled client meeting",
    detail: "Ellis Family Trust — Estate review call",
    timestamp: "3 hrs ago",
    caseRef: "C5507",
  },
  {
    id: "act-005",
    type: "filing",
    actor: "Marcus Reid",
    initials: "MR",
    action: "submitted court filing",
    detail: "Motion to Compel — Case D3340",
    timestamp: "Yesterday · 16:30",
    caseRef: "D3340",
  },
  {
    id: "act-006",
    type: "review",
    actor: "Sarah Mitchell",
    initials: "SM",
    action: "approved settlement draft",
    detail: "Settlement Agreement v3 approved for review",
    timestamp: "Yesterday · 09:15",
    caseRef: "B2291",
  },
  {
    id: "act-007",
    type: "audit",
    actor: "System",
    initials: "SY",
    action: "generated security report",
    detail: "Weekly threat assessment — no anomalies detected",
    timestamp: "Jun 17, 2025",
  },
  {
    id: "act-008",
    type: "upload",
    actor: "Olivia Chambers",
    initials: "OC",
    action: "uploaded financial analysis",
    detail: "Estate asset valuation spreadsheet added",
    timestamp: "Jun 13, 2025",
    caseRef: "C5507",
  },
];
