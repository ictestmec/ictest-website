import React from 'react';
import posterImage from '../assets/pre-conf-event-2026-1.jpeg';
import './PreConf26.css';

const PreConfTalk26 = () => {
    return (
        <div className="preconf-container">
            <h1>Pre-Conference Events</h1>
            <div className="preconf26-layout">
                <img
                    src={posterImage}
                    alt="Workshop on Agentic AI and Workflow Automation"
                    className="preconf26-poster"
                />
                <div className="preconf26-details">
                    <h2>Don't Just Use AI — Build AI Agents That Automate Your Work!</h2>
                    <p className="preconf26-subtitle">
                        2-Day Hands-on Workshop on Agentic AI and Workflow Automation
                    </p>
                    <p className="preconf26-org">
                        Organized by the Training Cell, Government Model Engineering College (MEC), as part of the IEEE Technically Sponsored 3rd International Conference on Trends in Engineering Systems and Technologies (ICTEST 2026).
                    </p>

                    <div className="preconf26-highlights">
                        <h3>Why should you attend?</h3>
                        <ul>
                            <li><strong>Learn from an Expert:</strong> Led by Dr. Shailesh Sivan (Assistant Professor, DCS, CUSAT).</li>
                            <li><strong>Purely Hands-on:</strong> Build and deploy actual workflows</li>
                            <li><strong>Boost your Profile:</strong> Earn KTU Activity Points & get a certified credential.</li>
                        </ul>
                    </div>

                    <div className="preconf26-meta">
                        <div className="preconf26-meta-item">📅 <span><strong>Date:</strong> 8th &amp; 9th July 2026</span></div>
                        <div className="preconf26-meta-item">⏰ <span><strong>Time:</strong> 9:30 AM – 4:30 PM</span></div>
                        <div className="preconf26-meta-item">📍 <span><strong>Venue:</strong> SDPK Hall, MEC</span></div>
                        <div className="preconf26-meta-item">💵 <span><strong>Fee:</strong> ₹300/-</span></div>
                    </div>

                    <p className="preconf26-note">Note: Participants must bring their own laptops.</p>
                    <p className="preconf26-note">Slots are limited! Secure your seat now.</p>

                    <div className="preconf26-contact">
                        <span>📞 +91 97467 31011</span>
                    </div>

                    <a
                        href="https://tinyurl.com/3bya98yy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="preconf26-register-btn"
                    >
                        Secure Your Seat
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PreConfTalk26;
