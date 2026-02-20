const links = {
    product: [
        { label: 'How It Works', href: '#how' },
        { label: 'Features', href: '#features' },
        { label: 'Technology', href: '#tech' },
        { label: 'Roadmap', href: '#future' },
    ],
    company: [
        { label: 'About Us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press Kit', href: '#' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Use', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Compliance', href: '#' },
    ],
}

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="nav-logo" style={{ fontSize: '1.3rem' }}>
                            <div className="nav-logo-icon">⬡</div>
                            Circle<span className="gradient-text">Trust</span>
                        </div>
                        <p>
                            Digitizing traditional chit funds into secure, transparent, blockchain-backed
                            peer-to-peer lending circles for communities worldwide.
                        </p>

                        {/* Mini stats */}
                        <div style={{ display: 'flex', gap: 24, marginTop: 24 }}>
                            {[
                                { num: '10K+', label: 'Waitlist' },
                                { num: '100%', label: 'On-chain' },
                                { num: '₹0', label: 'Hidden fees' },
                            ].map((s) => (
                                <div key={s.label}>
                                    <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                                        {s.num}
                                    </div>
                                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product links */}
                    <div className="footer-col">
                        <h5>Product</h5>
                        <ul>
                            {links.product.map((l) => (
                                <li key={l.label}><a href={l.href}>{l.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company links */}
                    <div className="footer-col">
                        <h5>Company</h5>
                        <ul>
                            {links.company.map((l) => (
                                <li key={l.label}><a href={l.href}>{l.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal links */}
                    <div className="footer-col">
                        <h5>Legal</h5>
                        <ul>
                            {links.legal.map((l) => (
                                <li key={l.label}><a href={l.href}>{l.label}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom">
                    <span>© 2026 CircleTrust. All rights reserved.</span>
                    <div className="socials">
                        {['𝕏', '𝕃', '📧', '💬'].map((icon, i) => (
                            <button key={i} className="social-btn" aria-label="Social link">
                                {icon}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
