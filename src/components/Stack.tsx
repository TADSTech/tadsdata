


const Stack = () => {
    return (
        <section className="py-16 bg-slate-50 border-y border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Tech Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Data & Analysis */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                        <div className="h-2 w-full bg-blue-600 rounded-t-lg mb-4 -mt-6 -mx-6 w-[calc(100%+3rem)]"></div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Data & Analysis</h3>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                SpreadSheets software (Sheets/Excel)
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                SQL (PostgreSQL / BigQuery)
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                Visualizations (Looker/Tableau)
                            </li>
                        </ul>
                    </div>

                    {/* Workflow & QA */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                        <div className="h-2 w-full bg-slate-400 rounded-t-lg mb-4 -mt-6 -mx-6 w-[calc(100%+3rem)]"></div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Workflow & QA</h3>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                                Data validation & quality checks
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                                Process auditing
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-slate-400 rounded-full mr-2"></span>
                                Documentation (Markdown)
                            </li>
                        </ul>
                    </div>

                    {/* Environment */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                        <div className="h-2 w-full bg-slate-800 rounded-t-lg mb-4 -mt-6 -mx-6 w-[calc(100%+3rem)]"></div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Environment</h3>
                        <ul className="space-y-2 text-slate-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-slate-800 rounded-full mr-2"></span>
                                Linux
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-slate-800 rounded-full mr-2"></span>
                                Git
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stack;
