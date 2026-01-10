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
];
