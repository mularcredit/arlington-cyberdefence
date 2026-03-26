const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
    try {
        console.log('Encoding Logos to Base64...');
        const logoPath = path.join(__dirname, 'public', 'logo.png');
        const logoBuffer = fs.readFileSync(logoPath);
        const base64Logo = `data:image/png;base64,${logoBuffer.toString('base64')}`;
        
        let base64CA = '';
        let base64NC4 = '';
        
        const caPath = path.join(__dirname, 'public', 'hskdbfdskb-1-e1674497760327.png');
        const nc4Path = path.join(__dirname, 'public', 'NC4LOGOF1-Bv-SPLiw.png');
        
        if (fs.existsSync(caPath)) {
            base64CA = `data:image/png;base64,${fs.readFileSync(caPath).toString('base64')}`;
        } else {
            console.log('CAK Logo not found in public folder, trying root...');
            if (fs.existsSync('hskdbfdskb-1-e1674497760327.png')) base64CA = `data:image/png;base64,${fs.readFileSync('hskdbfdskb-1-e1674497760327.png').toString('base64')}`;
        }
        
        if (fs.existsSync(nc4Path)) {
            base64NC4 = `data:image/png;base64,${fs.readFileSync(nc4Path).toString('base64')}`;
        } else {
            console.log('NC4 Logo not found in public folder, trying root...');
            if (fs.existsSync('NC4LOGOF1-Bv-SPLiw.png')) base64NC4 = `data:image/png;base64,${fs.readFileSync('NC4LOGOF1-Bv-SPLiw.png').toString('base64')}`;
        }

        console.log('Crafting Enterprise Multi-Page HTML with Refined Questionnaire...');
        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    * { box-sizing: border-box; }
    html { font-size: 11px; }
    body {
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        color: #1e293b;
        margin: 0;
        padding: 0;
        background-color: #fff;
        line-height: 1.5;
        position: relative;
    }
    
    .page {
        width: 100%;
        max-width: 21cm;
        min-height: 29.7cm;
        margin: 0 auto;
        position: relative;
        z-index: 1;
        background: transparent;
        overflow: hidden;
    }
    
    .page-break {
        page-break-before: always;
    }
    
    .page::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-image: url('${base64Logo}');
        background-position: center 45%;
        background-repeat: no-repeat;
        background-size: 550px;
        opacity: 0.08;
        filter: invert(1) grayscale(100%);
        z-index: -1;
        pointer-events: none;
    }
    
    .header-bar {
        background-color: #070b14;
        border-top: 6px solid #00E676;
        color: #ffffff;
        padding: 2rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 2;
    }
    
    .header-logo img {
        height: 45px;
        object-fit: contain;
    }
    
    .header-meta {
        text-align: right;
    }
    
    .header-meta h1 {
        margin: 0 0 0.25rem;
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: #f8fafc;
    }
    
    .header-meta p {
        margin: 0;
        font-size: 0.85rem;
        color: #94a3b8;
    }
    
    /* Governing Bodies Banner */
    .governing-bodies {
        background: #f8fafc;
        border-bottom: 1px solid rgba(226, 232, 240, 0.5);
        padding: 0.75rem 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.75rem;
        color: #64748b;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        position: relative;
        z-index: 2;
    }
    
    .governing-bodies img {
        height: 40px;
        object-fit: contain;
        display: block;
    }
    
    .content-body {
        padding: 2rem 3rem;
        position: relative;
        z-index: 2;
    }
    
    .address-grid {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
    
    .address-block h3 {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #64748b;
        margin: 0 0 0.75rem 0;
        border-bottom: 1px solid rgba(226, 232, 240, 0.5);
        padding-bottom: 0.5rem;
    }
    
    .address-text {
        font-size: 0.95rem;
        color: #334155;
    }
    
    .address-text strong {
        color: #0f172a;
        font-size: 1.05rem;
        display: block;
        margin-bottom: 0.25rem;
    }
    
    .project-banner {
        background: #e2e8f0;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        border-radius: 8px;
    }
    
    .project-banner h2 {
        margin: 0 0 0.5rem 0;
        color: #0f172a;
        font-size: 1.25rem;
        letter-spacing: -0.02em;
    }
    
    .project-banner p {
        margin: 0;
        font-size: 0.925rem;
        color: #475569;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 2rem;
        background: transparent;
    }
    
    th {
        background-color: #0f172a;
        color: #f8fafc;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
        padding: 1rem;
        text-align: left;
    }
    
    td {
        padding: 0.5rem 1rem;
        border-bottom: 1px solid rgba(226, 232, 240, 0.5);
        vertical-align: top;
    }
    
    tr:last-child td {
        border-bottom: 2px solid #0f172a;
    }
    
    .item-name {
        font-weight: 600;
        color: #0f172a;
        font-size: 0.95rem;
        margin-bottom: 0.25rem;
    }
    
    .item-desc {
        font-size: 0.85rem;
        color: #64748b;
    }
    
    .amount {
        text-align: right;
        font-variant-numeric: tabular-nums;
        color: #0f172a;
        font-weight: 500;
    }
    
    .totals-container {
        width: 45%;
        margin-left: auto;
        margin-bottom: 0.75rem;
    }
    
    .total-row {
        display: flex;
        justify-content: space-between;
        padding: 0.35rem 0;
        border-bottom: 1px solid rgba(226, 232, 240, 0.5);
        font-size: 0.88rem;
        color: #475569;
    }
    
    .total-row.grand-total {
        font-weight: 700;
        font-size: 1.05rem;
        color: #0f172a;
        border-bottom: none;
        padding-top: 0.5rem;
    }
    
    .grand-total .val {
        color: #00b35c;
    }
    
    .terms {
        font-size: 0.78rem;
        color: #64748b;
        background: transparent;
        padding: 0.6rem 0;
        border-top: 1px solid #e2e8f0;
    }
    
    .terms h4 {
        color: #0f172a;
        margin: 0 0 0.5rem 0;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    
    .signature-area {
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
    }
    
    .sign-block {
        width: 40%;
    }
    
    .sign-line {
        border-bottom: 1px solid #94a3b8;
        margin-bottom: 0.3rem;
        height: 28px;
    }
    
    .sign-text {
        font-size: 0.75rem;
        color: #64748b;
    }

    /* Questionnaire Form Styles */
    .q-intro {
        margin-bottom: 2rem;
        font-size: 0.95rem;
        color: #475569;
    }
    
    .q-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .q-block {
        margin-bottom: 0.25rem;
        background: rgba(248, 250, 252, 0.6);
        padding: 1rem 1.25rem;
        border-left: 3px solid #cbd5e1;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
    }
    
    .q-title {
        font-weight: 600;
        color: #0f172a;
        font-size: 0.95rem;
        margin-bottom: 0.75rem;
    }
    
    .q-options {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .q-option {
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        color: #334155;
    }
    
    .q-box {
        width: 14px;
        height: 14px;
        border: 1px solid #94a3b8;
        border-radius: 2px;
        margin-right: 8px;
        background: #fff;
        flex-shrink: 0;
    }
    
    .q-line {
        border-bottom: 1px dashed #cbd5e1;
        height: 1.5rem;
        width: 100%;
        margin-top: 0.5rem;
    }
    
</style>
</head>
<body>
    <!-- PAGE 1: Scoping Questionnaire -->
    <div class="page">
        <div class="header-bar">
            <div class="header-logo">
                <img src="${base64Logo}" alt="Arlington Cyber Defense">
            </div>
            <div class="header-meta">
                <h1>QUOTATION</h1>
                <p>Ref: ARL-2026-FGL-041</p>
                <p>Date: March 26, 2026</p>
            </div>
        </div>
        
        <div class="governing-bodies">
            <img src="${base64CA}" style="height: 52px;" alt="Communications Authority of Kenya">
            <img src="${base64NC4}" alt="National Computer and Cybercrime Coordination Committee">
        </div>

        <div class="content-body" style="padding-top: 2rem;">
            <h3 style="margin-top:0; color:#0f172a; text-transform:uppercase; letter-spacing:0.05em; border-bottom: 2px solid #00E676; padding-bottom: 0.5rem; display:inline-block;">Project Scoping Form</h3>
            <p class="q-intro" style="margin-bottom: 1.5rem;">To ensure precision during the security audit of the Jasiri Lending Software, please explicitly define the target environments and architectures by ticking the applicable boxes.</p>
            
            <div class="q-grid">
                <!-- Question 1 -->
                <div class="q-block">
                    <div class="q-title">1. Target Environment & Hosting</div>
                    <div class="q-options">
                        <div class="q-option"><div class="q-box"></div> Hyperscale Cloud (AWS, Azure, GCP)</div>
                        <div class="q-option"><div class="q-box"></div> PaaS / Managed (Render, Vercel, Heroku)</div>
                        <div class="q-option"><div class="q-box"></div> Dedicated / On-Premise Data Center</div>
                        <div class="q-option"><div class="q-box"></div> Hybrid / Other Configurations</div>
                    </div>
                </div>
                
                <!-- Question 2 -->
                <div class="q-block">
                    <div class="q-title">2. Database & Data Storage Architecture</div>
                    <div class="q-options">
                        <div class="q-option"><div class="q-box"></div> Managed Relational (RDS, Neon, PlanetScale)</div>
                        <div class="q-option"><div class="q-box"></div> Managed NoSQL (MongoDB Atlas, DynamoDB)</div>
                        <div class="q-option"><div class="q-box"></div> Backend-as-a-Service (Supabase, Firebase)</div>
                        <div class="q-option"><div class="q-box"></div> Self-Hosted Database Servers</div>
                    </div>
                </div>
                
                <!-- Question 3 -->
                <div class="q-block">
                    <div class="q-title">3. Application Interface Scope</div>
                    <div class="q-options">
                        <div class="q-option"><div class="q-box"></div> Web Application Frontend (UI)</div>
                        <div class="q-option"><div class="q-box"></div> REST API / Microservices</div>
                        <div class="q-option"><div class="q-box"></div> GraphQL Gateway</div>
                        <div class="q-option"><div class="q-box"></div> Mobile Application Backend</div>
                    </div>
                </div>
                
                <!-- Question 4 -->
                <div class="q-block">
                    <div class="q-title">4. Tenant Isolation Strategy</div>
                    <div class="q-options">
                        <div class="q-option"><div class="q-box"></div> Single-Tenant (Isolated Deployments)</div>
                        <div class="q-option"><div class="q-box"></div> Multi-Tenant (Shared Logical Database)</div>
                        <div class="q-option"><div class="q-box"></div> B2B Enterprise (Strict Data Partitioning)</div>
                        <div class="q-option"><div class="q-box"></div> Internal Corporate / Operations Use Only</div>
                    </div>
                </div>
                
                <!-- Question 5 -->
                <div class="q-block">
                    <div class="q-title">5. Edge Security & WAF Ruleset</div>
                    <div class="q-options">
                        <div class="q-option"><div class="q-box"></div> Global CDN WAF (Cloudflare, Akamai)</div>
                        <div class="q-option"><div class="q-box"></div> Cloud Native WAF (AWS Shield, Azure WAF)</div>
                        <div class="q-option"><div class="q-box"></div> Network Appliance (F5, Imperva)</div>
                        <div class="q-option"><div class="q-box"></div> None / Direct Connection</div>
                    </div>
                </div>
                
                <!-- Question 6 -->
                <div class="q-block">
                    <div class="q-title">6. Network Accessibility Restrictions</div>
                    <div class="q-options">
                        <div class="q-option"><div class="q-box"></div> Fully Public (Internet Facing)</div>
                        <div class="q-option"><div class="q-box"></div> Geo-Blocked / Regional Only</div>
                        <div class="q-option"><div class="q-box"></div> Explicit IP Allowlisting Required</div>
                        <div class="q-option"><div class="q-box"></div> Client VPN / Zero Trust Bound</div>
                    </div>
                </div>
                
                <!-- Question 7 -->
                <div class="q-block" style="grid-column: 1 / -1; background: transparent; border: none; padding: 0;">
                    <div class="q-title" style="margin-top: 0.5rem;">7. Explicit Primary Target URLs</div>
                    <div class="q-line" style="margin-top: 1rem;"></div>
                    <div class="q-line" style="margin-top: 1.5rem;"></div>
                </div>
            </div>
            
            <div style="padding: 1.25rem; background: #f8fafc; border-left: 4px solid #0f172a; font-size: 0.85rem; color: #475569;">
                <strong>Notice:</strong> Please sign and return this completed questionnaire alongside the trailing scope-of-work confirmation to authorize the commencement of phase-one vulnerability probing.
            </div>
        </div>
    </div>

    <!-- PAGE 2: Quotation -->
    <div class="page page-break">
        <div class="header-bar">
            <div class="header-logo">
                <img src="${base64Logo}" alt="Arlington Cyber Defense">
            </div>
            <div class="header-meta">
                <h1>QUOTATION</h1>
                <p>Ref: ARL-2026-FGL-041</p>
                <p>Date: March 26, 2026</p>
            </div>
        </div>
        
        <div class="governing-bodies">
            <img src="${base64CA}" style="height: 52px;" alt="Communications Authority of Kenya">
            <img src="${base64NC4}" alt="National Computer and Cybercrime Coordination Committee">
        </div>

        <div class="content-body" style="padding-top: 2rem;">
            <div class="address-grid">
                <div class="address-block" style="width: 45%;">
                    <h3>Prepared For</h3>
                    <div class="address-text">
                        <strong>Figbud Global Limited</strong>
                        Parliament Road<br>
                        St. George's House, Room 104<br>
                        First Floor<br>
                        Nairobi, Kenya
                    </div>
                </div>
                
                <div class="address-block" style="width: 40%;">
                    <h3>Issued By</h3>
                    <div class="address-text">
                        <strong>Arlington Cyber Defense</strong>
                        Western Heights Building, along Karuna Road, opposite Sarit Centre<br>
                        defend@arlington-cyberdefense.space<br>
                        www.arlington-cyberdefense.space
                    </div>
                </div>
            </div>

            <div class="project-banner">
                <h2>Project: Jasiri Lending Software</h2>
                <p>Comprehensive penetration test targeting the core application infrastructure, API boundary, and financial authorization logic within the Jasiri ecosystem.</p>
            </div>

            <table>
                <thead>
                    <tr>
                        <th style="width: 50%;">Scope of Work</th>
                        <th style="width: 15%;">Hours</th>
                        <th style="width: 15%; text-align: right;">Rate (KES)</th>
                        <th class="amount" style="width: 20%;">Total (KES)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="item-name">SQL Injection Vulnerability Assessment</div>
                            <div class="item-desc">Targeted injection attacks and database query tampering analysis against core authentication and ledger data storage architectures.</div>
                        </td>
                        <td>-</td>
                        <td style="text-align: right;">15,000</td>
                        <td class="amount">15,000</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="item-name">DDoS Resilience & Load Testing</div>
                            <div class="item-desc">Simulated Denial of Service (DDoS) bandwidth testing to identify throttling weaknesses and confirm WAF configuration efficiency under pressure.</div>
                        </td>
                        <td>-</td>
                        <td style="text-align: right;">15,000</td>
                        <td class="amount">15,000</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="item-name">API Boundary & Exploit Auditing</div>
                            <div class="item-desc">Manual manipulation of headless endpoints (REST/GraphQL) identifying BOLA/IDOR weaknesses across transaction gates.</div>
                        </td>
                        <td>-</td>
                        <td style="text-align: right;">15,000</td>
                        <td class="amount">15,000</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="item-name">Financial Transaction Tampering</div>
                            <div class="item-desc">Aggressive assessment around the lending lifecycle, loan limits, credit checks, and disbursement gateway integrations.</div>
                        </td>
                        <td>-</td>
                        <td style="text-align: right;">15,000</td>
                        <td class="amount">15,000</td>
                    </tr>
                </tbody>
            </table>

            <div class="totals-container">
                <div class="total-row">
                    <span>Subtotal</span>
                    <span>60,000</span>
                </div>
                <div class="total-row grand-total">
                    <span>Total (KES)</span>
                    <span class="val">60,000</span>
                </div>
            </div>

            <div style="background: #f0fdf4; border: 1px solid #16a34a; border-radius: 6px; padding: 0.75rem 1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                <div style="background: #16a34a; color: white; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem; flex-shrink: 0;">!</div>
                <div>
                    <strong style="color: #166534; font-size: 0.9rem; display: block; margin-bottom: 0.1rem;">Payment Terms: Deposit Required</strong>
                    <p style="margin:0; color: #166534; font-size: 0.85rem;">A mandatory deposit of <strong>30,000 KES</strong> is required to initiate the engagement and secure the assessment timeline.</p>
                </div>
            </div>

            <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 0.75rem 1rem; margin-bottom: 1rem;">
                <strong style="color: #0f172a; font-size: 0.9rem; display: block; margin-bottom: 0.4rem;">&#128179; Payment Methods</strong>
                <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 0.3rem 0; color: #64748b; width: 40%;">Account Name</td>
                        <td style="padding: 0.3rem 0; font-weight: 600; color: #0f172a;">Arlington Studios</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 0.3rem 0; color: #64748b;">Bank Account No.</td>
                        <td style="padding: 0.3rem 0; font-weight: 600; color: #0f172a; letter-spacing: 0.05em;">1339162997</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.3rem 0; color: #64748b;">M-Pesa Till Number</td>
                        <td style="padding: 0.3rem 0; font-weight: 600; color: #16a34a; letter-spacing: 0.05em;">7003708</td>
                    </tr>
                </table>
            </div>

            <div style="page-break-inside: avoid;">
            <div class="signature-area" style="margin-top: 0.75rem;">
                <div class="sign-block">
                    <div class="sign-line"></div>
                    <div class="sign-text">Authorized Signature - Arlington Cyber Defense</div>
                </div>
                <div class="sign-block">
                    <div class="sign-line"></div>
                    <div class="sign-text">Authorized Signature - Figbud Global Limited</div>
                </div>
            </div>
            </div>
        </div>
    </div>
</body>
</html>
`;
        fs.writeFileSync('quotation.html', htmlContent);
        console.log('Quotation HTML updated. Questionnaire refined with modern tech stacks. Launching Puppeteer...');

        const browser = await puppeteer.launch({
            headless: "new"
        });
        const page = await browser.newPage();
        
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        const pdfOutput = 'Arlington_Figbud_Jasiri_Quotation.pdf';
        await page.pdf({
            path: pdfOutput,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0cm',
                right: '0cm',
                bottom: '0cm',
                left: '0cm'
            }
        });

        console.log(`Successfully generated PDF: ${pdfOutput}`);
        await browser.close();
    } catch (err) {
        console.error('Error generating PDF:', err);
        process.exit(1);
    }
})();
