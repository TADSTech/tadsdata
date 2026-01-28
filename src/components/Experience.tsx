


const Experience = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Positioning</h2>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                        <p className="text-xl text-slate-800 italic">
                            "Data & Operations Analyst focused on turning messy processes and datasets into clear, reliable insights using spreadsheets, SQL, and structured analysis. Strong emphasis on data quality, system auditing, and decision support."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">01.</span>
                            What I do
                        </h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Build reliable operational trackers using advanced Spreadsheet functions.
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Clean and audit datasets to identify inconsistency and business risks.
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Write clean SQL queries to answer specific business questions.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">02.</span>
                            How I think
                        </h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-slate-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                Clarify business questions before writing code.
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-slate-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                Check assumptions and validate data quality first.
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-slate-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                Documentation is part of the deliverable, not an afterthought.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
