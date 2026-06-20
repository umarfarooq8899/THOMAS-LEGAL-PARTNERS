export interface SecurityMetric {
  id: string;
  label: string;
  value: string;
  status: "operational" | "warning" | "critical";
  description: string;
}

export const securityMetrics: SecurityMetric[] = [
  {
    id: "encryption",
    label: "Encryption Status",
    value: "AES-256 Active",
    status: "operational",
    description: "End-to-end encryption across all channels.",
  },
  {
    id: "threat",
    label: "Threat Monitoring",
    value: "Operational",
    status: "operational",
    description: "Zero active threats. Last scan: 4 min ago.",
  },
  {
    id: "sessions",
    label: "Secure Sessions",
    value: "128",
    status: "operational",
    description: "Active TLS 1.3 encrypted client sessions.",
  },
  {
    id: "compliance",
    label: "Audit Compliance",
    value: "99.8%",
    status: "operational",
    description: "GDPR, ISO 27001 & SOC 2 all passing.",
  },
];

export const securityScore = 98.4;

export const tickerEvents = [
  "GDPR Verification Confirmed",
  "TLS 1.3 Session Active",
  "AES-256 Encryption Validated",
  "Secure Backup Completed",
  "Access Audit Passed",
  "Zero-Trust Policy Enforced",
  "Multi-Factor Authentication Active",
  "End-to-End Encryption Enabled",
];
