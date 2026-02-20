const impacts = [
    {
        icon: '🔗',
        title: 'Tamper-Proof Transparency',
        desc: 'Every contribution, payout, and penalty is logged immutably on the blockchain. Any member can audit the full circle history at any time — no hidden fees, no fuzzy math.',
    },
    {
        icon: '🛡️',
        title: 'Fraud Prevention',
        desc: 'Smart contract escrow eliminates the possibility of an organizer absconding with funds. Rules are enforced in code, not by trust in a person.',
    },
    {
        icon: '⚙️',
        title: 'Automated Governance',
        desc: 'Fund rotation, payout scheduling, contribution reminders, and default penalties all execute automatically. Zero manual intervention, zero human error.',
    },
    {
        icon: '🤝',
        title: 'Digitized Trust',
        desc: 'Social trust models that have existed for centuries are now quantified, recorded, and enforced — creating a verifiable track record that grows stronger over time.',
    },
    {
        icon: '🌍',
        title: 'Financial Inclusion',
        desc: 'Underbanked communities gain access to structured credit without formal credit scores. Your circle history becomes your financial identity.',
    },
    {
        icon: '📊',
        title: 'Analytics & Visibility',
        desc: 'Real-time dashboards for members and regulators to track repayment rates, circle health score, and individual contribution records at a glance.',
    },
]

export default function Impact() {
    return (
        <section className="section impact" id="impact">
            <div className="orb orb-violet" style={{ width: 500, height: 500, top: '10%', left: -200, opacity: 0.12 }} />

            <div className="container">
                <div className="section-header">
                    <span className="section-badge"><span className="dot" />Impact</span>
                    <h2>Expected <span className="gradient-text">Outcomes</span></h2>
                    <p>
                        CircleTrust doesn't just digitize chit funds — it fundamentally reimagines
                        the trust and safety layers that underpin community finance.
                    </p>
                </div>

                <div className="impact-grid">
                    {impacts.map((item) => (
                        <div className="impact-card" key={item.title}>
                            <div className="impact-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
