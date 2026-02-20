const futures = [
    {
        icon: '🤖',
        title: 'AI-Driven Trust Scoring',
        desc: 'Future AI models will analyze repayment behaviour, spending patterns, and circle history to compute precise, dynamic trust and credit scores for each member.',
    },
    {
        icon: '🏦',
        title: 'UPI & Bank Integration',
        desc: 'Planned integration with UPI, major banks, and NBFCs will allow direct bank-to-circle transfers, expanding market reach to hundreds of millions.',
    },
    {
        icon: '📱',
        title: 'Cross-Platform Mobile App',
        desc: 'A full Flutter / React Native mobile app is in the roadmap — delivering the complete circle management experience on iOS and Android.',
    },
    {
        icon: '📈',
        title: 'Regulator Dashboards',
        desc: 'Advanced analytics dashboards will provide regulators and compliance teams with real-time monitoring of circle health, repayment rates, and risk indicators.',
    },
    {
        icon: '🌏',
        title: 'Global Circle Marketplace',
        desc: 'A marketplace where verified organizers can list circles and pre-screened members can join — enabling cross-community and diaspora saving groups.',
    },
    {
        icon: '⛓️',
        title: 'Multi-Chain Support',
        desc: 'Beyond Ethereum/Polygon, future support for Solana, BNB Chain, and Layer-2 rollups will minimize gas costs and increase accessibility.',
    },
]

export default function FutureScope() {
    return (
        <section className="section future" id="future">
            <div className="orb orb-cyan" style={{ width: 450, height: 450, bottom: -100, right: -150, opacity: 0.12 }} />

            <div className="container">
                <div className="section-header">
                    <span className="section-badge"><span className="dot" />Roadmap</span>
                    <h2>Future <span className="gradient-text-cyan">Scope</span></h2>
                    <p>
                        CircleTrust is built for the future. Here's what's coming on our journey
                        from fintech product to global community finance platform.
                    </p>
                </div>

                <div className="future-grid">
                    {futures.map((f) => (
                        <div className="future-card" key={f.title}>
                            <div className="fut-icon">{f.icon}</div>
                            <div>
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
