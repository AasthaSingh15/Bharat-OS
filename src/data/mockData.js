export const stats = [
  { label: 'Documents Stored', value: 24, suffix: '', change: '+3 this week', icon: 'FileText' },
  { label: 'Active Opportunities', value: 18, suffix: '', change: '6 new today', icon: 'TrendingUp' },
  { label: 'Schemes Matched', value: 7, suffix: '', change: '2 eligible now', icon: 'Shield' },
  { label: 'AI Conversations', value: 142, suffix: '', change: '+12 today', icon: 'MessageSquare' },
]

export const lifeScore = {
  score: 94,
  label: 'AI Life Score',
  summary: 'Your identity, benefits, and career graph are highly optimized.',
  trend: '+8 this month',
  factors: [
    { label: 'Documents uploaded', value: 96, detail: '24 verified records' },
    { label: 'Government schemes matched', value: 92, detail: '7 active matches' },
    { label: 'Opportunities matched', value: 95, detail: '18 career signals' },
    { label: 'Profile completeness', value: 88, detail: 'Income proof pending' },
    { label: 'Pending actions', value: 90, detail: '3 actions due' },
  ],
}

export const impactMetrics = [
  { label: 'Scholarships', value: 150000, prefix: '₹', suffix: '', note: 'eligible education support' },
  { label: 'Government Benefits', value: 500000, prefix: '₹', suffix: '', note: 'health and welfare cover' },
  { label: 'Internships', value: 4, prefix: '', suffix: '', note: 'high-match openings' },
  { label: 'Hackathons', value: 3, prefix: '', suffix: '', note: 'innovation challenges' },
]

export const lifeTimeline = [
  { id: 1, title: 'Uploaded Aadhaar', meta: 'Identity verified in Memory Vault', type: 'vault' },
  { id: 2, title: 'Matched PM Scholarship', meta: 'Education benefit detected', type: 'scheme' },
  { id: 3, title: 'Found Smart India Hackathon', meta: '95% AI and GovTech match', type: 'opportunity' },
  { id: 4, title: 'Suggested Internship', meta: 'ISRO research internship shortlisted', type: 'career' },
  { id: 5, title: 'Generated Reminder', meta: 'Income certificate due tomorrow', type: 'alert' },
]

export const copilotSummary = {
  unlockedBenefits: 380000,
  status: '3 urgent actions can unlock additional schemes this week.',
  suggestedActions: [
    {
      id: 1,
      title: 'Apply Smart India Hackathon',
      detail: '95% match detected for AI and public service innovation.',
      deadline: 'Aug 1, 2026',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Upload Income Certificate',
      detail: 'Unlock 3 additional schemes and scholarship filters.',
      deadline: 'Tomorrow',
      priority: 'urgent',
    },
    {
      id: 3,
      title: 'Complete PM Scholarship',
      detail: 'Application is 72% ready from your saved documents.',
      deadline: 'Jun 30, 2026',
      priority: 'medium',
    },
  ],
  alerts: [
    'Income certificate pending verification',
    'PM Scholarship deadline approaching',
    'Ayushman Bharat eligibility increased to 92%',
  ],
}

export const chartData = {
  weeklyActivity: [
    { day: 'Mon', docs: 4, opps: 6, ai: 12 },
    { day: 'Tue', docs: 6, opps: 8, ai: 18 },
    { day: 'Wed', docs: 3, opps: 5, ai: 22 },
    { day: 'Thu', docs: 8, opps: 11, ai: 15 },
    { day: 'Fri', docs: 5, opps: 9, ai: 28 },
    { day: 'Sat', docs: 2, opps: 4, ai: 19 },
    { day: 'Sun', docs: 7, opps: 7, ai: 24 },
  ],
  opportunityMix: [
    { label: 'Scholarships', value: 32, color: '#a78bfa' },
    { label: 'Internships', value: 28, color: '#60a5fa' },
    { label: 'Jobs', value: 22, color: '#22d3ee' },
    { label: 'Hackathons', value: 18, color: '#818cf8' },
  ],
}

export const aiInsights = [
  {
    id: 1,
    type: 'priority',
    title: 'High-match scheme detected',
    message: 'Ayushman Bharat eligibility jumped to 92% after your Aadhaar upload.',
    action: 'View scheme',
    confidence: 94,
  },
  {
    id: 2,
    type: 'opportunity',
    title: 'Deadline in 18 days',
    message: 'ISRO internship matches your profile at 89%. Apply before Jul 10.',
    action: 'Apply now',
    confidence: 89,
  },
  {
    id: 3,
    type: 'vault',
    title: 'Vault optimization',
    message: 'Upload income certificate to unlock 2 additional PM scheme matches.',
    action: 'Upload doc',
    confidence: 87,
  },
  {
    id: 4,
    type: 'trend',
    title: 'Engagement rising',
    message: 'Your AI usage is up 34% this week — peak productivity on Fridays.',
    action: 'See analytics',
    confidence: 91,
  },
]

export const recommendations = [
  {
    id: 1,
    title: 'Apply to Smart India Hackathon',
    reason: '95% profile match · AI & GovTech track',
    priority: 'high',
    icon: 'Rocket',
  },
  {
    id: 2,
    title: 'Complete Ayushman Bharat enrollment',
    reason: 'Eligible now · Health cover ₹5L',
    priority: 'medium',
    icon: 'Shield',
  },
  {
    id: 3,
    title: 'Index your income certificate',
    reason: 'Unlocks 2 new scheme matches',
    priority: 'medium',
    icon: 'FileText',
  },
]

export const highlights = [
  {
    id: 1,
    title: 'PM Scholarship deadline approaching',
    description: 'Apply before June 30 for the Prime Minister Scholarship Scheme.',
    tag: 'Urgent',
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'New internship at ISRO',
    description: 'Summer internship program now open for engineering students.',
    tag: 'New',
    time: '5 hours ago',
  },
  {
    id: 3,
    title: 'Document indexed: Aadhaar Card',
    description: 'Your Aadhaar has been securely stored in Memory Vault.',
    tag: 'Vault',
    time: 'Yesterday',
  },
]

export const opportunities = [
  {
    id: 1,
    title: 'Google India STEP Internship',
    org: 'Google',
    type: 'Internship',
    deadline: 'Jul 15, 2026',
    match: 92,
  },
  {
    id: 2,
    title: 'Smart India Hackathon 2026',
    org: 'AICTE',
    type: 'Hackathon',
    deadline: 'Aug 1, 2026',
    match: 88,
  },
  {
    id: 3,
    title: 'Tata Scholarship for Women',
    org: 'Tata Trusts',
    type: 'Scholarship',
    deadline: 'Jul 30, 2026',
    match: 85,
  },
]

export const reminders = [
  { id: 1, text: 'Submit income certificate for PM-KISAN', due: 'Tomorrow', priority: 'high' },
  { id: 2, text: 'Renew DigiLocker documents', due: 'Jun 28', priority: 'medium' },
  { id: 3, text: 'Complete AI Assistant onboarding quiz', due: 'Jun 30', priority: 'low' },
]

export const documents = [
  {
    id: 1,
    name: 'Aadhaar Card',
    category: 'Identity',
    size: '1.2 MB',
    uploaded: 'Jun 10, 2026',
    tags: ['Government', 'Verified'],
  },
  {
    id: 2,
    name: '10th Marksheet',
    category: 'Education',
    size: '890 KB',
    uploaded: 'Jun 8, 2026',
    tags: ['Academic'],
  },
  {
    id: 3,
    name: 'Income Certificate',
    category: 'Financial',
    size: '650 KB',
    uploaded: 'Jun 5, 2026',
    tags: ['Government', 'Pending Review'],
  },
  {
    id: 4,
    name: 'Passport Photo',
    category: 'Identity',
    size: '320 KB',
    uploaded: 'Jun 1, 2026',
    tags: ['Photo'],
  },
  {
    id: 5,
    name: 'College ID Card',
    category: 'Education',
    size: '540 KB',
    uploaded: 'May 28, 2026',
    tags: ['Academic', 'Verified'],
  },
  {
    id: 6,
    name: 'Bank Passbook',
    category: 'Financial',
    size: '1.1 MB',
    uploaded: 'May 20, 2026',
    tags: ['Banking'],
  },
]

export const opportunityCategories = {
  scholarships: [
    {
      id: 1,
      title: 'National Merit Scholarship',
      org: 'Ministry of Education',
      amount: '₹50,000/year',
      deadline: 'Jul 31, 2026',
      match: 94,
    },
    {
      id: 2,
      title: 'Post Matric Scholarship (SC/ST)',
      org: 'State Govt.',
      amount: 'Full tuition',
      deadline: 'Aug 15, 2026',
      match: 87,
    },
    {
      id: 3,
      title: 'Inspire Scholarship',
      org: 'DST India',
      amount: '₹80,000/year',
      deadline: 'Sep 1, 2026',
      match: 82,
    },
  ],
  internships: [
    {
      id: 4,
      title: 'Microsoft India Internship',
      org: 'Microsoft',
      amount: '₹60,000/month',
      deadline: 'Jul 20, 2026',
      match: 91,
    },
    {
      id: 5,
      title: 'ISRO Research Internship',
      org: 'ISRO',
      amount: 'Stipend + Certificate',
      deadline: 'Jul 10, 2026',
      match: 89,
    },
    {
      id: 6,
      title: 'Razorpay Engineering Intern',
      org: 'Razorpay',
      amount: '₹45,000/month',
      deadline: 'Aug 5, 2026',
      match: 86,
    },
  ],
  jobs: [
    {
      id: 7,
      title: 'Graduate Trainee – SDE',
      org: 'Infosys',
      amount: '₹4.5 LPA',
      deadline: 'Rolling',
      match: 88,
    },
    {
      id: 8,
      title: 'Junior Data Analyst',
      org: 'Flipkart',
      amount: '₹6 LPA',
      deadline: 'Jul 25, 2026',
      match: 84,
    },
    {
      id: 9,
      title: 'Campus Hire – Full Stack',
      org: 'Zoho',
      amount: '₹7 LPA',
      deadline: 'Aug 10, 2026',
      match: 90,
    },
  ],
  hackathons: [
    {
      id: 10,
      title: 'Smart India Hackathon 2026',
      org: 'AICTE',
      amount: '₹1 Lakh prize',
      deadline: 'Aug 1, 2026',
      match: 95,
    },
    {
      id: 11,
      title: 'Google Code Jam India',
      org: 'Google',
      amount: 'Global recognition',
      deadline: 'Jul 18, 2026',
      match: 92,
    },
    {
      id: 12,
      title: 'Bharat AI Challenge',
      org: 'NITI Aayog',
      amount: '₹5 Lakh grant',
      deadline: 'Sep 15, 2026',
      match: 88,
    },
  ],
}

export const schemes = [
  {
    id: 1,
    name: 'PM-KISAN',
    description: 'Income support of ₹6,000/year for eligible farmer families.',
    benefit: '₹6,000/year',
    eligibility: 78,
    status: 'Eligible',
    category: 'Agriculture',
  },
  {
    id: 2,
    name: 'Ayushman Bharat',
    description: 'Health cover up to ₹5 lakh per family per year.',
    benefit: '₹5 Lakh cover',
    eligibility: 92,
    status: 'Eligible',
    category: 'Healthcare',
  },
  {
    id: 3,
    name: 'PM Scholarship Scheme',
    description: 'Scholarships for wards of armed forces personnel.',
    benefit: '₹2,500–₹3,000/month',
    eligibility: 45,
    status: 'Partial Match',
    category: 'Education',
  },
  {
    id: 4,
    name: 'Stand-Up India',
    description: 'Loans for SC/ST and women entrepreneurs.',
    benefit: '₹10L–₹1Cr loan',
    eligibility: 62,
    status: 'Review Required',
    category: 'Business',
  },
  {
    id: 5,
    name: 'MUDRA Yojana',
    description: 'Collateral-free loans for micro and small enterprises.',
    benefit: 'Up to ₹10 Lakh',
    eligibility: 55,
    status: 'Partial Match',
    category: 'Business',
  },
  {
    id: 6,
    name: 'Digital India Internship',
    description: 'Paid internships in government digital initiatives.',
    benefit: 'Stipend + Experience',
    eligibility: 88,
    status: 'Eligible',
    category: 'Employment',
  },
]

export const aiResponses = [
  "Based on your profile, you're eligible for 3 government schemes. Would you like me to walk you through the PM Scholarship application?",
  "I've found 5 new internship opportunities matching your skills in React and AI. The ISRO internship closes in 18 days.",
  "Your Memory Vault has 24 documents. I recommend uploading your income certificate to unlock 2 additional scheme matches.",
  "Great question! Ayushman Bharat provides health coverage up to ₹5 lakh. Your eligibility score is 92% based on your stored documents.",
  "I can help you draft a scholarship application. Share your academic details or let me pull them from your vault.",
  "The Smart India Hackathon 2026 aligns well with your profile. Your match score is 95%. Shall I add it to your reminders?",
]

export const initialChatMessages = [
  {
    id: 1,
    role: 'assistant',
    content:
      "Hello Aastha! I'm BharatOS AI, your personal assistant for opportunities, schemes, and document management. How can I help you today?",
    time: '10:00 AM',
  },
]
