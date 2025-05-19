// src/data/questions.js
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
          "A file that’s available but encrypted without a key.",
          "A backup copy of a file.",
          "A file that's shared with unauthorized users.",
          "A file that’s stored on an external drive.",
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
        question: "What is the core idea behind the Biba Model’s 'no write up' rule?",
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
  },
};

export default questions;
