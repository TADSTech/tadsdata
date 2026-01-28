



const ARTIFACTS = [
    {
        id: 'spreadsheet-system',
        title: 'Operational Logic & Tracker',
        description: 'A realistic operational tracking system with strict data validation, clear metrics, and no "magic numbers". Designed to prevent user error and provide instant visibility into KPIs.',
        type: 'Operations',
        typeColor: 'blue',
        tool: 'Google Sheets',
        cta: 'View Project',
        icon: (
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        ),
        placeholderText: 'Spreadsheet Screenshot Placeholder'
    },
    {
        id: 'data-audit',
        title: 'Public Dataset Audit',
        description: 'A thorough audit of a public dataset. Identifies inconsistencies, missing values, and broken assumptions. Includes a clear summary of findings and recommendations for data cleaning.',
        type: 'Audit',
        typeColor: 'amber',
        tool: 'Doc / PDF',
        cta: 'Read Report',
        reverse: true,
        icon: (
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
        ),
        placeholderText: 'Audit Report Placeholder'
    },
    {
        id: 'sql-insight',
        title: 'SQL Insight Note',
        description: 'A collection of 5-7 clean SQL queries that answer real business questions. Each query is accompanied by a plain-English explanation of the "why" and "how".',
        type: 'Analysis',
        typeColor: 'purple',
        tool: 'PostgreSQL',
        cta: 'View Queries',
        icon: (
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
        ),
        placeholderText: 'SQL Logic Placeholder'
    }
];

const Artifacts = () => {
    return (
        <section id="artifacts" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Work Artifacts</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Proof of competence. Real-world examples of how I organize process, audit data, and derive insights.
                    </p>
                </div>

                <div className="space-y-16">
                    {ARTIFACTS.map((artifact, index) => (
                        <div key={artifact.id}>
                            <div className={`flex flex-col ${artifact.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 group`}>
                                <div className="w-full md:w-1/2 bg-slate-100 aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300 group-hover:border-blue-400 transition-colors cursor-pointer relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                    <div className="text-slate-400 text-center">
                                        {artifact.icon}
                                        <span className="font-medium">{artifact.placeholderText}</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="flex items-center mb-2">
                                        <span className={`bg-${artifact.typeColor}-100 text-${artifact.typeColor}-800 text-xs font-semibold px-2.5 py-0.5 rounded uppercase tracking-wide`}>
                                            {artifact.type}
                                        </span>
                                        <span className="ml-3 text-sm text-slate-500">{artifact.tool}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {artifact.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6">
                                        {artifact.description}
                                    </p>
                                    <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center">
                                        {artifact.cta} <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>
                                </div>
                            </div>
                            {index < ARTIFACTS.length - 1 && <hr className="border-slate-100 mt-16" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Artifacts;
