import type { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
    {
        id: 'inbox-chaos',
        title: 'Inbox Chaos',
        description: 'Automate invoice processing and data entry.',
        messyProcess: 'We receive 50 invoices a day via email. My assistant downloads them, renames them, and types the totals into Excel.',
        redesign: {
            automationPercent: 80,
            brainPercent: 20,
            nodes: [
                { id: '1', type: 'trigger', label: 'Gmail Watcher', icon: 'Mail' },
                { id: '2', type: 'ai', label: 'AI Doc Parser', description: 'Extracts Line Items', icon: 'FileText' },
                { id: '3', type: 'storage', label: 'QuickBooks Sync', icon: 'Database' },
                { id: '4', type: 'storage', label: 'Google Sheets', icon: 'Sheet' },
            ],
        },
    },
    {
        id: 'content-factory',
        title: 'Content Factory',
        description: 'Turn one recording into multi-platform content.',
        messyProcess: 'I record a 1-hour podcast. I have to manually listen, find clips, write 5 LinkedIn posts, and create a newsletter.',
        redesign: {
            automationPercent: 40,
            brainPercent: 60,
            nodes: [
                { id: '1', type: 'trigger', label: 'File Upload', description: 'S3 / Drive', icon: 'Upload' },
                { id: '2', type: 'ai', label: 'GPT-4o Transcription', icon: 'Mic' },
                { id: '3', type: 'ai', label: 'Agentic Summarization', icon: 'Brain' },
                { id: '4', type: 'action', label: 'Content Gen', description: 'LinkedIn & Newsletter', icon: 'PenTool' },
            ],
        },
    },
    {
        id: 'lead-chaser',
        title: 'Lead Chaser',
        description: 'Enrich and qualify leads automatically.',
        messyProcess: 'Leads come from the website. I manually check their LinkedIn, see if they are a fit, and then write them an email.',
        redesign: {
            automationPercent: 30,
            brainPercent: 70,
            nodes: [
                { id: '1', type: 'trigger', label: 'Form Submission', icon: 'FormInput' },
                { id: '2', type: 'enrichment', label: 'Enrichment', description: 'Clay / Clearbit', icon: 'Search' },
                { id: '3', type: 'ai', label: 'AI Lead Scoring', icon: 'Star' },
                { id: '4', type: 'action', label: 'Outreach Draft', description: 'Personalized Email', icon: 'Send' },
            ],
        },
    },
    {
        id: 'evaluate-design',
        title: 'Evaluate Design',
        description: 'Audit menus against best practices instanty.',
        messyProcess: 'I manually check if the font sizes are readable, if colors match the brand guide, and if we have enough vegetarian options.',
        redesign: {
            automationPercent: 90,
            brainPercent: 10,
            nodes: [
                { id: '1', type: 'trigger', label: 'Menu Upload', icon: 'Upload' },
                { id: '2', type: 'ai', label: 'AI Vision Check', description: 'Readability & Layout', icon: 'Eye' },
                { id: '3', type: 'ai', label: 'Brand Guardrails', description: 'Style Compliance', icon: 'Shield' },
                { id: '4', type: 'action', label: 'Report Card', description: 'PDF Export', icon: 'FileText' },
            ],
        },
    },
    {
        id: 'ideation-tool',
        title: 'Ideation Tool',
        description: 'Generate data-backed menu concepts.',
        messyProcess: 'Sales are down. I sit in a room with the chef and stare at a blank whiteboard trying to think of new specials.',
        redesign: {
            automationPercent: 20,
            brainPercent: 80,
            nodes: [
                { id: '1', type: 'trigger', label: 'Sales Data', icon: 'BarChart' },
                { id: '2', type: 'ai', label: 'Trend Analysis', description: 'Social & Local', icon: 'TrendingUp' },
                { id: '3', type: 'ai', label: 'GenAI Brainstorm', description: 'Concept Generation', icon: 'Lightbulb' },
                { id: '4', type: 'action', label: 'Visual Concepts', description: 'Image Gen', icon: 'Image' },
            ],
        },
    },
    {
        id: 'discovery',
        title: 'Discovery',
        description: 'Learn from past menu performance.',
        messyProcess: 'I dig through old emails and Google Drive folders to find what menu worked well last summer.',
        redesign: {
            automationPercent: 60,
            brainPercent: 40,
            nodes: [
                { id: '1', type: 'trigger', label: 'Archive Connect', description: 'Drive / Email', icon: 'HardDrive' },
                { id: '2', type: 'ai', label: 'Feedback Extraction', description: 'Reviews & Notes', icon: 'MessageSquare' },
                { id: '3', type: 'ai', label: 'Pattern Rec', icon: 'GitMerge' },
                { id: '4', type: 'action', label: 'Insights Dash', icon: 'LayoutDashboard' },
            ],
        },
    },
    {
        id: 'artifacts-processing',
        title: 'Artifacts Processing',
        description: 'Enhance and standardize visual assets.',
        messyProcess: 'The food photos from the chef are dark and blurry. I have to spend hours in Photoshop fixing each one.',
        redesign: {
            automationPercent: 95,
            brainPercent: 5,
            nodes: [
                { id: '1', type: 'trigger', label: 'Raw Photos', icon: 'Image' },
                { id: '2', type: 'ai', label: 'AI Upscale', icon: 'Maximize' },
                { id: '3', type: 'ai', label: 'Color Correction', icon: 'Sun' },
                { id: '4', type: 'storage', label: 'Asset Library', icon: 'Database' },
            ],
        },
    }
];
