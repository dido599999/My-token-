/* ═══════════════════════════════════════════════════════════════
   HUB.CSS - صفحة المنصة الرئيسية
   ═══════════════════════════════════════════════════════════════ */

:root {
  --primary-gold: #d4af37;
  --dark-bg: #0a0a0a;
  --dark-card: #1a1a1a;
  --accent-purple: #8b5cf6;
  --accent-green: #10b981;
  --accent-red: #dc2626;
  --text-light: #e5e7eb;
}

/* ────────────────────────────────────────────────────────────── */
/* HUB MAIN CONTAINER */
/* ────────────────────────────────────────────────────────────── */

#hub-section {
  min-height: 100vh;
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(20, 15, 35, 0.95) 100%);
  position: relative;
  overflow: hidden;
}

#hub-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
  animation: float 20s ease-in-out infinite;
  pointer-events: none;
}

/* ────────────────────────────────────────────────────────────── */
/* HUB HEADER */
/* ────────────────────────────────────────────────────────────── */

.hub-header {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 60px;
  animation: slideInDown 0.8s ease-out;
}

.hub-header h1 {
  font-size: 3rem;
  color: var(--primary-gold);
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
}

.hub-header p {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

/* ────────────────────────────────────────────────────────────── */
/* FEATURES GRID */
/* ────────────────────────────────────────────────────────────── */

.features-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin: 60px 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.feature-card {
  background: rgba(26, 26, 26, 0.7);
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  padding: 30px;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
  transition: left 0.6s ease;
}

.feature-card:hover::before {
  left: 100%;
}

.feature-card:hover {
  border-color: var(--primary-gold);
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
  transform: translateY(-10px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.4));
}

.feature-card h3 {
  color: var(--primary-gold);
  font-size: 1.3rem;
  margin-bottom: 15px;
  text-align: right;
  direction: rtl;
}

.feature-card p {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
  text-align: right;
  direction: rtl;
}

/* ────────────────────────────────────────────────────────────── */
/* STATISTICS SECTION */
/* ────────────────────────────────────────────────────────────── */

.stats-section {
  position: relative;
  z-index: 1;
  margin: 80px 0;
  padding: 60px 40px;
  background: rgba(139, 92, 246, 0.08);
  border: 2px solid rgba(139, 92, 246, 0.2);
  border-radius: 16px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
}

.stat-item {
  animation: slideUp 0.6s ease-out 0.2s backwards;
}

.stat-number {
  font-size: 2.5rem;
  color: var(--primary-gold);
  font-weight: 700;
  margin-bottom: 10px;
}

.stat-label {
  color: var(--text-light);
  font-size: 1rem;
}

/* ────────────────────────────────────────────────────────────── */
/* AUDIO PLAYER FLOATING BUTTON */
/* ────────────────────────────────────────────────────────────── */

.audio-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-gold), #e5c158);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(212, 175, 55, 0.4);
}

.audio-button:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.6);
}

.audio-button.playing {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 5px 20px rgba(212, 175, 55, 0.4);
  }
  50% {
    box-shadow: 0 5px 40px rgba(212, 175, 55, 0.8);
  }
}

/* ────────────────────────────────────────────────────────────── */
/* CTA SECTION */
/* ────────────────────────────────────────────────────────────── */

.cta-hub {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-top: 80px;
  padding: 50px 30px;
  background: rgba(220, 38, 38, 0.1);
  border: 2px solid rgba(220, 38, 38, 0.3);
  border-radius: 12px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: slideUp 0.8s ease-out 0.4s backwards;
}

.cta-hub h2 {
  color: var(--primary-gold);
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.cta-hub p {
  color: var(--text-light);
  margin-bottom: 25px;
  font-size: 1rem;
}

.cta-button-hub {
  display: inline-block;
  padding: 15px 40px;
  background: linear-gradient(135deg, #dc2626, #991b1b);
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button-hub:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(220, 38, 38, 0.6);
}

/* ────────────────────────────────────────────────────────────── */
/* ANIMATIONS */
/* ────────────────────────────────────────────────────────────── */

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(30px, -30px);
  }
}

/* ────────────────────────────────────────────────────────────── */
/* RESPONSIVE */
/* ────────────────────────────────────────────────────────────── */

@media (max-width: 768px) {
  #hub-section {
    padding: 40px 15px;
  }

  .hub-header h1 {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .stats-grid {
    gap: 30px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .audio-button {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }

  .cta-hub {
    padding: 30px 20px;
  }
}
