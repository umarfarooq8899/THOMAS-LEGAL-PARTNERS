export type FileType = "pdf" | "docx" | "zip" | "xlsx";
export type Classification = "CONFIDENTIAL" | "PRIVILEGED" | "INTERNAL" | "PUBLIC";

export interface LegalDocument {
  id: string;
  name: string;
  type: FileType;
  size: string;
  uploadedBy: string;
  uploadedAt: string;
  classification: Classification;
  caseRef: string;
}

export const recentDocuments: LegalDocument[] = [
  {
    id: "doc-001",
    name: "Contract Review — Reed vs Horizon",
    type: "pdf",
    size: "2.4 MB",
    uploadedBy: "Sarah Mitchell",
    uploadedAt: "Jun 18, 2025 · 14:22",
    classification: "PRIVILEGED",
    caseRef: "A8834",
  },
  {
    id: "doc-002",
    name: "Witness Statement — J. Coleman",
    type: "docx",
    size: "840 KB",
    uploadedBy: "James Thornton",
    uploadedAt: "Jun 17, 2025 · 09:10",
    classification: "CONFIDENTIAL",
    caseRef: "A8834",
  },
  {
    id: "doc-003",
    name: "Evidence Package — Exhibit A–F",
    type: "zip",
    size: "18.7 MB",
    uploadedBy: "Olivia Chambers",
    uploadedAt: "Jun 16, 2025 · 16:45",
    classification: "CONFIDENTIAL",
    caseRef: "B2291",
  },
  {
    id: "doc-004",
    name: "Court Filing — Motion to Compel",
    type: "pdf",
    size: "1.1 MB",
    uploadedBy: "Marcus Reid",
    uploadedAt: "Jun 15, 2025 · 11:30",
    classification: "INTERNAL",
    caseRef: "D3340",
  },
  {
    id: "doc-005",
    name: "Settlement Agreement Draft v3",
    type: "docx",
    size: "560 KB",
    uploadedBy: "Sarah Mitchell",
    uploadedAt: "Jun 14, 2025 · 08:55",
    classification: "PRIVILEGED",
    caseRef: "B2291",
  },
  {
    id: "doc-006",
    name: "Financial Analysis — Estate Assets",
    type: "xlsx",
    size: "3.2 MB",
    uploadedBy: "Olivia Chambers",
    uploadedAt: "Jun 13, 2025 · 17:00",
    classification: "INTERNAL",
    caseRef: "C5507",
  },
];
