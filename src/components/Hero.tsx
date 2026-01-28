import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Hero = () => {
    const [executionStatus, setExecutionStatus] = useState<'idle' | 'running' | 'success'>('idle');

    const handleRun = () => {
        if (executionStatus === 'running') return;
        setExecutionStatus('running');
        setTimeout(() => {
            setExecutionStatus('success');
        }, 800);
    };

    return (
        <section className="relative w-full h-screen overflow-hidden bg-slate-50 flex items-center justify-center border-b border-blue-100">
            <InteractiveGrid />

            <div className="relative z-10 max-w-5xl w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-2"
                    >
                        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                            Michael Tunwashe
                        </h1>
                        <p className="text-2xl sm:text-3xl font-semibold text-blue-600">
                            Data & Operations Analyst
                        </p>
                        <div className="flex items-center text-slate-500 font-medium pt-1">
                            <svg className="w-5 h-5 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Lagos, NG (Open to Remote)
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-xl leading-relaxed"
                    >
                        Turning messy processes and datasets into clear, reliable insights using spreadsheets, SQL, and structured analysis. Strong emphasis on data quality, system auditing, and decision support.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 pt-2"
                    >
                        <div className="flex flex-col gap-3 w-full sm:max-w-xs">
                            <button
                                onClick={() => document.getElementById('artifacts')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors w-full"
                            >
                                View Work Artifacts
                            </button>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-colors w-full">
                                <svg className="w-5 h-5 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                Open CV
                            </a>
                        </div>

                        {/* Socials - visually separated but accessible */}
                        <div className="flex items-center gap-6 sm:ml-auto sm:pr-8 pt-4 sm:pt-0">
                            <a href="https://linkedin.com/in/tadstech" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors" title="LinkedIn">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="https://github.com/tadstech" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" title="GitHub">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="mailto:motrenewed@gmail.com" className="text-slate-400 hover:text-blue-600 transition-colors" title="Email">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Pseudo-dashboard / "Working" demo visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-xs font-mono text-slate-400">audit_log_v2.sql</span>
                                <button
                                    onClick={handleRun}
                                    disabled={executionStatus === 'running'}
                                    className={`flex items-center space-x-1 px-2 py-0.5 rounded text-xs font-medium transition-colors ${executionStatus === 'running' ? 'bg-slate-200 text-slate-500 cursor-wait' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                                >
                                    <svg className={`w-3 h-3 ${executionStatus === 'running' ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {executionStatus === 'running'
                                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                        }
                                    </svg>
                                    <span>{executionStatus === 'running' ? 'Running...' : 'Run Query'}</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-6 font-mono text-xs sm:text-sm text-slate-600 space-y-2">
                            <div className="opacity-90">
                                <div className="flex">
                                    <span className="text-blue-600 w-8">01</span>
                                    <span>SELECT</span>
                                </div>
                                <div className="flex">
                                    <span className="text-blue-600 w-8">02</span>
                                    <span className="pl-4">customer_id,</span>
                                </div>
                                <div className="flex">
                                    <span className="text-blue-600 w-8">03</span>
                                    <span className="pl-4">COUNT(DISTINCT transaction_id) as tx_count,</span>
                                </div>
                                <div className="flex">
                                    <span className="text-blue-600 w-8">04</span>
                                    <span className="pl-4">SUM(amount) as total_spend</span>
                                </div>
                                <div className="flex">
                                    <span className="text-blue-600 w-8">05</span>
                                    <span>FROM</span>
                                </div>
                                <div className="flex">
                                    <span className="text-blue-600 w-8">06</span>
                                    <span className="pl-4">raw_transactions</span>
                                </div>
                                <div className="flex">
                                    <span className="text-blue-600 w-8">07</span>
                                    <span>WHERE</span>
                                </div>
                                <div className="flex">
                                    <span className="text-blue-600 w-8">08</span>
                                    <span className="pl-4">status = 'completed'</span>
                                </div>
                                <div className="flex">
                                    <span className="text-blue-600 w-8">09</span>
                                    <span>GROUP BY</span>
                                </div>
                                <div className="flex">
                                    <span className="text-blue-600 w-8">10</span>
                                    <span className="pl-4">1</span>
                                </div>
                            </div>

                            <AnimatePresence>
                                {executionStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-4 pt-4 border-t border-slate-100"
                                    >
                                        <div className="flex items-center text-green-600 mb-2">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span>Query successful (0.12s) - 14,203 rows returned</span>
                                        </div>
                                        <div className="bg-slate-50 p-2 rounded border border-slate-100 overflow-x-auto">
                                            <table className="min-w-full text-left text-xs">
                                                <thead>
                                                    <tr className="border-b border-slate-200">
                                                        <th className="pb-1 text-slate-400 font-medium">customer_id</th>
                                                        <th className="pb-1 text-slate-400 font-medium">tx_count</th>
                                                        <th className="pb-1 text-slate-400 font-medium">total_spend</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-slate-100">
                                                        <td className="py-1">CUST-8821</td>
                                                        <td className="py-1">42</td>
                                                        <td className="py-1">$1,290.00</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-100">
                                                        <td className="py-1">CUST-1029</td>
                                                        <td className="py-1">15</td>
                                                        <td className="py-1">$450.50</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-1">CUST-9912</td>
                                                        <td className="py-1">8</td>
                                                        <td className="py-1">$210.25</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const InteractiveGrid = () => {
    // Generate a static grid of points
    const points = [];
    const rows = 20;
    const cols = 40;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            points.push({ x: j, y: i, id: `${i}-${j}` });
        }
    }

    return (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%" className="w-full h-full">
                <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-blue-900" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
        </div>
    );
};

export default Hero;
