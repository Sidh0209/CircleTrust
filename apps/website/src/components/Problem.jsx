const problems = [
    {
        icon: '🔓',
        title: 'Lack of Security',
        desc: 'Traditional chit funds offer no legal protection and carry a high risk of fraud or organizers absconding with pooled funds.',
    },
    {
        icon: '📊',
        title: 'Inefficiency & Disputes',
        desc: 'Manual tracking via Excel or WhatsApp leads to disputes, calculation errors, and a complete lack of financial transparency.',
    },
    {
        icon: '📉',
        title: 'Scalability Issues',
        desc: 'Without digitization, lending circles cannot grow safely. Every new member exponentially increases coordination overhead.',
    },
    {
        icon: '🕳️',
        title: 'Market Gap',
        desc: 'Existing fintech and P2P lending apps ignore community-based trust models, leaving millions in the informal lending sector unserved.',
    },
]

export default function Problem() {
    return (
        <section className="section problem" id="problem">
            <div className="orb orb-violet" style={{ width: 400, height: 400, top: '10%', right: -150, opacity: 0.15 }} />

            <div className="container">
                <div className="section-header">
                    <span className="section-badge"><span className="dot" />The Problem</span>
                    <h2>Traditional Lending Circles Are <span className="gradient-text">Broken</span></h2>
                    <p>
                        Informal chit funds have served communities for generations — but they are held together
                        by blind trust alone, making them dangerously fragile.
                    </p>
                </div>

                <div className="problem-grid">
                    {problems.map((p) => (
                        <div className="problem-card" key={p.title}>
                            <div className="p-icon">{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
