const comparisons = [
    { aspect: 'Trust Enforcement', old: '❌ Assumed, unenforceable', new: '✅ Predefined system rules' },
    { aspect: 'Power Concentration', old: '❌ Single organizer = single failure', new: '✅ Fully distributed control' },
    { aspect: 'Fund Locking', old: '❌ No mid-cycle withdrawal block', new: '✅ Funds locked by smart contract' },
    { aspect: 'HNI Impact', old: '❌ Destabilizes the group', new: '✅ Regulated via structured roles' },
    { aspect: 'Dispute Proof', old: '❌ No verifiable evidence', new: '✅ Immutable on-chain logs' },
    { aspect: 'Exit Risk', old: '❌ Sudden exits collapse the cycle', new: '✅ Replacement & penalty system' },
    { aspect: 'Group vs Individual', old: '❌ Individual overrides group', new: '✅ Group stability prioritized' },
    { aspect: 'Scalability', old: '❌ Growth = more human error', new: '✅ Automation handles scale' },
    { aspect: 'System Reliability', old: '❌ Depends on human honesty', new: '✅ Enforced logic & verified exec' },
    { aspect: 'Long-term Stability', old: '❌ Trust erodes as money grows', new: '✅ Trust strengthens with history' },
]

const featureCards = [
    { icon: '🛡️', color: 'fi-blue', title: 'Tamper-Proof Records', desc: 'Every transaction is immutably recorded on the blockchain. No one can alter history, dispute evidence, or commit undetected fraud.' },
    { icon: '⚙️', color: 'fi-violet', title: 'Automated Governance', desc: 'Smart contracts execute rotation, payouts, and penalties automatically — removing human bias and the possibility of organizer fraud.' },
    { icon: '🔍', color: 'fi-cyan', title: 'Full Transparency', desc: 'All members can view the pool balance, contribution history, and upcoming payouts in real time. Zero information asymmetry.' },
    { icon: '🌐', color: 'fi-green', title: 'Financial Inclusion', desc: 'Designed for underbanked communities. No credit score required — only your circle\'s trust and consistent contribution history.' },
    { icon: '🔒', color: 'fi-amber', title: 'Smart Fund Locking', desc: 'Funds are locked in escrow for the entire cycle duration. No individual — not even the organizer — can access funds mid-cycle.' },
    { icon: '📈', color: 'fi-red', title: 'Trust Score Engine', desc: 'A rule-based trust scoring system tracks member behaviour, penalizes defaults, and rewards consistency — building a verifiable credit history.' },
]

export default function Features() {
    return (
        <section className="section features" id="features">
            <div className="orb orb-blue" style={{ width: 500, height: 500, bottom: -100, left: -200, opacity: 0.12 }} />

            <div className="container">
                {/* Comparison Table */}
                <div className="section-header">
                    <span className="section-badge"><span className="dot" />Why CircleTrust</span>
                    <h2>Old System vs. <span className="gradient-text">Trust Chain</span></h2>
                    <p>A side-by-side breakdown of why the traditional approach always fails and how CircleTrust fixes every gap.</p>
                </div>

                <div className="comparison-wrap">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Aspect</th>
                                <th>❌ Pre-Existing System</th>
                                <th>✅ CircleTrust</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((row) => (
                                <tr key={row.aspect}>
                                    <td>{row.aspect}</td>
                                    <td><span className="bad">{row.old}</span></td>
                                    <td><span className="good">{row.new}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Feature Cards */}
                <div className="section-header" style={{ marginTop: 80 }}>
                    <span className="section-badge"><span className="dot" />Core Features</span>
                    <h2>Everything You Need to <span className="gradient-text">Trust the System</span></h2>
                    <p>Built-in safeguards that replace the need for blind trust with verifiable, automated rules.</p>
                </div>

                <div className="features-grid">
                    {featureCards.map((f) => (
                        <div className="feature-card" key={f.title}>
                            <div className={`f-icon ${f.color}`}>{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
