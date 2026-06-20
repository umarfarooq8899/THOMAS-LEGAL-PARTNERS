export interface ActiveCase {
  id: string;
  caseNumber: string;
  title: string;
  client: string;
  status: string;
  statusColor: "cyan" | "amber" | "green" | "red";
  nextMilestone: string;
  progress: number;
  attorney: string;
  category: string;
}

export const activeCases: ActiveCase[] = [
  {
    id: "a8834",
    caseNumber: "A8834",
    title: "Jonathan Reed vs Horizon Holdings",
    client: "Jonathan Reed",
    status: "Evidence Discovery",
    statusColor: "cyan",
    nextMilestone: "Preliminary Hearing",
    progress: 72,
    attorney: "Sarah Mitchell",
    category: "Civil Litigation",
  },
  {
    id: "b2291",
    caseNumber: "B2291",
    title: "Meridian Corp vs DataStream LLC",
    client: "Meridian Corp",
    status: "Mediation",
    statusColor: "amber",
    nextMilestone: "Settlement Conference",
    progress: 45,
    attorney: "James Thornton",
    category: "Commercial Dispute",
  },
  {
    id: "c5507",
    caseNumber: "C5507",
    title: "Estate of Margaret Ellis",
    client: "Ellis Family Trust",
    status: "Probate Filing",
    statusColor: "green",
    nextMilestone: "Court Approval",
    progress: 88,
    attorney: "Olivia Chambers",
    category: "Estate Law",
  },
  {
    id: "d3340",
    caseNumber: "D3340",
    title: "NovaTech IP vs Vertex Solutions",
    client: "NovaTech Inc.",
    status: "Expert Review",
    statusColor: "red",
    nextMilestone: "Expert Witness Deposition",
    progress: 31,
    attorney: "Marcus Reid",
    category: "Intellectual Property",
  },
];
