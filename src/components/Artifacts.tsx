
import SpreadsheetImage from '../assets/images/multi_device.png';
import AuditImage from '../assets/images/data_analysis.png';
import SQLStudiesImage from '../assets/images/Projects/sqlstudies.png';
import SQLPGImage from '../assets/images/Projects/sqlpg.png';

const ARTIFACTS = [
    {
        id: 'spreadsheet-system',
        title: 'Operational Logic & Tracker',
        description: 'A realistic operational tracking system with strict data validation, clear metrics, and no "magic numbers". Designed to prevent user error and provide instant visibility into KPIs.',
        type: 'Operations',
        typeColor: 'blue',
        tool: 'Google Sheets',
        cta: 'View Project',
        link: '#',
        image: SpreadsheetImage,
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
        link: '#',
        image: AuditImage,
        icon: (
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
        ),
        placeholderText: 'Audit Report Placeholder'
    },
    {
        id: 'sql-insight',
        title: 'SQL Insight Note',
        description: 'A collection of clean SQL queries that answer real business questions in an Interractive web app that explains the "why" and "how" of each query.',
        type: 'Analysis',
        typeColor: 'purple',
        tool: 'PostgreSQL',
        cta: 'View Queries',
        link: 'https://cleanqueries.web.app/',
        image: SQLPGImage,
        icon: (
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
        ),
        placeholderText: 'SQL Logic Placeholder'
    },
    {
        id: 'sql-case-studies',
        title: 'SQL Case Studies Repository',
        description: 'Advanced SQL Patterns & Optimization. Covers window functions, CTEs, and optimization patterns using real-world business scenarios with sample data.',
        type: 'Repository',
        typeColor: 'emerald',
        tool: 'PostgreSQL, SQLite, DuckDB',
        cta: 'View Studies',
        reverse: true,
        link: 'https://tadstech.github.io/SQL-STUDIES/',
        image: SQLStudiesImage,
        icon: (
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        ),
        placeholderText: 'Repository Preview'
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
                                <a href={artifact.link} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 block">
                                    <div className="bg-slate-100 aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300 group-hover:border-blue-400 transition-all duration-300 cursor-pointer relative overflow-hidden">
                                        {artifact.image ? (
                                            <img src={artifact.image} alt={artifact.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                                <div className="text-slate-400 text-center">
                                                    {artifact.icon}
                                                    <span className="font-medium">{artifact.placeholderText}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </a>
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
                                    <a href={artifact.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center">
                                        {artifact.cta} <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </a>
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
