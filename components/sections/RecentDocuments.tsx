'use client';

import { motion } from 'framer-motion';
import { FileText, FileArchive, File, Download, Eye, Lock } from 'lucide-react';
import { recentDocuments, LegalDocument, FileType, Classification } from '@/lib/mock/documents';

const fileIcons: Record<FileType, React.ElementType> = {
  pdf: FileText,
  docx: FileText,
  zip: FileArchive,
  xlsx: File,
};

const fileIconColors: Record<FileType, string> = {
  pdf: 'text-red-400',
  docx: 'text-blue-400',
  zip: 'text-amber-400',
  xlsx: 'text-emerald-400',
};

const classificationConfig: Record<Classification, { label: string; className: string }> = {
  CONFIDENTIAL: {
    label: 'Confidential',
    className: 'text-red-400 bg-red-400/10 border-red-400/25',
  },
  PRIVILEGED: {
    label: 'Privileged',
    className: 'text-amber-400 bg-amber-400/10 border-amber-400/25',
  },
  INTERNAL: {
    label: 'Internal',
    className: 'text-blue-400 bg-blue-400/10 border-blue-400/25',
  },
  PUBLIC: {
    label: 'Public',
    className: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
  },
};

function DocRow({ doc, index }: { doc: LegalDocument; index: number }) {
  const FileIcon = fileIcons[doc.type];
  const cls = classificationConfig[doc.classification];

  return (
    <motion.tr
      className="doc-row group border-b border-white/[0.04] last:border-0 transition-all duration-200 cursor-default"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.35 }}
    >
      {/* File icon + name */}
      <td className="py-3 pl-4 pr-3">
        <div className="flex items-center gap-3">
          <div className={`p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] ${fileIconColors[doc.type]}`}>
            <FileIcon size={14} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-200">{doc.name}</p>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">.{doc.type} · {doc.size}</p>
          </div>
        </div>
      </td>

      {/* Uploaded */}
      <td className="py-3 px-3 text-[11px] text-gray-500">{doc.uploadedAt}</td>

      {/* Uploaded by */}
      <td className="py-3 px-3 text-[11px] text-gray-400">{doc.uploadedBy}</td>

      {/* Case ref */}
      <td className="py-3 px-3">
        <span className="text-[10px] font-mono text-cyan-400/60 bg-cyan-400/5 border border-cyan-400/10 px-2 py-0.5 rounded">
          #{doc.caseRef}
        </span>
      </td>

      {/* Classification */}
      <td className="py-3 px-3">
        <span className={`inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full border ${cls.className}`}>
          <Lock size={8} />
          {cls.label}
        </span>
      </td>

      {/* Actions */}
      <td className="py-3 pl-3 pr-4">
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="p-1.5 rounded-lg text-gray-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
            aria-label={`View ${doc.name}`}
            id={`doc-view-${doc.id}`}
          >
            <Eye size={13} />
          </button>
          <button
            className="p-1.5 rounded-lg text-gray-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
            aria-label={`Download ${doc.name}`}
            id={`doc-download-${doc.id}`}
          >
            <Download size={13} />
          </button>
        </div>
      </td>
    </motion.tr>
  );
}

export default function RecentDocuments() {
  return (
    <section id="recent-documents" className="glass-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="w-1 h-4 rounded-full bg-gradient-to-b from-cyan-400 to-sapphire-500" style={{ background: 'linear-gradient(180deg, #00D9FF, #1D4ED8)' }} />
          <h2 className="text-sm font-bold text-gray-200" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Recent Documents
          </h2>
          <span className="text-[10px] text-gray-600 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded-full">
            {recentDocuments.length} files
          </span>
        </div>
        <button
          id="docs-view-all"
          className="text-[11px] text-cyan-400/60 hover:text-cyan-400 transition-colors"
        >
          View all →
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.04]">
              {['Document', 'Uploaded', 'Attorney', 'Case', 'Classification', ''].map((h) => (
                <th
                  key={h}
                  className="text-left text-[10px] font-semibold tracking-widest uppercase text-gray-600 py-2.5 px-3 first:pl-4 last:pr-4"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentDocuments.map((doc, i) => (
              <DocRow key={doc.id} doc={doc} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
