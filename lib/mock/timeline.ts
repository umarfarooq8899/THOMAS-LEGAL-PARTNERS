export interface TimelineMilestone {
  id: number;
  title: string;
  date: string;
  description: string;
  status: "complete" | "active" | "upcoming";
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 1,
    title: "Client Intake",
    date: "Jan 12, 2025",
    description: "Initial consultation and engagement letter executed.",
    status: "complete",
  },
  {
    id: 2,
    title: "Evidence Collection",
    date: "Feb 03, 2025",
    description: "All supporting documentation and exhibits compiled.",
    status: "complete",
  },
  {
    id: 3,
    title: "Discovery Phase",
    date: "Mar 15, 2025",
    description: "Interrogatories submitted, depositions scheduled.",
    status: "complete",
  },
  {
    id: 4,
    title: "Depositions",
    date: "Apr 28, 2025",
    description: "Key witnesses deposed. Transcripts under review.",
    status: "active",
  },
  {
    id: 5,
    title: "Hearing Scheduled",
    date: "Jun 10, 2025",
    description: "Preliminary hearing before Judge M. Walton, Court 4.",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Trial Preparation",
    date: "Jul 22, 2025",
    description: "Final motions, exhibit lists, and jury selection.",
    status: "upcoming",
  },
];
