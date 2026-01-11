import type { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
    {
        id: 'inbox-chaos',
        title: 'Client Inbox Organizer',
        description: 'Summarize client emails, extract requirements, flag action items.',
        messyProcess: 'We receive 50 emails a day. My assistant reads them, tries to guess what is urgent, and manually adds tasks to Trello.',
        redesign: {
            automationPercent: 80,
            brainPercent: 20,
            nodes: [
                { id: '1', type: 'trigger', label: 'Email Source', icon: 'Mail' },
                { id: '2', type: 'ai', label: 'Requirement Extractor', description: 'Parse Requests', icon: 'FileText' },
                { id: '3', type: 'storage', label: 'Task Creator', icon: 'CheckSquare' },
                { id: '4', type: 'action', label: 'Action Flag', icon: 'Flag' },
            ],
        },
    },
    {
        id: 'content-factory',
        title: 'Client Profile Generator',
        description: 'Turn messy emails into structured briefs instantly.',
        messyProcess: 'I receive scattered emails with random details. I have to manually copy-paste them into a doc to build a client profile.',
        redesign: {
            automationPercent: 60,
            brainPercent: 40,
            nodes: [
                { id: '1', type: 'trigger', label: 'Email Analysis', description: 'Inbound Stream', icon: 'Mail' },
                { id: '2', type: 'ai', label: 'Profile Extraction', icon: 'User' },
                { id: '3', type: 'storage', label: 'CRM Sync', icon: 'Database' },
                { id: '4', type: 'action', label: 'Brief Gen', description: 'Structured PDF', icon: 'FileText' },
            ],
        },
    },
    {
        id: 'lead-chaser',
        title: 'Status Tracker',
        description: 'See every client\'s stage at a glance (red/yellow/green).',
        messyProcess: 'I manually check emails, Slack, and Trello to figure out who is waiting on what and where they are stuck.',
        redesign: {
            automationPercent: 30,
            brainPercent: 70,
            nodes: [
                { id: '1', type: 'trigger', label: 'Status Check', icon: 'Activity' },
                { id: '2', type: 'ai', label: 'Stage Logic', description: 'Determine State', icon: 'GitBranch' },
                { id: '3', type: 'storage', label: 'Dashboard Update', icon: 'LayoutDashboard' },
                { id: '4', type: 'action', label: 'Alert Team', description: 'Slack/Email', icon: 'Bell' },
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
