

export type WorkflowNode = {
    id: string;
    type: 'trigger' | 'action' | 'storage' | 'enrichment' | 'ai';
    label: string;
    description?: string;
    icon?: string; // We'll map string names to icons in the component
};

export type Scenario = {
    id: string;
    title: string;
    description: string;
    messyProcess: string;
    redesign: {
        automationPercent: number;
        brainPercent: number;
        nodes: WorkflowNode[];
    };
};
