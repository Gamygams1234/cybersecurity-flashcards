const questions = {
  "Security Principles": {
    CIA: [
      {
        id: 1,
        question: "What does the 'C' in CIA stand for?",
        options: ["Confidentiality", "Consistency", "Control", "Confusion"],
        answerIndex: 0,
      },
      {
        id: 2,
        question: "What is the main goal of Integrity in the CIA triad?",
        options: [
          "Prevent unauthorized access",
          "Ensure data is not altered",
          "Maintain system uptime",
          "Encrypt sensitive data",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "Why is Availability important in cybersecurity?",
        options: [
          "It ensures data is only accessible by administrators.",
          "It guarantees system resources are always accessible when needed.",
          "It prevents phishing attacks.",
          "It stops malware from executing.",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "Why might someone avoid shopping on a website if they fear a lack of confidentiality?",
        options: [
          "They might not like the color scheme.",
          "They worry their personal data will be disclosed.",
          "They want faster shipping.",
          "They can't find the product they need.",
        ],
        answerIndex: 1,
      },
      {
        id: 5,
        question: "What could happen if a hacker alters a shipping address during online shopping?",
        options: [
          "The order arrives faster.",
          "The package is sent to the wrong location.",
          "The product becomes encrypted.",
          "The website becomes unavailable.",
        ],
        answerIndex: 1,
      },
      {
        id: 6,
        question: "What does availability ensure in an online shopping context?",
        options: [
          "That your order is always encrypted.",
          "That the website or app is accessible to place orders.",
          "That the credit card number stays hidden.",
          "That only admins can access the server.",
        ],
        answerIndex: 1,
      },
      {
        id: 7,
        question: "What could a loss of availability lead to in a medical system?",
        options: [
          "Faster diagnosis.",
          "Patients losing weight.",
          "Doctors unable to access patient history.",
          "More accurate prescriptions.",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "What happens if a patient record is altered maliciously?",
        options: [
          "The patient gets free treatment.",
          "It may lead to incorrect and harmful treatment.",
          "The system becomes faster.",
          "It improves patient privacy.",
        ],
        answerIndex: 1,
      },
      {
        id: 9,
        question: "In which case is integrity more important than confidentiality?",
        options: [
          "In public university announcements.",
          "In encrypted bank records.",
          "In hospital database access.",
          "In social media password resets.",
        ],
        answerIndex: 0,
      },
      {
        id: 10,
        question: "What does authenticity ensure in cybersecurity?",
        options: [
          "That files are fast.",
          "That files are original and not counterfeit.",
          "That files are encrypted.",
          "That files are always confidential.",
        ],
        answerIndex: 1,
      },
      {
        id: 11,
        question: "What does nonrepudiation protect against?",
        options: [
          "Forgetting passwords.",
          "Hackers encrypting data.",
          "The sender denying they sent a file or order.",
          "The recipient deleting a file.",
        ],
        answerIndex: 2,
      },
      {
        id: 12,
        question: "Which of the following best describes 'Utility' from the Parkerian Hexad?",
        options: [
          "A file that\u2019s available but encrypted without a key.",
          "A backup copy of a file.",
          "A file that's shared with unauthorized users.",
          "A file that\u2019s stored on an external drive.",
        ],
        answerIndex: 0,
      },
      {
        id: 13,
        question: "What is 'Possession' in the Parkerian Hexad concerned with?",
        options: [
          "Who can decrypt a file.",
          "Preventing unauthorized control or copying of data.",
          "The usefulness of the file.",
          "The availability of data across systems.",
        ],
        answerIndex: 1,
      },
    ],
    DAD: [
      {
        id: 1,
        question: "What does the DAD triad stand for?",
        options: [
          "Disclosure, Alteration, Destruction",
          "Defense, Attack, Denial",
          "Detect, Avoid, Delay",
          "Data, Access, Dump",
        ],
        answerIndex: 0,
      },
      {
        id: 2,
        question: "Which of the following is an example of a Disclosure attack?",
        options: [
          "Modifying medical records to show incorrect data",
          "Making patient records publicly available online",
          "Deleting records from a hospital system",
          "Blocking access to a hospital network",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "What could an Alteration attack lead to?",
        options: [
          "Confidential records being leaked",
          "A system becoming completely unavailable",
          "Wrong treatment being given to a patient",
          "A user being locked out of their account",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "Destruction or denial attacks are most closely related to which CIA triad component?",
        options: ["Confidentiality", "Integrity", "Availability", "Authenticity"],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "Why is it important to balance confidentiality, integrity, and availability?",
        options: [
          "Because each principle cancels the other",
          "To reduce encryption time",
          "Focusing too much on one can weaken the others",
          "It makes networks faster",
        ],
        answerIndex: 2,
      },
    ],
    "Fundamental Concepts of Security Models": [
      {
        id: 1,
        question: "What is the main goal of the Bell-LaPadula Model?",
        options: ["Integrity", "Availability", "Confidentiality", "Authentication"],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "Which rule in Bell-LaPadula is described as 'no read up'?",
        options: [
          "Simple Security Property",
          "Star Integrity Property",
          "Discretionary Property",
          "Transformation Procedure",
        ],
        answerIndex: 0,
      },
      {
        id: 3,
        question: "Which Bell-LaPadula rule prevents users from writing to lower security levels?",
        options: [
          "No read down",
          "Discretionary Property",
          "Star Security Property",
          "Integrity Verification Procedure",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "The Biba Model is focused on which security principle?",
        options: ["Availability", "Authenticity", "Integrity", "Confidentiality"],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "What is the core idea behind the Biba Model\u2019s 'no write up' rule?",
        options: [
          "Low integrity users should not write to high integrity data",
          "Low clearance users must write everything",
          "Write access is allowed to all users",
          "High integrity data must be publicly accessible",
        ],
        answerIndex: 0,
      },
      {
        id: 6,
        question: "Which model introduces Constrained and Unconstrained Data Items?",
        options: ["Bell-LaPadula", "Clark-Wilson", "Graham-Denning", "Biba"],
        answerIndex: 1,
      },
      {
        id: 7,
        question: "What is the role of Integrity Verification Procedures (IVPs) in the Clark-Wilson model?",
        options: [
          "To encrypt and decrypt files",
          "To verify access levels",
          "To maintain and validate data integrity",
          "To allow administrative overrides",
        ],
        answerIndex: 2,
      },
    ],
    "Defence In Depth": [
      {
        id: 1,
        question: "What is another term commonly used for Defence-in-Depth?",
        options: ["Perimeter Security", "Single-Layer Security", "Multi-Level Security", "Network Segmentation"],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What is the main benefit of using multiple layers of security?",
        options: [
          "It makes the system more expensive.",
          "It ensures only physical attacks are blocked.",
          "It slows down or stops attackers through redundancy.",
          "It replaces the need for passwords.",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "Which analogy best describes Defence-in-Depth?",
        options: [
          "Locking your phone with facial recognition only.",
          "Keeping data in a single open file.",
          "Having a single password to guard a database.",
          "Locking the drawer, room, apartment, and building gate with cameras.",
        ],
        answerIndex: 3,
      },
      {
        id: 4,
        question: "Why is relying on just one layer of defense risky?",
        options: [
          "It slows down system performance.",
          "Attackers can exploit the single point of failure.",
          "It is too difficult for users to remember.",
          "Multi-factor authentication becomes impossible.",
        ],
        answerIndex: 1,
      },
    ],
    "ISO/IEC 19249": [
      {
        id: 1,
        question:
          "Which architectural principle ensures that each set of related components is isolated into a controlled group?",
        options: ["Encapsulation", "Domain Separation", "Virtualization", "Layering"],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "What does layering help enforce by dividing a system into abstract levels?",
        options: [
          "Simplified user login",
          "Security policies and system validation",
          "Direct hardware access",
          "Increased storage capacity",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question:
          "Which principle is illustrated by a clock object offering an increment() method instead of exposing a seconds variable?",
        options: ["Encapsulation", "Layering", "Redundancy", "Virtualization"],
        answerIndex: 0,
      },
      {
        id: 4,
        question: "RAID 5 and dual power supplies best demonstrate which principle?",
        options: ["Layering", "Domain Separation", "Encapsulation", "Redundancy"],
        answerIndex: 3,
      },
      {
        id: 5,
        question:
          "Which principle improves security boundaries and allows detonation of malware in a safe environment?",
        options: ["Encapsulation", "Layering", "Virtualization", "Redundancy"],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "Which design principle limits users to only the permissions they need to perform their job?",
        options: [
          "Attack Surface Minimisation",
          "Preparing for Errors",
          "Centralized General Security Services",
          "Least Privilege",
        ],
        answerIndex: 3,
      },
      {
        id: 7,
        question: "Which principle focuses on turning off unused services to reduce risk?",
        options: ["Attack Surface Minimisation", "Centralized Parameter Validation", "Layering", "Redundancy"],
        answerIndex: 0,
      },
      {
        id: 8,
        question: "What principle involves organizing input checking into a single library or service?",
        options: ["Centralized Parameter Validation", "Encapsulation", "Layering", "Least Privilege"],
        answerIndex: 0,
      },
      {
        id: 9,
        question:
          "Which design principle promotes managing all authentication and related functions through one dedicated service?",
        options: [
          "Least Privilege",
          "Attack Surface Minimisation",
          "Centralized General Security Services",
          "Encapsulation",
        ],
        answerIndex: 2,
      },
      {
        id: 10,
        question: "Which principle suggests designing systems to fail safely and not reveal sensitive info in errors?",
        options: ["Redundancy", "Preparing for Error and Exception Handling", "Encapsulation", "Domain Separation"],
        answerIndex: 1,
      },
    ],
    "Zero Trust versus Trust but Verify": [
      {
        id: 1,
        question: "What does 'Trust but Verify' encourage in terms of system behavior?",
        options: [
          "Trust everything without logging",
          "Verify only if issues arise",
          "Trust systems but also set up verification through logs or tools",
          "Trust internal networks only",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What principle views trust itself as a vulnerability?",
        options: ["Defense-in-Depth", "Zero Trust", "Trust but Verify", "Least Privilege"],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "In a Zero Trust model, how is access to resources granted?",
        options: [
          "Based on ownership of a company device",
          "After a user logs in for the first time",
          "Based on internal IP address only",
          "Only after authentication and authorization checks",
        ],
        answerIndex: 3,
      },
      {
        id: 4,
        question: "Which of the following is a common implementation of Zero Trust?",
        options: ["Load balancing", "Virtual Machines", "Microsegmentation", "Firewall logging"],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "Why is 'Trust but Verify' sometimes impractical to fully implement?",
        options: [
          "Logs are illegal to collect",
          "It makes users distrust the system",
          "Verifying everything manually is not scalable",
          "It disables automation",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question:
          "Which security model assumes that every user or device could be an adversary until proven otherwise?",
        options: ["Trust but Verify", "Zero Trust", "Defense-in-Depth", "Integrity-first Access"],
        answerIndex: 1,
      },
    ],
    "Threat Vs Risk": [
      {
        id: 1,
        question: "In information security, what is a vulnerability?",
        options: [
          "A confirmed attack on a system",
          "A potential danger to the business",
          "A weakness that can be exploited",
          "The risk of losing data",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "How is a threat best described?",
        options: [
          "A tool used to test firewalls",
          "The cost of fixing a bug",
          "The potential danger associated with a vulnerability",
          "An unused feature in the system",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "What is risk concerned with?",
        options: [
          "How fast the system runs",
          "Whether a backup exists",
          "The likelihood and impact of a threat exploiting a vulnerability",
          "How many users are on a network",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question:
          "If a database system has a known vulnerability and exploit code is released, what does that represent?",
        options: [
          "A potential configuration issue",
          "A theoretical flaw",
          "A confirmed risk",
          "A real threat to the system",
        ],
        answerIndex: 3,
      },
      {
        id: 5,
        question: "In the glass showroom analogy, what is the glass considered?",
        options: ["A threat", "A risk", "A vulnerability", "A firewall"],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "Which of the following best explains 'risk' in a business context?",
        options: [
          "The number of viruses detected by antivirus",
          "The weakness found in code",
          "The chance and consequence of an attack happening",
          "The estimated cost of updating a database",
        ],
        answerIndex: 2,
      },
    ],
  },
  "Governance and Regulation": {
    "Why is it important?": [
      {
        id: 1,
        question: "What is the main goal of governance in cybersecurity?",
        options: [
          "To sell cybersecurity software",
          "To manage and direct an organisation to meet objectives and comply with laws",
          "To increase marketing visibility",
          "To build new hardware devices",
        ],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "What is regulation in the context of cybersecurity?",
        options: [
          "A suggestion from a company",
          "An optional internal policy",
          "A law or rule enforced by a governing body",
          "An employee handbook",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "Who is responsible for information security governance in an organisation?",
        options: ["The interns", "Middle management", "Top-tier management", "External consultants only"],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "Which of the following is NOT a core process of information security governance?",
        options: ["Strategy", "Policies and procedures", "Performance measurement", "Social media marketing"],
        answerIndex: 3,
      },
      {
        id: 5,
        question: "Why is information security regulation important?",
        options: [
          "To increase social media followers",
          "To ensure legal compliance and protect sensitive data",
          "To develop new mobile apps",
          "To avoid company meetings",
        ],
        answerIndex: 1,
      },
      {
        id: 6,
        question: "Which regulation is focused on EU citizen data privacy?",
        options: ["HIPAA", "GLBA", "PCI-DSS", "GDPR"],
        answerIndex: 3,
      },
      {
        id: 7,
        question: "What benefit does strong security governance provide?",
        options: [
          "More vacation days",
          "Reduced IT spending only",
          "Competitive advantage and informed decision-making",
          "Higher taxes",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "What is the purpose of compliance in information security?",
        options: [
          "To delay audits",
          "To ensure adherence to laws and standards",
          "To restrict employee internet usage",
          "To replace governance responsibilities",
        ],
        answerIndex: 1,
      },
      {
        id: 9,
        question: "What does a strong security governance program help reduce?",
        options: ["Company profits", "The risk of security breaches", "Data storage space", "The need for encryption"],
        answerIndex: 1,
      },
      {
        id: 10,
        question: "How does effective governance increase stakeholder confidence?",
        options: [
          "By posting updates on social media",
          "By demonstrating security measures are taken seriously",
          "By hiding incidents",
          "By outsourcing all IT responsibilities",
        ],
        answerIndex: 1,
      },
      {
        id: 11,
        question: "Which of the following best describes the relationship between governance and regulation?",
        options: [
          "They are completely unrelated",
          "Governance creates regulations",
          "Governance is internal strategy, regulation is external legal framework",
          "Regulation depends on marketing strategies",
        ],
        answerIndex: 2,
      },
      {
        id: 12,
        question: "What is the role of risk management in information security governance?",
        options: [
          "To increase profits",
          "To assess and mitigate threats to information assets",
          "To reduce compliance standards",
          "To design new operating systems",
        ],
        answerIndex: 1,
      },
      {
        id: 13,
        question: "What does PCI-DSS regulate?",
        options: [
          "Health information",
          "Credit card and payment data",
          "Employee time tracking",
          "Public record databases",
        ],
        answerIndex: 1,
      },
    ],
    "Information Security Frameworks": [
      {
        id: 1,
        question: "What is the primary purpose of an information security framework in an organization?",
        options: [
          "To create marketing campaigns",
          "To manage payroll operations",
          "To outline and govern how security is implemented and managed",
          "To monitor employee productivity",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "Which of the following documents is considered non-mandatory and provides best practices?",
        options: ["Policies", "Standards", "Guidelines", "Baselines"],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "What does a baseline represent in an information security framework?",
        options: [
          "The maximum security limit an organization can handle",
          "A set of minimum security standards that must be met",
          "A policy that defines user access control",
          "A checklist used only during audits",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "What is the first step in developing a governance document like a policy or standard?",
        options: ["Draft the document", "Identify the scope and purpose", "Get final approval", "Train all employees"],
        answerIndex: 1,
      },
      {
        id: 5,
        question: "Why is it important to periodically review and update governance documents?",
        options: [
          "To ensure alignment with the CEO's vision",
          "To comply with tax filing requirements",
          "To maintain relevance and respond to new threats",
          "To reduce employee workload",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "In a password policy, which of the following is NOT typically included?",
        options: [
          "Minimum password length",
          "Color of user interface",
          "Password complexity rules",
          "Expiration requirements",
        ],
        answerIndex: 1,
      },
      {
        id: 7,
        question:
          "What is the purpose of including training and awareness programs when implementing a governance document?",
        options: [
          "To entertain employees",
          "To ensure employees understand and comply with the document",
          "To delay the rollout of the policy",
          "To reduce system memory usage",
        ],
        answerIndex: 1,
      },
      {
        id: 8,
        question: "What should be defined first when creating an incident response procedure?",
        options: [
          "Employee promotions",
          "Password change policy",
          "Incident types such as data breaches or malware infections",
          "Public relations strategy",
        ],
        answerIndex: 2,
      },
    ],
    "Governance Risk and Compliance (GRC)": [
      {
        id: 1,
        question: "What is the main purpose of the Governance Risk and Compliance (GRC) framework?",
        options: [
          "To eliminate all cybersecurity threats",
          "To reduce employee turnover",
          "To align governance, risk management, and compliance with organizational goals",
          "To replace traditional IT departments",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What is the focus of the 'Risk Management' component of GRC?",
        options: [
          "Approving all company budgets",
          "Identifying, assessing, and managing organizational risks",
          "Recruiting new staff for compliance",
          "Writing all software code internally",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "Which of the following is a key task in the 'Compliance' component of GRC?",
        options: [
          "Launching marketing campaigns",
          "Developing software features",
          "Ensuring activities meet legal and regulatory requirements",
          "Hiring IT contractors",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "In a financial organization, which would fall under governance activities?",
        options: [
          "Installing antivirus software",
          "Nominating executives and drafting financial policies",
          "Blocking phishing emails",
          "Resetting user passwords",
        ],
        answerIndex: 1,
      },
      {
        id: 5,
        question: "Which of the following is an example of a technical control in GRC?",
        options: [
          "Employee welcome kits",
          "Intrusion Detection System (IDS)",
          "Security committee meeting minutes",
          "Corporate retreat schedules",
        ],
        answerIndex: 1,
      },
      {
        id: 6,
        question: "What is the first step in developing a GRC program?",
        options: [
          "Hire a cybersecurity consultant",
          "Define the scope and objectives",
          "Purchase antivirus software",
          "Write a password policy",
        ],
        answerIndex: 1,
      },
      {
        id: 7,
        question: "What is the purpose of monitoring and measuring a GRC program?",
        options: [
          "To reduce software development time",
          "To determine employee salaries",
          "To evaluate effectiveness and improve the program",
          "To count the number of login attempts",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "What might a post-incident analysis help with in a GRC program?",
        options: [
          "Hiring more developers",
          "Designing the company logo",
          "Improving the GRC framework and preventing future incidents",
          "Auditing physical office space",
        ],
        answerIndex: 2,
      },
    ],
    "Privacy and Data Protection": [
      {
        id: 1,
        question: "What does GDPR primarily aim to protect?",
        options: [
          "User login credentials",
          "Credit card PINs",
          "Personal data of individuals",
          "Company financial reports",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "Which of the following is considered personal data under GDPR?",
        options: [
          "Company revenue reports",
          "Anonymous survey results",
          "Any data that can identify a person directly or indirectly",
          "Encrypted backup files",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "Which business entities must comply with GDPR?",
        options: [
          "Only companies based in the EU",
          "All businesses worldwide handling EU residents' data",
          "Only financial institutions",
          "Only online marketplaces",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "What is the maximum fine for a Tier 1 GDPR violation?",
        options: [
          "\u20ac10 million or 2% of annual revenue",
          "\u20ac15 million or 3% of annual revenue",
          "\u20ac20 million or 4% of annual revenue",
          "\u20ac5 million or 1% of annual revenue",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "What is a key requirement of PCI DSS?",
        options: [
          "Open-source transaction software",
          "Limiting physical access to office spaces",
          "Restricting and monitoring access to cardholder data",
          "Using blockchain for payments",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "Which companies created PCI DSS?",
        options: ["Visa, Mastercard, and American Express", "Amazon and PayPal", "EU regulators", "The World Bank"],
        answerIndex: 0,
      },
      {
        id: 7,
        question: "Which of the following practices is encouraged under PCI DSS?",
        options: [
          "Allowing guest checkout without verification",
          "Using default admin credentials",
          "Encrypting cardholder data and using firewalls",
          "Sharing data across payment platforms",
        ],
        answerIndex: 2,
      },
    ],
    "NIST Special Publications": [
      {
        id: 1,
        question: "What is the main purpose of NIST 800-53?",
        options: [
          "To guide organizations in setting up cloud storage systems.",
          "To provide security and privacy controls for protecting information systems.",
          "To create encryption algorithms for financial data.",
          "To assess hardware integrity in government facilities.",
        ],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "Which of the following is a Strategic Control under NIST 800-53?",
        options: [
          "Contingency Planning (CP)",
          "Identification and Authentication (IA)",
          "Personnel Security (PS)",
          "Planning (PL)",
        ],
        answerIndex: 3,
      },
      {
        id: 3,
        question: "Which control family under NIST 800-53 includes 'System Inventory' and 'Risk Management Strategy'?",
        options: ["Administrative Control", "Program Management", "Technical Controls", "Strategic Controls"],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "What is the focus of NIST 800-63B?",
        options: [
          "Cloud infrastructure development",
          "Cyber incident reporting",
          "Digital identity practices",
          "Firewall configuration",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "Which of the following is considered a best practice for NIST 800-53 compliance?",
        options: [
          "Ignore user feedback during audits.",
          "Focus only on password updates.",
          "Create a governance structure and allocate duties.",
          "Manually process all sensitive data.",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "Which is an example of a Physical Control in the NIST 800-53 family?",
        options: [
          "System and Communications Protection (SC)",
          "Access Control (AC)",
          "Personnel Security (PS)",
          "Program Management (PM)",
        ],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "What does the 'Manage' step in the NIST 800-53 compliance best practices emphasize?",
        options: [
          "Implementing multi-factor authentication",
          "Handling user requests",
          "Controlling implementation and maintenance procedures",
          "Encrypting stored data",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "Which of the following is NOT a subcontrol of Program Management?",
        options: [
          "Measures of performance",
          "Automated threat sharing",
          "Data governance body",
          "Antivirus software configuration",
        ],
        answerIndex: 3,
      },
    ],
    "Information Security Management and Compliance": [
      {
        id: 1,
        question: "What is the primary purpose of ISO/IEC 27001?",
        options: [
          "To monitor firewall logs only",
          "To plan, develop, run, and update an information security management system (ISMS)",
          "To assess GDPR compliance",
          "To certify software licenses",
        ],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "Which of the following is NOT a core component of ISO 27001?",
        options: ["Scope definition", "Internal audit", "Security patching tools", "Statement of Applicability (SoA)"],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "What is the main purpose of SOC 2 audits?",
        options: [
          "To improve sales performance",
          "To ensure third-party service providers store and process data securely",
          "To optimize cloud pricing",
          "To automate patching processes",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "Which of the following is NOT one of the SOC 2 trust principles?",
        options: ["Availability", "Security", "Scalability", "Confidentiality"],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "During a SOC 2 audit, which step comes immediately after choosing a suitable auditor?",
        options: ["Plan the audit", "Receive the audit report", "Prepare for the audit", "Determine the scope"],
        answerIndex: 0,
      },
      {
        id: 6,
        question: "Which component of ISO 27001 involves evaluating the effectiveness of ISMS regularly?",
        options: ["Management review", "Risk treatment", "Policy enforcement", "Encryption planning"],
        answerIndex: 0,
      },
      {
        id: 7,
        question: "What does the Statement of Applicability (SoA) specify in ISO 27001?",
        options: [
          "The audit timeline and budget",
          "Which controls are applicable from the standard",
          "Third-party compliance checklists",
          "The user\u2019s data storage quota",
        ],
        answerIndex: 1,
      },
      {
        id: 8,
        question: "Which benefit is commonly associated with ISO 27001 implementation?",
        options: [
          "Increased power consumption",
          "Competitive edge due to recognized standard",
          "Delayed customer feedback",
          "Shorter work hours",
        ],
        answerIndex: 1,
      },
      {
        id: 9,
        question: "What is the purpose of conducting a risk assessment in ISO 27001?",
        options: [
          "To track staff performance",
          "To identify and evaluate risks to confidentiality, integrity, and availability",
          "To design company branding",
          "To verify financial statements",
        ],
        answerIndex: 1,
      },
      {
        id: 10,
        question: "Which control area does SOC 2 focus on for protecting personal information?",
        options: ["Marketing effectiveness", "Privacy", "Graphics rendering", "Data formatting"],
        answerIndex: 1,
      },
      {
        id: 11,
        question: "Why is regular monitoring important in SOC 2?",
        options: [
          "To entertain clients",
          "To measure workplace satisfaction",
          "To safeguard systems and data",
          "To build new products",
        ],
        answerIndex: 2,
      },
      {
        id: 12,
        question: "What is the final step in a SOC 2 audit process?",
        options: ["Prepare for the audit", "Receive the audit report", "Plan the audit", "Determine the scope"],
        answerIndex: 1,
      },
    ],
  },
  "Cyber Kill Chain": {
    Reconnaissance: [
      {
        id: 1,
        question: "What does the reconnaissance phase focus on?",
        options: [
          "Developing malware",
          "Delivering a payload",
          "Gathering information on the target",
          "Establishing command and control",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "Which tool is commonly used for email harvesting?",
        options: ["Metasploit", "theHarvester", "Nmap", "Shodan"],
        answerIndex: 1,
      },
    ],
    Weaponization: [
      {
        id: 1,
        question: "What is typically combined during the weaponization phase?",
        options: ["Exploit and payload", "Email and browser", "Firewall and antivirus", "Scanner and sniffer"],
        answerIndex: 0,
      },
      {
        id: 2,
        question: "Which type of software is used to damage or gain unauthorized access?",
        options: ["Patch", "Malware", "Firewall", "Proxy"],
        answerIndex: 1,
      },
    ],
    Delivery: [
      {
        id: 1,
        question: "Which method is used in the delivery phase to transmit the malware?",
        options: ["DNS sinkhole", "Zero trust policy", "Phishing email", "Access control list"],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What type of attack tricks users into visiting a compromised site?",
        options: ["Drive-by download", "Social engineering", "SQL Injection", "Watering hole"],
        answerIndex: 3,
      },
    ],
    Exploitation: [
      {
        id: 1,
        question: "What happens during the exploitation phase?",
        options: [
          "User training is conducted",
          "The malware is deleted",
          "A vulnerability is used to gain access",
          "Data is encrypted for backup",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "Which term describes an unknown vulnerability with no patch?",
        options: ["Exploit kit", "Backdoor", "Zero-day exploit", "Lateral movement"],
        answerIndex: 2,
      },
    ],
    Installation: [
      {
        id: 1,
        question: "What does an attacker install during the installation phase?",
        options: ["Firewall rules", "Security updates", "Persistent backdoor", "Certificate authority"],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What is the purpose of timestomping?",
        options: [
          "To update software",
          "To detect intrusions",
          "To modify file timestamps to avoid detection",
          "To increase performance",
        ],
        answerIndex: 2,
      },
    ],
    "Command & Control": [
      {
        id: 1,
        question: "What does C2 stand for in the cyber kill chain?",
        options: ["Click and Control", "Connect and Copy", "Command and Control", "Collect and Communicate"],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "Which protocol is commonly used for C2 traffic?",
        options: ["SMTP", "FTP", "HTTP/HTTPS", "NTP"],
        answerIndex: 2,
      },
    ],
    "Actions on Objectives (Exfiltration)": [
      {
        id: 1,
        question: "What is a typical goal in the final stage of the cyber kill chain?",
        options: ["Run backups", "Reboot systems", "Exfiltrate data", "Update software"],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "Which of the following is an attacker action in the last phase?",
        options: ["Privilege escalation", "System audit", "Running diagnostics", "Installing updates"],
        answerIndex: 0,
      },
    ],
  },
  "Common Attacts": {
    "Social Engineering": [
      {
        id: 1,
        question: "What is the primary focus of social engineering attacks?",
        options: [
          "Exploiting hardware vulnerabilities",
          "Exploiting human behavior",
          "Targeting software updates",
          "Attacking Wi-Fi networks",
        ],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "Which of the following is NOT a typical method used in social engineering?",
        options: ["Brute-force password cracking", "Phishing emails", "USB drop attacks", "Pretexting over the phone"],
        answerIndex: 0,
      },
      {
        id: 3,
        question: "What makes social engineering attacks especially dangerous?",
        options: [
          "They only affect outdated systems",
          "They are easily detected",
          "They can escalate through multiple stages",
          "They rely on expensive tools",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "What tactic is commonly used in USB drop attacks?",
        options: [
          "Installing antivirus software",
          "Sending suspicious emails",
          "Leaving malicious USB devices in public",
          "Changing browser settings",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "Why is it often difficult to recognize a social engineering attack?",
        options: [
          "They are always delivered via email",
          "They involve advanced AI algorithms",
          "They mimic trusted sources and appear legitimate",
          "They only affect mobile devices",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "What is one key way to protect against social engineering?",
        options: [
          "Disable your antivirus software",
          "Use a shared password manager",
          "Avoid using email for communication",
          "Enable multi-factor authentication and stay cautious",
        ],
        answerIndex: 3,
      },
      {
        id: 7,
        question: "What should you be suspicious of in a phone call from a company representative?",
        options: [
          "A polite tone",
          "Request for feedback",
          "Request for your security answers or login info",
          "Mention of your last purchase",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "Which of the following best describes the ‘snowball effect’ in social engineering?",
        options: [
          "Sending phishing emails in waves",
          "Exploiting vulnerabilities in system updates",
          "Gaining small bits of information to gain larger access",
          "Only targeting financial institutions",
        ],
        answerIndex: 2,
      },
    ],

    "Social Engineering (Phishing)": [
      {
        id: 1,
        question: "What is the primary goal of phishing?",
        options: [
          "To entertain users",
          "To provide software updates",
          "To trick individuals into revealing personal or sensitive information",
          "To advertise antivirus software",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What makes spearphishing more dangerous than generic phishing?",
        options: [
          "It targets everyone on social media",
          "It uses humor to lure victims",
          "It is highly targeted to a specific individual or organization",
          "It is limited to email only",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "Which of the following is an example of whaling?",
        options: [
          "Targeting HR interns for credentials",
          "Sending malware to technical support",
          "Impersonating the CEO to extract financial data",
          "Sending coupons through email blasts",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "What is a common sign of a phishing email?",
        options: [
          "Sent from a verified address",
          "Contains poor grammar and urgent language",
          "Attached images only",
          "It’s addressed to a close friend",
        ],
        answerIndex: 1,
      },
      {
        id: 5,
        question: "Which delivery method is used in smishing?",
        options: ["Phone call", "Social media ad", "Text message", "Email"],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "What is vishing?",
        options: [
          "Using malware in attachments",
          "Voice phishing done via phone calls",
          "Phishing using visual cues on websites",
          "Using virtual machines to phish users",
        ],
        answerIndex: 1,
      },
      {
        id: 7,
        question: "What should you do if you receive a suspicious email asking for your login?",
        options: [
          "Reply and ask for verification",
          "Click the link to see where it goes",
          "Ignore it and report to IT/security",
          "Forward it to a friend",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "Why are phishing attacks still so effective today?",
        options: [
          "They are untraceable",
          "They exploit human emotions like fear and urgency",
          "They require no internet connection",
          "They always target outdated systems",
        ],
        answerIndex: 1,
      },
      {
        id: 9,
        question: "Which of the following is a common phishing tactic?",
        options: [
          "Using VPN tunneling",
          "Pretending to be a trusted contact",
          "Implementing security updates",
          "Scanning systems for open ports",
        ],
        answerIndex: 1,
      },
      {
        id: 10,
        question: "What is a landing page in a phishing attack?",
        options: [
          "A government report",
          "A cloned site used to steal credentials",
          "A browser error page",
          "A VPN login portal",
        ],
        answerIndex: 1,
      },
    ],
    "Malware and Ransomware": [
      {
        id: 1,
        question: "What is malware?",
        options: [
          "A legitimate software update",
          "A malicious software intended to harm or exploit systems",
          "A tool for system optimization",
          "A secure communication protocol",
        ],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "What is the main goal of ransomware?",
        options: [
          "To secure private user data",
          "To boost system performance",
          "To encrypt user data and demand a ransom for access",
          "To track marketing campaigns",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "Which of the following is NOT a form of malware?",
        options: ["Virus", "Trojan horse", "Firewall", "Worm"],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "What type of malware disguises itself as legitimate software?",
        options: ["Spyware", "Worm", "Trojan horse", "Rootkit"],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "How is ransomware typically delivered?",
        options: [
          "Through software updates",
          "Via phishing emails or malicious attachments",
          "From antivirus software",
          "Via a secured Wi-Fi network",
        ],
        answerIndex: 1,
      },
      {
        id: 6,
        question: "What action does spyware perform on an infected system?",
        options: ["Prevents booting", "Encrypts files", "Monitors and records user activity", "Speeds up processing"],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "What is a worm capable of doing without user interaction?",
        options: [
          "Creating backups",
          "Self-replicating and spreading across networks",
          "Decrypting files",
          "Blocking browser content",
        ],
        answerIndex: 1,
      },
      {
        id: 8,
        question: "Which best describes a rootkit?",
        options: [
          "A firewall rule set",
          "A virus removal tool",
          "A hidden program granting persistent admin-level access",
          "A password reset application",
        ],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "What should you do if your device is infected with ransomware?",
        options: [
          "Pay the ransom immediately",
          "Shut down the system to stop the attack",
          "Disconnect from the network and contact IT/security",
          "Try guessing the decryption key",
        ],
        answerIndex: 2,
      },
      {
        id: 10,
        question: "What is one common characteristic of ransomware notes?",
        options: [
          "They offer free antivirus tools",
          "They include detailed information about the company",
          "They demand payment in cryptocurrency",
          "They are always written in legal jargon",
        ],
        answerIndex: 2,
      },
    ],
    "Passwords and Authentication": [
      {
        id: 1,
        question: "Why is using the same password across multiple accounts dangerous?",
        options: [
          "It makes it easier to remember",
          "It helps password managers function better",
          "If one gets exposed, all accounts are vulnerable",
          "It improves login speed",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What is currently considered most important in a strong password?",
        options: [
          "The number of symbols used",
          "Password length",
          "Use of capital letters",
          "Including a personal date",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "What is a characteristic of a weak password?",
        options: [
          "Completely random characters",
          "A long passphrase",
          "Name and year combination",
          "A quote from a book",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "Which of the following best describes credential stuffing?",
        options: [
          "Sending phishing emails to users",
          "Guessing passwords using AI",
          "Using leaked username and password pairs on multiple sites",
          "Tricking users into reusing passwords",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "What tool allows users to check if their email appeared in a data breach?",
        options: ["Shodan", "Hashcat", "Have I Been Pwned?", "LastPass"],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "Why are random, long passwords preferred?",
        options: [
          "They’re easier to type",
          "They cannot be guessed using social engineering",
          "They’re easier to memorize",
          "They require fewer updates",
        ],
        answerIndex: 1,
      },
      {
        id: 7,
        question: "What is a hybrid password attack?",
        options: [
          "An attack using only dictionary words",
          "An attack combining dictionary words with mutations",
          "A brute-force attack using only lowercase letters",
          "An attack based on email headers",
        ],
        answerIndex: 1,
      },
      {
        id: 8,
        question: "What is the danger of storing a password visibly on a whiteboard?",
        options: [
          "It might get erased",
          "It’s hard to read from a distance",
          "It can be seen via cameras or visitors",
          "It can be copied incorrectly",
        ],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "Which of the following is true about exposed passwords?",
        options: [
          "They are encrypted and always secure",
          "They can be leaked and used in credential stuffing attacks",
          "They are stored in a user’s local system only",
          "They are irrelevant if changed monthly",
        ],
        answerIndex: 1,
      },
      {
        id: 10,
        question: "What does a password manager help you do?",
        options: [
          "Guess other people's passwords",
          "Store passwords securely and generate strong ones",
          "Monitor server logs",
          "Reset passwords automatically every hour",
        ],
        answerIndex: 1,
      },
    ],
    "Multi-Factor Authentication and Password Managers": [
      {
        id: 1,
        question: "What does Multi-Factor Authentication (MFA) require?",
        options: [
          "Only a strong password",
          "Biometric verification only",
          "More than one type of authentication factor",
          "Changing passwords monthly",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What is TOTP in the context of MFA?",
        options: [
          "Temporary Online Token Policy",
          "Time-based One Time Password",
          "Trusted Offline Token Protocol",
          "Two-factor Offline Token Password",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "Why is SMS-based TOTP considered less secure?",
        options: [
          "Because SMS cannot be read on most devices",
          "Because attackers can intercept text messages",
          "Because it requires Wi-Fi",
          "Because it is encrypted end-to-end",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "What advantage do authenticator apps like Authy or Google Authenticator offer?",
        options: [
          "They rely on SMS for easier access",
          "They generate TOTP codes without internet access",
          "They require no setup",
          "They use facial recognition only",
        ],
        answerIndex: 1,
      },
      {
        id: 5,
        question: "What is a master password used for in password managers?",
        options: [
          "To reset all saved passwords",
          "To access the encrypted vault of saved passwords",
          "To login to websites automatically",
          "To track biometric data",
        ],
        answerIndex: 1,
      },
      {
        id: 6,
        question: "Which of the following is NOT a feature commonly offered by password managers?",
        options: [
          "Secure password generation",
          "Auto-filling login fields",
          "Phishing detection",
          "Storing other types of data like files",
        ],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "What is a key benefit of using a password manager?",
        options: [
          "You can reuse the same password safely",
          "It allows you to bypass login pages",
          "You only need to remember one strong master password",
          "It replaces the need for two-factor authentication",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "Which of the following is a recommended best practice when using password managers?",
        options: [
          "Use the same password manager account across multiple people",
          "Write your master password down near your computer",
          "Choose a strong master password or use biometric login",
          "Avoid storing passwords for financial accounts",
        ],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "What is a potential downside of password managers?",
        options: [
          "They make passwords too complex",
          "All security depends on the strength of the master password",
          "They slow down your browser",
          "They can’t be accessed from mobile devices",
        ],
        answerIndex: 1,
      },
      {
        id: 10,
        question: "Which of the following is an example of a password manager?",
        options: ["Google Drive", "Bitwarden", "Spotify", "Cloudflare"],
        answerIndex: 1,
      },
    ],
    Backups: [
      {
        id: 1,
        question: "Why are backups considered one of the most important defensive measures?",
        options: [
          "They prevent hacking attempts entirely",
          "They help automate login processes",
          "They ensure data can be recovered even after severe damage",
          "They eliminate the need for passwords",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What does the '3' in the 3,2,1 backup rule refer to?",
        options: [
          "Keep three backups on separate cloud services",
          "Store backups for at least three weeks",
          "Have three up-to-date copies of your data",
          "Back up your data every three days",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "What does the '2' in the 3,2,1 backup rule refer to?",
        options: [
          "Use two encryption tools for backup data",
          "Back up to two external hard drives",
          "Store data on at least two different types of storage media",
          "Create two accounts for backup storage",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "What does the '1' in the 3,2,1 backup rule refer to?",
        options: [
          "Keep one backup stored off-site",
          "Only keep one backup version at a time",
          "Make one backup per week",
          "Keep one password for all backup files",
        ],
        answerIndex: 0,
      },
      {
        id: 5,
        question: "Which of the following is an example of an off-site backup?",
        options: [
          "A USB drive plugged into your laptop",
          "A folder on your desktop",
          "A document saved on Google Drive",
          "A backup on your external monitor",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "Why is backup frequency important?",
        options: [
          "Frequent backups make your system faster",
          "Backups must match the rate of data changes to stay useful",
          "It’s a legal requirement to back up daily",
          "Old backups automatically delete themselves",
        ],
        answerIndex: 1,
      },
      {
        id: 7,
        question: "How might a home user’s backup routine differ from a large corporation’s?",
        options: [
          "They don’t need to back up at all",
          "They may back up only once a month",
          "They may back up once or twice a week instead of multiple times a day",
          "They only use USB drives for backup",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "Which of the following would violate the 3,2,1 rule?",
        options: [
          "Keeping one backup on an external hard drive and another on the cloud",
          "Saving three backups on the same USB stick",
          "Using both a USB and a cloud service for backup",
          "Keeping one original copy and two backups on different media",
        ],
        answerIndex: 1,
      },
    ],
    "Updates and Patches": [
      {
        id: 1,
        question: "What is the primary reason for applying software updates?",
        options: [
          "To redesign the user interface",
          "To increase RAM usage",
          "To fix vulnerabilities and patch security issues",
          "To uninstall unused features",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What is the term used to describe a software update that addresses security flaws?",
        options: ["Extension", "Patch", "Plugin", "Addon"],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "Why are operating system updates particularly important?",
        options: [
          "They allow you to install more games",
          "They protect against critical vulnerabilities",
          "They make your screen brighter",
          "They are only needed for new computers",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "What does EOL (End Of Life) mean in the context of software?",
        options: [
          "The software becomes open-source",
          "The software stops receiving support and updates",
          "The software runs faster",
          "The software becomes free to use",
        ],
        answerIndex: 1,
      },
      {
        id: 5,
        question: "What should you do if a piece of software has reached EOL but cannot be replaced?",
        options: [
          "Use it more frequently",
          "Run it without antivirus",
          "Segregate it from the rest of the network",
          "Install extra RAM",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "What is the purpose of antivirus signature updates?",
        options: [
          "To increase performance",
          "To identify new malware threats",
          "To access cloud backups",
          "To remove browser history",
        ],
        answerIndex: 1,
      },
      {
        id: 7,
        question: "What happens if antivirus software is not updated regularly?",
        options: [
          "It will improve performance",
          "It may fail to detect newly discovered malware",
          "It will remove all existing threats",
          "It will be able to block all traffic",
        ],
        answerIndex: 1,
      },
      {
        id: 8,
        question: "Why is it important to allow antivirus software to update itself?",
        options: [
          "It increases system startup time",
          "It enables screen recording",
          "It ensures protection against the latest known malware",
          "It boosts internet speed",
        ],
        answerIndex: 2,
      },
    ],
  },
  "What is Networking?": {
    "What is Networking?": [
      {
        id: 1,
        question: "What is the core idea behind networking?",
        options: [
          "Using the internet to browse websites",
          "Connecting devices to power sources",
          "Connecting things together to access and share resources",
          "Communicating only through email",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "Which of the following is NOT an example of a network in daily life?",
        options: [
          "A city's public transportation system",
          "A national power grid",
          "A microwave oven",
          "Postal systems for mail delivery",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "What is a computing network made up of?",
        options: [
          "Only smartphones",
          "Billions of isolated applications",
          "Connected technological devices like laptops, phones, and cameras",
          "Data stored on USB drives",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "Why is networking important in cybersecurity?",
        options: [
          "Because computers only function in a network",
          "Because it's needed for coding websites",
          "Because many cybersecurity threats exploit networks",
          "Because it helps design operating systems",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "In the example diagram, what have Alice, Bob, and Jim done?",
        options: [
          "Created strong passwords",
          "Formed a computing network",
          "Developed an operating system",
          "Designed a user interface",
        ],
        answerIndex: 1,
      },
    ],
    "What is the Internet?": [
      {
        id: 1,
        question: "What is the Internet primarily composed of?",
        options: [
          "A single massive computer",
          "A giant cable connecting all users",
          "Many small networks connected together",
          "A central government database",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "In the example with Alice, Zayn, and Toby, why did Alice act as a messenger?",
        options: [
          "She was the fastest typer",
          "She had the most storage",
          "She was the only one who spoke both languages",
          "She was closest to the Wi-Fi router",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "What is a public network in the context of the Internet?",
        options: [
          "A network only accessible to local devices",
          "A network isolated from the Internet",
          "A network used by one person only",
          "A network that connects private networks to form the Internet",
        ],
        answerIndex: 3,
      },
      {
        id: 4,
        question: "When was the Internet (as we know it) invented?",
        options: ["1960", "1975", "1989", "2001"],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "Who created the World Wide Web?",
        options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Alan Turing"],
        answerIndex: 1,
      },
      {
        id: 6,
        question: "What did the ARPANET project contribute to?",
        options: [
          "The invention of mobile phones",
          "The first documented computer network",
          "The first video game network",
          "The Bluetooth standard",
        ],
        answerIndex: 1,
      },
    ],
    "Identifying Devices on a Network": [
      {
        id: 1,
        question: "What are the two main identifiers for devices on a network?",
        options: [
          "Username and password",
          "IP address and MAC address",
          "Hostname and fingerprint",
          "Email and password",
        ],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "What does an IP address help identify?",
        options: [
          "The device's MAC address",
          "The device's model and make",
          "A device on a network for a period of time",
          "The physical location of a device",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "What makes up an IP address?",
        options: [
          "Sixteen digits in hexadecimal format",
          "Four octets of numbers ranging from 0–255",
          "Binary numbers only",
          "Two hexadecimal pairs",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "What is the difference between a public and private IP address?",
        options: [
          "Public IP addresses are used in offices; private ones at home",
          "Private IPs identify devices on the internet; public IPs identify devices within a local network",
          "Public IPs identify devices on the internet; private IPs identify devices within a local network",
          "There is no difference",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "Which of the following statements about MAC addresses is true?",
        options: [
          "They can be changed easily by anyone",
          "They are temporary device identifiers",
          "They are unique hardware addresses set at the factory",
          "They are longer than IPv6 addresses",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "Why might a MAC address be spoofed?",
        options: [
          "To access a restricted network pretending to be a trusted device",
          "To speed up internet connections",
          "To improve Wi-Fi signal strength",
          "To save battery life on the device",
        ],
        answerIndex: 0,
      },
      {
        id: 7,
        question: "Which protocol version supports more IP addresses?",
        options: ["IPv4", "MAC", "ARP", "IPv6"],
        answerIndex: 3,
      },
      {
        id: 8,
        question: "What does the first half of a MAC address typically represent?",
        options: [
          "The user’s ID",
          "The device’s country of manufacture",
          "The manufacturer of the network interface",
          "The local network address",
        ],
        answerIndex: 2,
      },
    ],
    "Ping (ICMP)": [
      {
        id: 1,
        question: "What protocol does the ping command use?",
        options: ["TCP", "UDP", "HTTP", "ICMP"],
        answerIndex: 3,
      },
      {
        id: 2,
        question: "What does a successful ping test indicate?",
        options: [
          "The device is running a web server",
          "There is an active connection and ICMP reply",
          "The target device is not on the same network",
          "The ping command failed",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "Which of the following is a valid reason to use the ping command?",
        options: [
          "To change your MAC address",
          "To test connectivity between devices",
          "To open a firewall port",
          "To trace the IP path of a website",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "What does the average time in a ping result represent?",
        options: [
          "The time taken to open a webpage",
          "The time difference between IP assignments",
          "The average round-trip time for ICMP packets",
          "The time to load DNS records",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "What is the format of a typical ping command?",
        options: ["ping -i address", "ping [IP address or domain]", "connect [IP address]", "ping port 80"],
        answerIndex: 1,
      },
    ],
  },

  "W3 CyberSecurity": {
    "Cyber Crime": [
      {
        id: 1,
        question: "Which of the following is considered a form of cyber crime?",
        options: ["Shoplifting", "Identity theft", "Speeding", "Breaking and entering"],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "Why is cyber crime on the rise?",
        options: [
          "It is easy to accomplish with low risk and high rewards",
          "Internet speed is faster",
          "Police are better trained",
          "Cryptocurrency is illegal",
        ],
        answerIndex: 0,
      },
      {
        id: 3,
        question: "What is a 'tumbler' in the context of cyber crime?",
        options: [
          "A hacker group",
          "A tool to clean malware",
          "A service to mix and obfuscate cryptocurrency transactions",
          "A social media site",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "Which of the following is NOT a typical cyber criminal mentioned?",
        options: [
          "State-sponsored groups",
          "Hacking groups demanding ransom",
          "Undercover journalists",
          "Teenagers hacking from home",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "What makes catching cyber criminals so difficult?",
        options: [
          "Cyber criminals always use public Wi-Fi",
          "They can easily remain anonymous and use systems in different countries",
          "They leave physical evidence behind",
          "They use their real identities online",
        ],
        answerIndex: 1,
      },
      {
        id: 6,
        question: "How do law enforcement agencies typically catch cyber criminals?",
        options: [
          "Through social media accounts",
          "By tracking cryptocurrency mining",
          "Often due to mistakes made by the attackers",
          "By scanning malware signatures",
        ],
        answerIndex: 2,
      },
    ],
    "Money Making Threats": [
      {
        id: 1,
        question: "What is the goal of a ransomware attack?",
        options: [
          "To gain administrator access to networks",
          "To spy on employees remotely",
          "To encrypt files and demand money for their release",
          "To delete all system data permanently",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What does a cryptocurrency miner do when installed by attackers?",
        options: [
          "Deletes system logs",
          "Uses the CPU to mine cryptocurrency for the attacker",
          "Backs up system data to the cloud",
          "Infects printers with malware",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "What does 'BEC' stand for in cybersecurity?",
        options: [
          "Backdoor Exploit Code",
          "Business Email Compromise",
          "Browser Extension Control",
          "Banking Encryption Circuit",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "Which of the following is NOT mentioned as a form of making money in cyber crime?",
        options: [
          "Hijacking online banking sessions",
          "Mining for precious metals",
          "Installing crypto miners on victim machines",
          "Selling sensitive business data",
        ],
        answerIndex: 1,
      },
      {
        id: 5,
        question: "How can bandwidth be misused by attackers for financial gain?",
        options: [
          "To install larger malware files",
          "To host gaming servers",
          "To launch DDOS attacks for extortion",
          "To download media content faster",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "What type of personal attack may involve coercion based on sensitive images or videos?",
        options: ["Credential stuffing", "Phishing", "Social extortion", "Ransomware"],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "Why do cyber criminals often succeed in extortion scams?",
        options: [
          "They are physically nearby",
          "They use strong passwords",
          "They manipulate victims into providing compromising material",
          "They offer discounts to businesses",
        ],
        answerIndex: 2,
      },
    ],
    "Dark Web": [
      {
        id: 1,
        question: "What is the Dark Web also commonly known as?",
        options: ["Private Cloud", "The Tor Network", "Virtual LAN", "Incognito Mode"],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "Which browser is commonly used to access the Dark Web?",
        options: ["Google Chrome", "Microsoft Edge", "Opera GX", "Tor Browser"],
        answerIndex: 3,
      },
      {
        id: 3,
        question: "What is a unique feature of Dark Web URLs?",
        options: ["They end with .org", "They end with .onion", "They require a VPN", "They only work on mobile"],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "What does the Tor Browser provide to its users?",
        options: [
          "Faster internet speeds",
          "Automatic ad-blocking",
          "Built-in VPN and malware protection",
          "Anonymity and encrypted traffic routing",
        ],
        answerIndex: 3,
      },
      {
        id: 5,
        question: "Which of the following is a legitimate site available on the Dark Web?",
        options: ["Instagram", "Facebook", "Snapchat", "Reddit"],
        answerIndex: 1,
      },
      {
        id: 6,
        question: "Why is the Dark Web attractive for criminal activity?",
        options: [
          "It offers better customer support",
          "It allows unlimited downloads",
          "It provides anonymity and encryption",
          "It’s accessible on mobile networks only",
        ],
        answerIndex: 2,
      },
    ],
  },
  "W3 Networking": {
   "Networking Basics": [
    {
      "id": 1,
      "question": "What does the OSI model help us understand in networking?",
      "options": ["Data storage systems", "User interface design", "The layers involved in computer communication", "Cyber crime investigation"],
      "answerIndex": 2
    },
    {
      "id": 2,
      "question": "Which OSI layer is responsible for physically transmitting data over a medium?",
      "options": ["Transport Layer", "Physical Layer", "Data Link Layer", "Network Layer"],
      "answerIndex": 1
    },
    {
      "id": 3,
      "question": "What protocol is commonly used at the Physical Layer?",
      "options": ["Ethernet Physical Layer", "TCP", "SSL", "IP"],
      "answerIndex": 0
    },
    {
      "id": 4,
      "question": "Which OSI layer handles MAC addressing and packet delivery between physical devices?",
      "options": ["Data Link Layer", "Session Layer", "Presentation Layer", "Transport Layer"],
      "answerIndex": 0
    },
    {
      "id": 5,
      "question": "Which protocol operates at the Data Link Layer for wireless communication?",
      "options": ["Wi-Fi", "UDP", "QUIC", "NetBIOS"],
      "answerIndex": 0
    },
    {
      "id": 6,
      "question": "What is the main purpose of the Network Layer?",
      "options": ["Routing packets", "Encrypting messages", "Managing sessions", "Compressing data"],
      "answerIndex": 0
    },
    {
      "id": 7,
      "question": "Which of these protocols is part of the Network Layer?",
      "options": ["IP", "SSL", "FTP", "SOCKS"],
      "answerIndex": 0
    },
    {
      "id": 8,
      "question": "Which OSI layer is responsible for choosing the packet path?",
      "options": ["Transport Layer", "Network Layer", "Application Layer", "Session Layer"],
      "answerIndex": 1
    },
    {
      "id": 9,
      "question": "Which protocol is commonly used for diagnostics at Layer 3?",
      "options": ["ICMP", "QUIC", "TLS", "Ethernet"],
      "answerIndex": 0
    },
    {
      "id": 10,
      "question": "What is the primary role of the Transport Layer?",
      "options": ["Packet switching", "Reliable delivery of data", "User authentication", "IP addressing"],
      "answerIndex": 1
    },
    {
      "id": 11,
      "question": "Which protocols operate at the Transport Layer?",
      "options": ["TCP and UDP", "HTTP and HTTPS", "IP and ICMP", "FTP and SNMP"],
      "answerIndex": 0
    },
    {
      "id": 12,
      "question": "Which transport layer protocol ensures reliable communication?",
      "options": ["TCP", "UDP", "ICMP", "IP"],
      "answerIndex": 0
    },
    {
      "id": 13,
      "question": "Which OSI layer is responsible for managing connections between applications?",
      "options": ["Transport", "Session", "Application", "Network"],
      "answerIndex": 1
    },
    {
      "id": 14,
      "question": "Which of the following is a Session Layer protocol?",
      "options": ["SOCKS", "QUIC", "SSL", "NDP"],
      "answerIndex": 0
    },
    {
      "id": 15,
      "question": "What does the Presentation Layer do?",
      "options": ["Routes data", "Encrypts and formats data", "Establishes sessions", "Handles physical signals"],
      "answerIndex": 1
    },
    {
      "id": 16,
      "question": "Which of these is NOT a Presentation Layer function?",
      "options": ["Encoding", "Encryption", "Compression", "Routing"],
      "answerIndex": 3
    },
    {
      "id": 17,
      "question": "Which OSI layer uses SSL and TLS?",
      "options": ["Transport", "Application", "Presentation", "Data Link"],
      "answerIndex": 2
    },
    {
      "id": 18,
      "question": "Which layer do most developers interact with directly?",
      "options": ["Network Layer", "Application Layer", "Session Layer", "Data Link Layer"],
      "answerIndex": 1
    },
    {
      "id": 19,
      "question": "Which protocol is used on the Application Layer for web traffic?",
      "options": ["HTTP", "ICMP", "IP", "TCP"],
      "answerIndex": 0
    },
    {
      "id": 20,
      "question": "What does SNMP do at the Application Layer?",
      "options": ["Transfer files", "Encrypt messages", "Manage network devices", "Route packets"],
      "answerIndex": 2
    },
    {
      "id": 21,
      "question": "Which OSI layer is associated with IP address routing?",
      "options": ["Network", "Session", "Transport", "Presentation"],
      "answerIndex": 0
    },
    {
      "id": 22,
      "question": "Which OSI layer does QUIC operate on?",
      "options": ["Application", "Session", "Transport", "Data Link"],
      "answerIndex": 2
    },
    {
      "id": 23,
      "question": "What does the term 'software-defined networking' refer to?",
      "options": ["Encoding user data", "Replacing MAC addresses", "Controlling network layers via software", "Encrypting Wi-Fi signals"],
      "answerIndex": 2
    },
    {
      "id": 24,
      "question": "What kind of protocols typically operate at Layer 2?",
      "options": ["Wi-Fi and Ethernet", "HTTP and FTP", "UDP and TCP", "SSH and SSL"],
      "answerIndex": 0
    },
    {
      "id": 25,
      "question": "Which OSI layer is responsible for handling the bits and bytes over a cable?",
      "options": ["Application", "Data Link", "Network", "Physical"],
      "answerIndex": 3
    }
  ],
    "In-Depth Network Layer": [
      {
        id: 1,
        question: "What is the primary purpose of the Internet Protocol (IP)?",
        options: [
          "To compress data for transmission",
          "To route packets between networks",
          "To encrypt all network traffic",
          "To assign MAC addresses to devices",
        ],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "Which IP address is used for localhost communication?",
        options: ["192.168.1.1", "10.0.0.1", "127.0.0.1", "0.0.0.0"],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "What does the 'netmask' define in an IP network?",
        options: [
          "The DNS server location",
          "The encryption protocol",
          "The size and boundary of a network",
          "The time-to-live value",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "What is the purpose of the 'broadcast address'?",
        options: [
          "To send data to a specific device only",
          "To communicate with routers",
          "To send data to all devices on a network segment",
          "To change the default gateway",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "What is NAT primarily used for?",
        options: [
          "Encrypting DNS traffic",
          "Assigning MAC addresses",
          "Translating internal IP addresses to a public IP",
          "Resolving domain names",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "Which protocol replaces IPv4 and uses 128-bit addresses?",
        options: ["ICMP", "IPv6", "DHCP", "QUIC"],
        answerIndex: 1,
      },
      {
        id: 7,
        question: "What does ICMP help perform in networking?",
        options: [
          "Change port numbers",
          "Install firewalls",
          "Send diagnostic messages like Ping",
          "Encrypt wireless traffic",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "What command is used on Windows to view IP configuration details?",
        options: ["ip addr show", "ping", "tracert", "ipconfig"],
        answerIndex: 3,
      },
      {
        id: 9,
        question: "Which protocol assigns IP addresses and network settings to devices?",
        options: ["DNS", "DHCP", "ICMP", "TLS"],
        answerIndex: 1,
      },
      {
        id: 10,
        question: "What is the purpose of DNS in networking?",
        options: [
          "Assigning MAC addresses to devices",
          "Encrypting network traffic",
          "Mapping domain names to IP addresses",
          "Managing VPN connections",
        ],
        answerIndex: 2,
      },
      {
        id: 11,
        question: "Which command helps trace the route a packet takes to reach a destination?",
        options: ["ping", "ipconfig", "nslookup", "tracert"],
        answerIndex: 3,
      },
      {
        id: 12,
        question: "What does a VPN primarily offer in a cybersecurity context?",
        options: [
          "Fast Internet access",
          "Encrypted network traffic and remote access",
          "Free Wi-Fi services",
          "Dynamic IP switching every second",
        ],
        answerIndex: 1,
      },
    ],
    "Network Transport": [
      {
        id: 1,
        question: "What do TCP and UDP use to determine which network service should handle data?",
        options: ["MAC addresses", "IP addresses", "Ports", "Encryption keys"],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "What is the purpose of TCP's three-way handshake?",
        options: [
          "To encrypt all data before sending",
          "To ensure both parties want to communicate",
          "To compress data packets",
          "To reroute traffic through a proxy",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "Why is UDP considered less secure than TCP?",
        options: [
          "It only works on Wi-Fi networks",
          "It lacks features like the 3-way handshake",
          "It requires more bandwidth",
          "It cannot be used with IP",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "What tool is commonly used to inspect network packets and view the TCP handshake?",
        options: ["PuTTY", "Traceroute", "Wireshark", "Nmap"],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "What makes TCP more resilient to spoofing than UDP?",
        options: [
          "It uses port forwarding",
          "It requires encryption keys",
          "It includes random sequence numbers in the handshake",
          "It only works on private networks",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "What kind of privileges does an attacker usually need to spoof packets?",
        options: ["Read-only privileges", "VPN access", "Root or system-level privileges", "Email server access"],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "What addressing system is used by switches to forward traffic?",
        options: ["IP addresses", "MAC addresses", "Hostnames", "Domain names"],
        answerIndex: 1,
      },
      {
        id: 8,
        question: "What does the first three octets of a MAC address represent?",
        options: [
          "A random number",
          "The switch model number",
          "The organization that manufactured the device",
          "The device’s serial number",
        ],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "What protocol maps IP addresses to MAC addresses on a local network?",
        options: ["ICMP", "DNS", "ARP", "DHCP"],
        answerIndex: 2,
      },
      {
        id: 10,
        question: "What is a VLAN used for?",
        options: [
          "To provide remote VPN access",
          "To encrypt all network traffic",
          "To isolate devices on a network using virtual segmentation",
          "To dynamically assign IP addresses",
        ],
        answerIndex: 2,
      },
    ],
    Firewalls: [
      {
        id: 1,
        question: "What layer does a traditional firewall primarily operate on?",
        options: ["Layer 2", "Layer 4", "Layer 6", "Layer 7"],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "What does 'ingress traffic' refer to in a network?",
        options: [
          "Traffic leaving the network",
          "Traffic being monitored",
          "Traffic entering the network",
          "Traffic moving internally only",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "Which feature is unique to Next-Generation Firewalls (NGFW)?",
        options: [
          "Simple routing",
          "IP address filtering only",
          "Application awareness and control",
          "MAC address assignment",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "How do NGFWs often determine whether to allow or block web content?",
        options: ["DNS records", "IP addresses only", "URL filtering and domain categorization", "Time of day"],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "What is the primary role of a sandbox in firewall security?",
        options: [
          "Encrypt user traffic",
          "Store backup files",
          "Execute and analyze suspicious files in isolation",
          "Monitor internet usage",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "What is the term for traffic that the firewall cannot classify?",
        options: ["Open traffic", "Filtered traffic", "Blocked traffic", "Unknown traffic"],
        answerIndex: 3,
      },
      {
        id: 7,
        question: "What feature allows firewalls to inspect encrypted traffic?",
        options: ["Tokenization", "Decryption using trusted certificates", "Hashing", "VPN pass-through"],
        answerIndex: 1,
      },
      {
        id: 8,
        question: "How does segmentation improve firewall security?",
        options: [
          "By disabling ports automatically",
          "By grouping all systems into one open network",
          "By controlling communication between different zones",
          "By connecting directly to the public internet",
        ],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "Which of the following is a benefit of connecting the firewall to an organization’s user directory?",
        options: [
          "Better network speed",
          "Automatic virus removal",
          "User-based policy control",
          "Cloud-based backups",
        ],
        answerIndex: 2,
      },
      {
        id: 10,
        question: "What is one function of a Web Application Firewall (WAF)?",
        options: [
          "Encrypting email traffic",
          "Blocking malware from USB drives",
          "Specialized HTTP traffic inspection and protection",
          "Controlling internet bandwidth",
        ],
        answerIndex: 2,
      },
    ],
    "Web Applications": [
      {
        id: 1,
        question: "What protocol is primarily used to deliver web content like HTML and CSS?",
        options: ["FTP", "HTTP", "SMTP", "SSH"],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "In a URL, what does the '?' character signify?",
        options: [
          "A switch to FTP",
          "A break in encryption",
          "The start of query parameters",
          "The beginning of the hostname",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "Which HTTP header is responsible for telling the server which website was visited prior?",
        options: ["User-Agent", "Host", "Referer", "Cookie"],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "Which HTTP verb is typically used to send data to a web server?",
        options: ["GET", "POST", "DELETE", "HEAD"],
        answerIndex: 1,
      },
      {
        id: 5,
        question: "What does the HTTP response code 403 indicate?",
        options: ["Resource not found", "Temporary redirect", "Unauthorized access attempt", "Successful request"],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "Which protocol ensures encrypted communication over HTTP?",
        options: ["UDP", "FTP", "TLS", "ICMP"],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "What does the HTTP 'Host' header define?",
        options: ["Browser version", "Client IP address", "The target service on a server", "Encryption protocol"],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "Which of the following stores client session data for web applications?",
        options: ["Referrer", "User-Agent", "Cookies", "Host header"],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "What is the main purpose of Virtual Hosts (VHosts)?",
        options: [
          "Speed up network packets",
          "Run multiple applications on different servers",
          "Allow one server to host multiple web apps",
          "Encrypt all requests automatically",
        ],
        answerIndex: 2,
      },
      {
        id: 10,
        question: "What is URL encoding used for?",
        options: [
          "Encrypt traffic using JavaScript",
          "Compress large responses",
          "Safely transfer special characters in URLs",
          "Identify virtual hosts",
        ],
        answerIndex: 2,
      },
    ],
  },
  "W3 Cyber Attacks": {
    "Network Mapping & Port Scanning": [
      {
        id: 1,
        question: "What is the primary goal of network mapping?",
        options: [
          "Encrypt network traffic",
          "Identify which systems are live on a network",
          "Install antivirus software",
          "Monitor employee behavior",
        ],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "Which tool is widely used for network mapping and port scanning?",
        options: ["Wireshark", "Metasploit", "Nmap", "Burp Suite"],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "Why is ARP scanning limited to LAN environments?",
        options: [
          "It uses the DNS protocol",
          "It requires admin privileges",
          "ARP only works within the local broadcast domain",
          "Routers block ARP requests by default",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "Which Nmap option disables host discovery and assumes all hosts are up?",
        options: ["-O", "-sS", "-Pn", "--top-ports"],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "Which of the following accurately describes a TCP SYN scan?",
        options: [
          "It floods the network with UDP packets",
          "It completes the 3-way handshake",
          "It sends a SYN and listens for SYN/ACK responses",
          "It requires encryption to succeed",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "Why is UDP port scanning more difficult than TCP?",
        options: [
          "UDP is slower",
          "UDP packets always bounce",
          "UDP services don’t respond unless the request is correct",
          "UDP is blocked by all firewalls",
        ],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "Which of the following Nmap flags enables version detection?",
        options: ["-sS", "-sV", "-Pn", "-T4"],
        answerIndex: 1,
      },
      {
        id: 8,
        question: "What does the Nmap -A flag do?",
        options: [
          "Performs ARP scanning only",
          "Avoids detection by using stealth mode",
          "Enables OS detection, version detection, and scripts",
          "Only scans IPv6 hosts",
        ],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "Which scan timing option is the slowest and avoids detection the most?",
        options: ["T0 - Paranoid", "T2 - Polite", "T4 - Aggressive", "T5 - Insane"],
        answerIndex: 0,
      },
      {
        id: 10,
        question: "What is the main benefit of using Nmap's -sC flag?",
        options: [
          "It runs aggressive denial-of-service tests",
          "It enables safe script scanning",
          "It performs encryption cracking",
          "It disables host discovery",
        ],
        answerIndex: 1,
      },
    ],
    "Network Attacks": [
      {
        id: 1,
        question: "What does RCE stand for in cybersecurity?",
        options: [
          "Remote Code Execution",
          "Random Code Emission",
          "Registered Cyber Exploit",
          "Remote Control Engagement",
        ],
        answerIndex: 0,
      },
      {
        id: 2,
        question: "What is the main cause of buffer overflow vulnerabilities?",
        options: [
          "Lack of encryption",
          "Improper password policies",
          "Unrestricted memory access from user input",
          "Weak firewall settings",
        ],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "What happens when an attacker overwrites the return pointer in a buffer overflow attack?",
        options: [
          "They cause a system crash",
          "They can control where the CPU executes next",
          "They change the MAC address of the system",
          "They bypass antivirus protections",
        ],
        answerIndex: 1,
      },
      {
        id: 4,
        question: "What is the purpose of a vulnerability scanner?",
        options: [
          "To exploit systems using zero-day attacks",
          "To identify known vulnerabilities and misconfigurations",
          "To scan websites for SEO optimization",
          "To back up system data regularly",
        ],
        answerIndex: 1,
      },
      {
        id: 5,
        question: "What is a reverse shell?",
        options: [
          "A shell opened in safe mode",
          "A shell that runs only in admin mode",
          "A connection from victim to attacker for remote control",
          "A recovery mode tool",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "What is the primary goal of a C2 (Command and Control) server?",
        options: [
          "To host websites",
          "To monitor network bandwidth",
          "To allow attackers to control compromised systems",
          "To patch vulnerabilities automatically",
        ],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "What is a common indicator of a beaconing C2 connection?",
        options: [
          "A single burst of high traffic",
          "Long, consistent connection intervals",
          "Frequent DNS lookup failures",
          "Sudden reboots of the victim system",
        ],
        answerIndex: 1,
      },
      {
        id: 8,
        question: "What is lateral movement?",
        options: [
          "Encrypting data for safe transit",
          "Blocking traffic between networks",
          "Spreading access from one compromised system to another",
          "Changing IP addresses of compromised systems",
        ],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "Why are SMB communications between clients often suspicious?",
        options: [
          "SMB should only be used for file backups",
          "Clients are not supposed to communicate directly over SMB",
          "SMB is obsolete and shouldn't be used",
          "It causes network slowdowns",
        ],
        answerIndex: 1,
      },
      {
        id: 10,
        question: "What is the function of a payload in an exploit?",
        options: [
          "To scan the network",
          "To identify vulnerabilities",
          "To execute the attacker’s desired action on the target",
          "To block malware from spreading",
        ],
        answerIndex: 2,
      },
    ],
    "Web Application Attacks": [
      {
        id: 1,
        question: "What does IDOR stand for?",
        options: [
          "Internal Data Operation Request",
          "Insecure Direct Object Reference",
          "Input Data Override Rule",
          "Identified Document Output Resource",
        ],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "What is the primary reason IDOR vulnerabilities occur?",
        options: [
          "Improper input encoding",
          "Lack of authorization checks on object access",
          "Unpatched database systems",
          "Outdated programming languages",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "Why are GUIDs or UUIDs recommended over numeric IDs?",
        options: [
          "They are easier to remember",
          "They are faster to process",
          "They are harder to enumerate",
          "They are used only in SQL",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "What causes SQL Injection vulnerabilities?",
        options: [
          "Lack of data sanitization",
          "Too many database connections",
          "Overuse of GUIDs",
          "Use of HTTPS instead of HTTP",
        ],
        answerIndex: 0,
      },
      {
        id: 5,
        question: "Which of the following is a common SQL Injection attack string?",
        options: ["SELECT * FROM userTable", "1000' OR '1'='1", "getUser();", "password=admin123"],
        answerIndex: 1,
      },
      {
        id: 6,
        question: "What is the recommended defense against SQL Injection?",
        options: ["HTML encoding", "CSP headers", "Parameterized queries", "Cookies"],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "What is the key difference between Reflected and Stored XSS?",
        options: [
          "Stored XSS does not use JavaScript",
          "Reflected XSS affects the server directly",
          "Stored XSS is saved on the server and affects every visitor",
          "Reflected XSS runs only on mobile browsers",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "What is a common consequence of a successful XSS attack?",
        options: [
          "Brute-force of passwords",
          "Stealing user cookies",
          "Injecting SQL into forms",
          "Redirecting to HTTPS",
        ],
        answerIndex: 1,
      },
      {
        id: 9,
        question: "Which HTTP header helps mitigate the effects of XSS?",
        options: ["User-Agent", "Host", "Content-Security-Policy", "Accept-Encoding"],
        answerIndex: 2,
      },
      {
        id: 10,
        question: "What does a web application scanner typically focus on?",
        options: [
          "Zero-day vulnerabilities only",
          "Network firewall rules",
          "Web-specific vulnerabilities like SQLi and XSS",
          "Port scanning services",
        ],
        answerIndex: 2,
      },
    ],
    "Wi-Fi Attacks": [
      {
        id: 1,
        question: "What protocol is most commonly associated with Wi-Fi networks?",
        options: ["IEEE 802.3", "IEEE 802.11", "IEEE 802.15", "IEEE 802.1X"],
        answerIndex: 1,
      },
      {
        id: 2,
        question: "What does SSID stand for?",
        options: [
          "Secure Set Internet Directory",
          "Service Set Identifier",
          "Standard Signal Input Device",
          "Signal Source Internal Device",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "What feature allows a Wi-Fi adapter to capture packets not addressed to it?",
        options: ["WEP Mode", "Bridge Mode", "Monitor Mode", "Client Mode"],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "Why is using an open Wi-Fi network a security risk?",
        options: [
          "It has limited range",
          "It costs more to operate",
          "Traffic is unencrypted and visible to nearby attackers",
          "It doesn't support VPNs",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "Why is MAC address filtering not a reliable security measure?",
        options: [
          "Attackers can sniff valid MAC addresses and spoof them",
          "MAC addresses change every time you connect",
          "MAC filtering only works for USB devices",
          "Most routers don't support MAC filtering",
        ],
        answerIndex: 0,
      },
      {
        id: 6,
        question: "What is the role of WPA in Wi-Fi security?",
        options: [
          "To monitor web traffic",
          "To provide password-based encryption for Wi-Fi",
          "To connect to cellular networks",
          "To manage email access protocols",
        ],
        answerIndex: 1,
      },
      {
        id: 7,
        question: "What does a fake access point (Fake AP) aim to do?",
        options: [
          "Extend the Wi-Fi signal range",
          "Increase download speeds",
          "Trick users into connecting so attackers can sniff or modify traffic",
          "Block DNS requests",
        ],
        answerIndex: 2,
      },
      {
        id: 8,
        question: "What is a key advantage of Enterprise Wi-Fi authentication over PSK?",
        options: [
          "It’s easier to remember",
          "It allows all users to share the same password",
          "It uses centralized credentials and better key management",
          "It disables encryption for faster access",
        ],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "What is one requirement to perform a Wi-Fi password cracking attack on WPA?",
        options: [
          "The SSID must be hidden",
          "The access point must be using WEP",
          "The attacker must capture a handshake",
          "The MAC address must be spoofed first",
        ],
        answerIndex: 2,
      },
      {
        id: 10,
        question: "Which tool is commonly used for cracking Wi-Fi passwords?",
        options: ["Wireshark", "Aircrack-ng", "Burp Suite", "Metasploit"],
        answerIndex: 1,
      },
    ],
    Passwords: [
      {
        id: 1,
        question: "What is a major drawback of using passwords like Tr0ub4dor&3?",
        options: [
          "They are too long to crack",
          "They are based on random symbols",
          "They are hard to remember, type, and have low entropy",
          "They are not accepted by login forms",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "Why is a passphrase like 'CorrectHorseBatteryStaple' considered better?",
        options: [
          "It uses numbers and symbols",
          "It's easier to type, remember, and has higher entropy",
          "It fits into 8 characters",
          "It requires no special characters",
        ],
        answerIndex: 1,
      },
      {
        id: 3,
        question: "Why are password managers considered safer than reusing passwords?",
        options: [
          "They allow you to share passwords",
          "They create a backup of your passwords on paper",
          "They generate and store strong, unique passwords",
          "They prevent websites from requiring passwords",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "Which of the following is an example of a passwordless authentication method?",
        options: [
          "Using a longer password",
          "Asking a security question",
          "Using a fingerprint or face scan",
          "Using a CAPTCHA",
        ],
        answerIndex: 2,
      },
      {
        id: 5,
        question: "What is the primary benefit of Multi-Factor Authentication (MFA)?",
        options: [
          "It replaces passwords entirely",
          "It ensures only administrators can log in",
          "It adds an additional layer of verification beyond a password",
          "It removes the need for encryption",
        ],
        answerIndex: 2,
      },
      {
        id: 6,
        question: "What is a potential reason to trigger MFA selectively using DAC?",
        options: [
          "When a user logs in from the same browser",
          "When a user logs in during business hours",
          "When a user performs a sensitive action or logs in from a new device",
          "When a user updates their email preferences",
        ],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "What is the difference between password guessing and password cracking?",
        options: [
          "Guessing is local and cracking is remote",
          "Guessing is online and cracking is offline using stolen hashes",
          "Cracking requires no tools",
          "Guessing uses rainbow tables",
        ],
        answerIndex: 1,
      },
      {
        id: 8,
        question: "What makes credential stuffing so effective?",
        options: [
          "Users use passwords only once",
          "Leaked databases have encrypted passwords",
          "Many users reuse the same password across services",
          "It only targets local systems",
        ],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "What does a password hash represent?",
        options: [
          "A two-way encrypted password",
          "A user’s login token",
          "A one-way function output of a password",
          "A scrambled password file",
        ],
        answerIndex: 2,
      },
      {
        id: 10,
        question: "Which tool is commonly used to extract credentials from Windows systems?",
        options: ["Hydra", "Aircrack-ng", "Metasploit", "Mimikatz"],
        answerIndex: 3,
      },
    ],
    "Penetration Testing & Social Engineering": [
      {
        id: 1,
        question: "What is the primary goal of penetration testing?",
        options: [
          "To crash the system",
          "To test internet speed",
          "To identify vulnerabilities before real attackers do",
          "To redesign the company network",
        ],
        answerIndex: 2,
      },
      {
        id: 2,
        question: "Which of the following is NOT typically included in a penetration test scope?",
        options: ["ICS/SCADA systems", "Mobile applications", "Employee salary negotiations", "Wireless networks"],
        answerIndex: 2,
      },
      {
        id: 3,
        question: "What is a 'black-box' penetration test?",
        options: [
          "A test done using only open-source tools",
          "A test with full internal knowledge",
          "A test where testers have no prior knowledge of the system",
          "A test focused on mobile apps",
        ],
        answerIndex: 2,
      },
      {
        id: 4,
        question: "What risk does a stolen laptop pose if the hard drive is not encrypted?",
        options: [
          "It becomes unbootable",
          "It may allow attackers to extract data and credentials",
          "It deletes all files automatically",
          "It turns off the wireless connection",
        ],
        answerIndex: 1,
      },
      {
        id: 5,
        question: "What is social engineering?",
        options: [
          "Coding malicious scripts",
          "Tricking people into performing actions or giving information",
          "Installing antivirus software",
          "Scanning wireless networks",
        ],
        answerIndex: 1,
      },
      {
        id: 6,
        question:
          "In the scenario where Eve drops USB sticks labeled 'Salary Information' around an office, what principle is being exploited?",
        options: ["Politeness", "Fear", "Curiosity", "Reciprocation"],
        answerIndex: 2,
      },
      {
        id: 7,
        question: "What is tailgating?",
        options: [
          "Following someone into a building without proper access",
          "Scanning the wireless network",
          "Driving behind someone closely",
          "Cloning someone's access badge",
        ],
        answerIndex: 0,
      },
      {
        id: 8,
        question: "Which type of phishing involves a phone call?",
        options: ["Email phishing", "Smishing", "Vishing", "Whaling"],
        answerIndex: 2,
      },
      {
        id: 9,
        question: "What’s the purpose of a phishing campaign in penetration testing?",
        options: [
          "To get people fired",
          "To prove users fall for scams",
          "To test spam filters and show the impact of user mistakes",
          "To steal money from the company",
        ],
        answerIndex: 2,
      },
      {
        id: 10,
        question: "Why might a company choose a white-box penetration test?",
        options: [
          "It’s more challenging for the testers",
          "It provides less realistic scenarios",
          "It gives testers full knowledge for deeper vulnerability discovery",
          "It hides the internal network from the testers",
        ],
        answerIndex: 2,
      },
    ],
  }," W3 Cyber Defence":{
"Security Operations": [
  {
    "id": 1,
    "question": "What is the main responsibility of a Security Operations Center (SOC)?",
    "options": [
      "Install software updates",
      "Detect and respond to threats in the environment",
      "Build websites for the company",
      "Train employees on customer service"
    ],
    "answerIndex": 1
  },
  {
    "id": 2,
    "question": "What does SIEM stand for?",
    "options": [
      "Security Information and Event Management",
      "Software Incident and Event Monitoring",
      "System Integrity and Endpoint Management",
      "Secure Internet Event Monitoring"
    ],
    "answerIndex": 0
  },
  {
    "id": 3,
    "question": "Which type of event typically provides the most useful security context for a SOC?",
    "options": [
      "Network events",
      "Host events",
      "Application events",
      "Firewall logs"
    ],
    "answerIndex": 2
  },
  {
    "id": 4,
    "question": "What is the primary role of a Level 1 SOC Analyst?",
    "options": [
      "Design security architecture",
      "Investigate and escalate alerts",
      "Lead the SOC team",
      "Create new applications"
    ],
    "answerIndex": 1
  },
  {
    "id": 5,
    "question": "What is Purple Teaming?",
    "options": [
      "When two SOC teams compete to find threats",
      "When developers and testers work together",
      "Merging offensive and defensive security teams for collaboration",
      "Using AI to monitor traffic"
    ],
    "answerIndex": 2
  },
  {
    "id": 6,
    "question": "In incident response, what does 'criticality' refer to?",
    "options": [
      "The time the incident occurred",
      "The difficulty of fixing the issue",
      "How serious the incident is and how quickly it must be addressed",
      "The type of malware used"
    ],
    "answerIndex": 2
  },
  {
    "id": 7,
    "question": "What is the purpose of SOAR in a SOC environment?",
    "options": [
      "To block all internet access",
      "To automate responses and orchestrate actions to threats",
      "To install antivirus software",
      "To monitor employee productivity"
    ],
    "answerIndex": 1
  },
  {
    "id": 8,
    "question": "Which of the following is the hardest for attackers to change and therefore the most useful for detection?",
    "options": [
      "File hashes",
      "IP addresses",
      "Domain names",
      "Tactics, Techniques, and Procedures (TTPs)"
    ],
    "answerIndex": 3
  },
  {
    "id": 9,
    "question": "What should a SOC use to determine who to notify for different incidents?",
    "options": [
      "Alert color codes",
      "Random selection",
      "Escalation chains",
      "Antivirus logs"
    ],
    "answerIndex": 2
  },
  {
    "id": 10,
    "question": "Why might a SIEM require customization for application logs?",
    "options": [
      "SIEMs never support application logs",
      "Application logs are always encrypted",
      "Many applications are proprietary and require manual parsing rules",
      "They’re not written in English"
    ],
    "answerIndex": 2
  }
], "Incident Response": [
  {
    "id": 1,
    "question": "What is the main goal of a Cyber Security Incident Response Team (IRT)?",
    "options": [
      "To install antivirus software",
      "To increase website traffic",
      "To handle incidents and reduce organizational harm",
      "To reset employee passwords"
    ],
    "answerIndex": 2
  },
  {
    "id": 2,
    "question": "Which methodology is commonly used for structuring incident response processes?",
    "options": [
      "CIA Triad",
      "OWASP Top 10",
      "PICERL",
      "TCP/IP Stack"
    ],
    "answerIndex": 2
  },
  {
    "id": 3,
    "question": "Which of the following is the first phase in the PICERL methodology?",
    "options": [
      "Containment",
      "Preparation",
      "Identification",
      "Eradication"
    ],
    "answerIndex": 1
  },
  {
    "id": 4,
    "question": "During which phase is evidence such as hard drive and memory images collected?",
    "options": [
      "Identification",
      "Recovery",
      "Containment",
      "Lessons Learned"
    ],
    "answerIndex": 2
  },
  {
    "id": 5,
    "question": "What is the goal of the eradication phase in incident response?",
    "options": [
      "Build new systems",
      "Change all employee passwords",
      "Remove attacker artifacts and restore clean systems",
      "Monitor employees' emails"
    ],
    "answerIndex": 2
  },
  {
    "id": 6,
    "question": "What is typically done during the recovery phase?",
    "options": [
      "Backup compromised systems",
      "Return systems to normal operations and monitor for reinfection",
      "Remove malicious files",
      "Train new employees"
    ],
    "answerIndex": 1
  },
  {
    "id": 7,
    "question": "Which phase involves documenting improvements and reviewing team performance?",
    "options": [
      "Recovery",
      "Containment",
      "Lessons Learned",
      "Preparation"
    ],
    "answerIndex": 2
  },
  {
    "id": 8,
    "question": "Which of the following is a common question during the identification phase?",
    "options": [
      "What was the weather at the time of the attack?",
      "Can we trace the attackers’ VPN provider?",
      "What systems and users are involved?",
      "How long has the company been operating?"
    ],
    "answerIndex": 2
  },
  {
    "id": 9,
    "question": "What role might HR or Legal play in incident response?",
    "options": [
      "They set firewall rules",
      "They help respond to phishing emails",
      "They assist with communication, policy, or regulatory needs",
      "They provide penetration testing tools"
    ],
    "answerIndex": 2
  },
  {
    "id": 10,
    "question": "Which of the following would NOT typically occur during the preparation phase?",
    "options": [
      "Creating incident response playbooks",
      "Training the response team",
      "Blocking malicious IPs in the firewall",
      "Setting up secure communication channels"
    ],
    "answerIndex": 2
  }
]


  } 
,

"Chapter 1 Comp TIA":{
  "Cybersecurity Objectives (CIA Triad)": [
  {
    "id": 1,
    "question": "Which option best describes the goal of Confidentiality?",
    "options": [
      "Ensuring systems are available when needed",
      "Preventing unauthorized disclosure of information",
      "Ensuring no unauthorized modification occurs",
      "Proving who sent a message"
    ],
    "answerIndex": 1
  },
  {
    "id": 2,
    "question": "Hashing a file to verify it hasn't changed primarily protects which CIA objective?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Nonrepudiation"
    ],
    "answerIndex": 1
  },
  {
    "id": 3,
    "question": "Which control BEST supports Availability?",
    "options": [
      "Multi-factor authentication",
      "Firewall rules",
      "Backups and fault tolerance (e.g., clustering/RAID)",
      "File hashing"
    ],
    "answerIndex": 2
  },
  {
    "id": 4,
    "question": "Encrypting sensitive data at rest most directly supports which CIA objective?",
    "options": [
      "Integrity",
      "Availability",
      "Confidentiality",
      "Nonrepudiation"
    ],
    "answerIndex": 2
  },
  {
    "id": 5,
    "question": "Which scenario MOST clearly violates Integrity?",
    "options": [
      "An attacker steals a database of SSNs",
      "A power outage takes down the website",
      "A user adds unauthorized transactions to a ledger",
      "A web server is behind a firewall"
    ],
    "answerIndex": 2
  },
  {
    "id": 6,
    "question": "Nonrepudiation means:",
    "options": [
      "Data cannot be disclosed without permission",
      "The sender cannot deny having performed an action",
      "Systems remain online during failures",
      "Data cannot be altered in transit"
    ],
    "answerIndex": 1
  }
],

"DAD Triad (Threats)": [
  {
    "id": 1,
    "question": "An attacker steals customer credit card numbers from a database. Which DAD threat is this?",
    "options": [
      "Disclosure",
      "Alteration",
      "Denial",
      "Evasion"
    ],
    "answerIndex": 0
  },
  {
    "id": 2,
    "question": "A power surge corrupts records in a financial system. Which DAD threat occurred?",
    "options": [
      "Disclosure",
      "Alteration",
      "Denial",
      "Exfiltration"
    ],
    "answerIndex": 1
  },
  {
    "id": 3,
    "question": "A DDoS attack makes the customer portal unreachable for hours. Which DAD threat is this?",
    "options": [
      "Disclosure",
      "Alteration",
      "Denial",
      "Enumeration"
    ],
    "answerIndex": 2
  },
  {
    "id": 4,
    "question": "Accidentally emailing an unencrypted spreadsheet with PII to the wrong recipient is an example of:",
    "options": [
      "Disclosure",
      "Alteration",
      "Denial",
      "Nonrepudiation"
    ],
    "answerIndex": 0
  },
  {
    "id": 5,
    "question": "A script modifies product prices in a database without authorization. Which DAD threat best applies?",
    "options": [
      "Disclosure",
      "Alteration",
      "Denial",
      "Obfuscation"
    ],
    "answerIndex": 1
  },
  {
    "id": 6,
    "question": "A datacenter cooling failure forces systems offline. Which DAD threat is most affected?",
    "options": [
      "Disclosure",
      "Alteration",
      "Denial",
      "Integrity"
    ],
    "answerIndex": 2
  }
],

"Data Breach Risks": [
  {
    "id": 1,
    "question": "A security incident that exposes sensitive information most directly violates which CIA objective?",
    "options": [
      "Availability",
      "Integrity",
      "Confidentiality",
      "Nonrepudiation"
    ],
    "answerIndex": 2
  },
  {
    "id": 2,
    "question": "Restoring from backups after ransomware primarily addresses which CIA objective?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Nonrepudiation"
    ],
    "answerIndex": 2
  },
  {
    "id": 3,
    "question": "Which question best reflects using the DAD model during risk analysis of a public website?",
    "options": [
      "Does the site have enough staff to support tickets?",
      "Does the site contain data that would harm the organization if disclosed to unauthorized users?",
      "Can users deny having posted a comment?",
      "Are the servers in the same time zone?"
    ],
    "answerIndex": 1
  }
], "Risk Categories": [
  {
    "id": 1,
    "question": "Which risk refers to monetary losses, such as costs of rebuilding a datacenter or lost revenue due to a breach?",
    "options": [
      "Reputational Risk",
      "Financial Risk",
      "Strategic Risk",
      "Operational Risk"
    ],
    "answerIndex": 1
  },
  {
    "id": 2,
    "question": "A company loses customer trust and suffers negative publicity after a security incident. Which type of risk is this?",
    "options": [
      "Reputational Risk",
      "Strategic Risk",
      "Compliance Risk",
      "Operational Risk"
    ],
    "answerIndex": 0
  },
  {
    "id": 3,
    "question": "An employee loses a laptop with product development plans. Competitors use this information to launch their own product first. What type of risk is this?",
    "options": [
      "Operational Risk",
      "Compliance Risk",
      "Strategic Risk",
      "Financial Risk"
    ],
    "answerIndex": 2
  },
  {
    "id": 4,
    "question": "Which risk affects the organization’s ability to carry out daily business functions, such as processing customer orders?",
    "options": [
      "Compliance Risk",
      "Operational Risk",
      "Financial Risk",
      "Reputational Risk"
    ],
    "answerIndex": 1
  },
  {
    "id": 5,
    "question": "A hospital is fined for violating HIPAA by exposing patient medical records. Which risk is this an example of?",
    "options": [
      "Compliance Risk",
      "Financial Risk",
      "Reputational Risk",
      "Operational Risk"
    ],
    "answerIndex": 0
  },
  {
    "id": 6,
    "question": "Why can a single breach often fall into multiple risk categories?",
    "options": [
      "Because only financial losses matter",
      "Because reputational damage is always temporary",
      "Because one event can cause legal, financial, operational, and reputational impacts at the same time",
      "Because strategic risk is the only true business risk"
    ],
    "answerIndex": 2
  }
], "Risk Categories": [
  {
    "id": 1,
    "question": "Which risk refers to monetary losses, such as costs of rebuilding a datacenter or lost revenue due to a breach?",
    "options": [
      "Reputational Risk",
      "Financial Risk",
      "Strategic Risk",
      "Operational Risk"
    ],
    "answerIndex": 1
  },
  {
    "id": 2,
    "question": "A company loses customer trust and suffers negative publicity after a security incident. Which type of risk is this?",
    "options": [
      "Reputational Risk",
      "Strategic Risk",
      "Compliance Risk",
      "Operational Risk"
    ],
    "answerIndex": 0
  },
  {
    "id": 3,
    "question": "An employee loses a laptop with product development plans. Competitors use this information to launch their own product first. What type of risk is this?",
    "options": [
      "Operational Risk",
      "Compliance Risk",
      "Strategic Risk",
      "Financial Risk"
    ],
    "answerIndex": 2
  },
  {
    "id": 4,
    "question": "Which risk affects the organization’s ability to carry out daily business functions, such as processing customer orders?",
    "options": [
      "Compliance Risk",
      "Operational Risk",
      "Financial Risk",
      "Reputational Risk"
    ],
    "answerIndex": 1
  },
  {
    "id": 5,
    "question": "A hospital is fined for violating HIPAA by exposing patient medical records. Which risk is this an example of?",
    "options": [
      "Compliance Risk",
      "Financial Risk",
      "Reputational Risk",
      "Operational Risk"
    ],
    "answerIndex": 0
  },
  {
    "id": 6,
    "question": "Why can a single breach often fall into multiple risk categories?",
    "options": [
      "Because only financial losses matter",
      "Because reputational damage is always temporary",
      "Because one event can cause legal, financial, operational, and reputational impacts at the same time",
      "Because strategic risk is the only true business risk"
    ],
    "answerIndex": 2
  }
], "Implementing Security Controls": [
  {
    "id": 1,
    "question": "What is the main purpose of security controls?",
    "options": [
      "To replace security objectives completely",
      "To fulfill security objectives by protecting confidentiality, integrity, and availability",
      "To provide optional guidelines for employees",
      "To eliminate all risk in an organization"
    ],
    "answerIndex": 1
  },
  {
    "id": 2,
    "question": "During a gap analysis, what does a cybersecurity professional look for?",
    "options": [
      "Unpatched vulnerabilities only",
      "Areas where existing controls do not meet the stated control objectives",
      "Employee mistakes and training needs",
      "Ways to improve encryption strength only"
    ],
    "answerIndex": 1
  },
  {
    "id": 3,
    "question": "Which of the following is the BEST description of a gap in gap analysis?",
    "options": [
      "A vulnerability in firewall rules",
      "A security incident that has already occurred",
      "A mismatch between security controls and control objectives",
      "An example of physical security weakness"
    ],
    "answerIndex": 2
  }
],

"Security Control Categories": [
  {
    "id": 1,
    "question": "Which type of control enforces confidentiality, integrity, and availability in the digital space using firewalls, ACLs, and encryption?",
    "options": [
      "Operational controls",
      "Managerial controls",
      "Technical controls",
      "Physical controls"
    ],
    "answerIndex": 2
  },
  {
    "id": 2,
    "question": "Log monitoring, vulnerability management, and user access reviews are examples of which type of control?",
    "options": [
      "Managerial controls",
      "Operational controls",
      "Technical controls",
      "Physical controls"
    ],
    "answerIndex": 1
  },
  {
    "id": 3,
    "question": "Risk assessments, security planning exercises, and project management practices are examples of which control type?",
    "options": [
      "Operational controls",
      "Managerial controls",
      "Technical controls",
      "Physical controls"
    ],
    "answerIndex": 1
  },
  {
    "id": 4,
    "question": "Which controls include locks, fences, and fire suppression systems?",
    "options": [
      "Physical controls",
      "Managerial controls",
      "Technical controls",
      "Operational controls"
    ],
    "answerIndex": 0
  },
  {
    "id": 5,
    "question": "An organization that protects data with encryption (technical), reviews user accounts monthly (operational), and performs quarterly risk assessments (managerial) is practicing:",
    "options": [
      "Defense in depth with layered controls",
      "Physical security only",
      "Gap analysis",
      "Compliance monitoring"
    ],
    "answerIndex": 0
  },  {
    "id": 6,
    "question": "Which control category involves day-to-day processes to keep systems secure, such as log reviews and vulnerability scanning?",
    "options": [
      "Technical controls",
      "Operational controls",
      "Managerial controls",
      "Physical controls"
    ],
    "answerIndex": 1
  },
  {
    "id": 7,
    "question": "Which of the following BEST describes managerial controls?",
    "options": [
      "Controls that use technology like firewalls or encryption",
      "Controls that involve physical barriers such as locks and guards",
      "Controls focused on policies, risk assessments, and planning",
      "Controls that monitor user activity in real time"
    ],
    "answerIndex": 2
  },
  {
    "id": 8,
    "question": "A company installs CCTV cameras at its datacenter. This is an example of which type of control?",
    "options": [
      "Operational control",
      "Managerial control",
      "Physical control",
      "Technical control"
    ],
    "answerIndex": 2
  },
  {
    "id": 9,
    "question": "Which of the following is an example of a technical control?",
    "options": [
      "Quarterly risk assessment",
      "Firewall rules blocking unauthorized traffic",
      "Employee security awareness training",
      "Hiring a security guard"
    ],
    "answerIndex": 1
  },
  {
    "id": 10,
    "question": "Security awareness training is MOST closely associated with which control category?",
    "options": [
      "Operational control",
      "Technical control",
      "Physical control",
      "Managerial control"
    ],
    "answerIndex": 3
  },
  {
    "id": 11,
    "question": "An administrator performs a user access review every month to ensure accounts are valid. This is an example of:",
    "options": [
      "Operational control",
      "Managerial control",
      "Technical control",
      "Physical control"
    ],
    "answerIndex": 0
  },
  {
    "id": 12,
    "question": "Fire suppression systems in a datacenter fall under which category of control?",
    "options": [
      "Managerial control",
      "Technical control",
      "Operational control",
      "Physical control"
    ],
    "answerIndex": 3
  },
  {
    "id": 13,
    "question": "Which control category ensures that management decisions are implemented through policies and procedures?",
    "options": [
      "Managerial control",
      "Technical control",
      "Operational control",
      "Physical control"
    ],
    "answerIndex": 0
  }
], "Security Control Types": [
  {
    "id": 1,
    "question": "Which type of control is designed to stop a security issue before it occurs?",
    "options": [
      "Detective control",
      "Preventive control",
      "Corrective control",
      "Compensating control"
    ],
    "answerIndex": 1
  },
  {
    "id": 2,
    "question": "Barbed wire fences and warning banners are examples of which type of control?",
    "options": [
      "Preventive control",
      "Deterrent control",
      "Directive control",
      "Corrective control"
    ],
    "answerIndex": 1
  },
  {
    "id": 3,
    "question": "Intrusion Detection Systems (IDS) are an example of which control type?",
    "options": [
      "Preventive control",
      "Detective control",
      "Corrective control",
      "Compensating control"
    ],
    "answerIndex": 1
  },
  {
    "id": 4,
    "question": "Restoring backups after a ransomware attack is an example of:",
    "options": [
      "Detective control",
      "Compensating control",
      "Corrective control",
      "Preventive control"
    ],
    "answerIndex": 2
  },
  {
    "id": 5,
    "question": "Which control type is used as an alternative when the original requirement cannot be met?",
    "options": [
      "Compensating control",
      "Preventive control",
      "Corrective control",
      "Directive control"
    ],
    "answerIndex": 0
  },
  {
    "id": 6,
    "question": "Policies and procedures that tell employees what they must do to achieve security goals are examples of:",
    "options": [
      "Compensating control",
      "Directive control",
      "Detective control",
      "Preventive control"
    ],
    "answerIndex": 1
  }
],

"Compensating Controls": [
  {
    "id": 1,
    "question": "Which of the following is NOT one of the criteria for a compensating control under PCI DSS?",
    "options": [
      "It must meet the intent and rigor of the original requirement",
      "It must provide a similar level of defense as the original requirement",
      "It must be easier and cheaper to implement than the original requirement",
      "It must be 'above and beyond' other PCI DSS requirements"
    ],
    "answerIndex": 2
  },
  {
    "id": 2,
    "question": "An organization cannot upgrade an outdated operating system but isolates it from the network and restricts access. What type of control is this?",
    "options": [
      "Preventive control",
      "Compensating control",
      "Corrective control",
      "Managerial control"
    ],
    "answerIndex": 1
  },
  {
    "id": 3,
    "question": "Why do organizations often adopt compensating controls?",
    "options": [
      "To avoid compliance requirements altogether",
      "To meet security objectives when direct compliance with a requirement is not feasible",
      "To reduce the cost of implementing preventive controls",
      "To eliminate the need for risk assessments"
    ],
    "answerIndex": 1
  },
  {
    "id": 4,
    "question": "Which is the BEST description of a compensating control?",
    "options": [
      "A temporary control that fixes an issue until a permanent solution is found",
      "An alternative control that provides equivalent protection when the original requirement cannot be met",
      "A control that only applies to physical security requirements",
      "A form of detective control used to log policy violations"
    ],
    "answerIndex": 1
  }
], "Data Protection": [
  {
    "id": 1,
    "question": "Which term describes data that is stored on hard drives, tapes, or cloud storage?",
    "options": [
      "Data in transit",
      "Data at rest",
      "Data in use",
      "Data minimized"
    ],
    "answerIndex": 1
  },
  {
    "id": 2,
    "question": "Which type of data is most vulnerable to eavesdropping attacks if not encrypted?",
    "options": [
      "Data at rest",
      "Data in use",
      "Data in transit",
      "Data minimized"
    ],
    "answerIndex": 2
  },
  {
    "id": 3,
    "question": "When an attacker steals sensitive information from system memory while it is being processed, this is a threat to:",
    "options": [
      "Data in transit",
      "Data in use",
      "Data at rest",
      "Data minimized"
    ],
    "answerIndex": 1
  },
  {
    "id": 4,
    "question": "Which technology ensures information is unreadable without the correct decryption key?",
    "options": [
      "Masking",
      "Encryption",
      "Tokenization",
      "Watermarking"
    ],
    "answerIndex": 1
  },
  {
    "id": 5,
    "question": "Which security system is designed to enforce information handling policies and prevent data exfiltration?",
    "options": [
      "IDS",
      "SIEM",
      "DLP",
      "VPN"
    ],
    "answerIndex": 2
  },
  {
    "id": 6,
    "question": "What is the difference between agent-based and agentless DLP?",
    "options": [
      "Agent-based DLP runs on endpoints; agentless DLP runs on the network",
      "Agent-based DLP only scans network traffic; agentless scans endpoints",
      "Agent-based DLP focuses on email only; agentless focuses on storage only",
      "There is no difference between the two"
    ],
    "answerIndex": 0
  },
  {
    "id": 7,
    "question": "Which DLP mechanism identifies sensitive data by searching for credit card numbers or Social Security numbers?",
    "options": [
      "Watermarking",
      "Pattern matching",
      "Tokenization",
      "Masking"
    ],
    "answerIndex": 1
  },
  {
    "id": 8,
    "question": "Which DLP mechanism uses electronic tags applied to documents to track sensitive information?",
    "options": [
      "Watermarking",
      "Pattern matching",
      "Masking",
      "Encryption"
    ],
    "answerIndex": 0
  },
  {
    "id": 9,
    "question": "Which technique replaces sensitive values with randomly generated substitutes stored in a lookup table?",
    "options": [
      "Hashing",
      "Tokenization",
      "Masking",
      "Obfuscation"
    ],
    "answerIndex": 1
  },
  {
    "id": 10,
    "question": "Which data minimization technique redacts sensitive values, such as showing only the last four digits of a credit card?",
    "options": [
      "Tokenization",
      "Masking",
      "Hashing",
      "Encryption"
    ],
    "answerIndex": 1
  },
  {
    "id": 11,
    "question": "Why should hashing not be the only data minimization technique used?",
    "options": [
      "It cannot be reversed by design",
      "It is vulnerable to rainbow table attacks if hashes are exposed",
      "It requires tokenization to work",
      "It is more expensive than masking"
    ],
    "answerIndex": 1
  },
  {
    "id": 12,
    "question": "Which restriction type limits access based on a user’s physical location?",
    "options": [
      "Segmentation restriction",
      "Permission restriction",
      "Geographic restriction",
      "Network isolation"
    ],
    "answerIndex": 2
  },
  {
    "id": 13,
    "question": "Which restriction type limits access based on a user’s role or authorization level?",
    "options": [
      "Geographic restriction",
      "Permission restriction",
      "Tokenization restriction",
      "Data minimization restriction"
    ],
    "answerIndex": 1
  },
  {
    "id": 14,
    "question": "Which technique separates sensitive systems onto different networks with strict communication rules?",
    "options": [
      "Permission restriction",
      "Data minimization",
      "Segmentation",
      "Masking"
    ],
    "answerIndex": 2
  },
  {
    "id": 15,
    "question": "Which approach completely cuts off a system from outside network access?",
    "options": [
      "Isolation",
      "Segmentation",
      "Masking",
      "Tokenization"
    ],
    "answerIndex": 0
  }
]



}

};

export default questions;
