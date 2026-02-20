const steps = [
    {
        num: '01',
        icon: '👥',
        title: 'Form a Trusted Circle',
        desc: 'Invite verified members into your lending circle. Each member is onboarded with KYC and trust scoring.',
    },
    {
        num: '02',
        icon: '💰',
        title: 'Monthly Contributions',
        desc: 'Members contribute a fixed amount every month. Smart contracts lock funds immediately — no manual collection.',
    },
    {
        num: '03',
        icon: '🔄',
        title: 'Automated Rotation',
        desc: 'Funds rotate to one member per cycle following pre-agreed order. No bias, no organizer discretion.',
    },
    {
        num: '04',
        icon: '🔒',
        title: 'Secured on Blockchain',
        desc: 'Every transaction is recorded immutably on Ethereum/Polygon. Transparent, verifiable, tamper-proof.',
    },
]

export default function HowItWorks() {
    return (
        <section className="section how" id="how">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge"><span className="dot" />The Process</span>
                    <h2>How <span className="gradient-text">CircleTrust</span> Works</h2>
                    <p>
                        Four simple steps that transform informal lending into a secure, automated,
                        and fully transparent financial ecosystem.
                    </p>
                </div>

                <div className="steps-grid">
                    {steps.map((s) => (
                        <div className="step-card" key={s.num}>
                            <div className="step-num">{s.num}</div>
                            <div className="step-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
