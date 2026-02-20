const stack = [
    {
        icon: '🔐',
        color: '#3b82f6',
        title: 'JWT Authentication',
        desc: 'Secure token-based auth & encryption',
    },
    {
        icon: '🌐',
        color: '#7c3aed',
        title: 'Web3 APIs',
        desc: 'Wallet interaction & blockchain reads',
    },
    {
        icon: '⚡',
        color: '#06b6d4',
        title: 'Node.js REST APIs',
        desc: 'Fast, scalable backend microservices',
    },
    {
        icon: '📱',
        color: '#10b981',
        title: 'React Native / Flutter',
        desc: 'Cross-platform mobile & web apps',
    },
    {
        icon: '🧠',
        color: '#f59e0b',
        title: 'Trust Scoring Engine',
        desc: 'Rule-based credit & behavioural scoring',
    },
    {
        icon: '⛓️',
        color: '#7c3aed',
        title: 'Ethereum / Polygon',
        desc: 'Smart contracts for fund governance',
    },
]

export default function TechStack() {
    return (
        <section className="section tech" id="tech">
            <div className="orb orb-cyan" style={{ width: 450, height: 450, top: '20%', right: -150, opacity: 0.12 }} />

            <div className="container">
                <div className="section-header">
                    <span className="section-badge"><span className="dot" />Technology</span>
                    <h2>Built on a <span className="gradient-text-cyan">Modern Stack</span></h2>
                    <p>
                        CircleTrust combines the power of blockchain immutability with modern web and mobile
                        technologies to deliver a seamless, secure experience.
                    </p>
                </div>

                <div className="tech-grid">
                    {stack.map((t) => (
                        <div className="tech-card" key={t.title}>
                            <div
                                className="tc-icon"
                                style={{
                                    background: `${t.color}15`,
                                    border: `1px solid ${t.color}30`,
                                }}
                            >
                                {t.icon}
                            </div>
                            <div>
                                <h4>{t.title}</h4>
                                <p>{t.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Architecture diagram visual */}
                <div
                    style={{
                        marginTop: 64,
                        padding: '40px 32px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-xl)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <h3 style={{ textAlign: 'center', marginBottom: 32, fontFamily: 'var(--font-head)', color: 'var(--text-primary)' }}>
                        System Architecture
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, flexWrap: 'wrap', rowGap: 16 }}>
                        {[
                            { label: 'Mobile App', sub: 'React Native', color: '#3b82f6' },
                            { label: '→', sub: '', color: 'transparent' },
                            { label: 'Node.js API', sub: 'REST + JWT', color: '#7c3aed' },
                            { label: '→', sub: '', color: 'transparent' },
                            { label: 'Smart Contracts', sub: 'Ethereum / Polygon', color: '#06b6d4' },
                            { label: '→', sub: '', color: 'transparent' },
                            { label: 'Trust Engine', sub: 'Scoring + Rules', color: '#10b981' },
                        ].map((item, i) =>
                            item.color === 'transparent' ? (
                                <div key={i} style={{ fontSize: '1.4rem', color: 'var(--text-muted)', padding: '0 8px' }}>→</div>
                            ) : (
                                <div
                                    key={i}
                                    style={{
                                        padding: '16px 22px',
                                        background: `${item.color}10`,
                                        border: `1px solid ${item.color}30`,
                                        borderRadius: 14,
                                        textAlign: 'center',
                                        minWidth: 140,
                                    }}
                                >
                                    <div style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: 4 }}>
                                        {item.label}
                                    </div>
                                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.sub}</div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
