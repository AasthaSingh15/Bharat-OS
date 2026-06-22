import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Upload, FileText, Tag, Calendar, MoreVertical } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import GlassCard from '../components/ui/GlassCard'
import { documents } from '../data/mockData'

export default function MemoryVault() {
  const [query, setQuery] = useState('')

  const filtered = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.category.toLowerCase().includes(query.toLowerCase()) ||
      doc.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())),
  )

  return (
    <div className="page memory-vault">
      <PageHeader
        title="AI Memory Vault"
        subtitle="Securely store and search your documents with AI-powered indexing"
        badge="Encrypted"
      />

      <div className="vault-toolbar">
        <div className="search-bar">
          <Search size={18} />
          <input
            type="search"
            placeholder="Search documents, categories, tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <motion.button
          type="button"
          className="btn btn--primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Upload size={18} />
          Upload Document
        </motion.button>
      </div>

      <div className="document-grid">
        {filtered.map((doc, i) => (
          <GlassCard key={doc.id} className="document-card" delay={i * 0.06}>
            <div className="document-card__header">
              <div className="document-card__icon">
                <FileText size={22} />
              </div>
              <button type="button" className="icon-btn" aria-label="More options">
                <MoreVertical size={18} />
              </button>
            </div>
            <h3 className="document-card__name">{doc.name}</h3>
            <span className="document-card__category">{doc.category}</span>
            <div className="document-card__tags">
              {doc.tags.map((tag) => (
                <span key={tag} className="doc-tag">
                  <Tag size={12} /> {tag}
                </span>
              ))}
            </div>
            <div className="document-card__footer">
              <span>{doc.size}</span>
              <span>
                <Calendar size={14} /> {doc.uploaded}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

      {filtered.length === 0 && (
        <motion.p
          className="empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No documents match your search.
        </motion.p>
      )}
    </div>
  )
}
