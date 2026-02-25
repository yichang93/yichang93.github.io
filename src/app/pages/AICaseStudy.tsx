import React from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import imgCover from "../../assets/ai_case_study.png";
import imgStoryboard from "../../assets/ai_storyboard.png";
import imgDesign1 from "../../assets/ai_design_1.png";
import imgDesign2 from "../../assets/ai_design_2.png";
import imgDesign3 from "../../assets/ai_design_3.png";


export const AICaseStudy = () => {
    return (
        <div className="min-h-screen bg-[#f5f5f5] text-[#171717]">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full bg-[#f5f5f5]/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
                    <Link
                        to="/"
                        className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm transition-hover hover:bg-neutral-50"
                    >
                        <ArrowLeft size={16} />
                        Back
                    </Link>
                </div>
            </nav>

            <main className="mx-auto pt-24 pb-20 max-w-4xl px-4 md:px-8 ">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                        Human-in-the-loop AI for a High-stakes Workflow
                    </h1>
                    <p className="text-xl leading-relaxed text-neutral-600 md:text-2xl">
                        Reduced defect reporting time by 80% thrgough a human-in-the-loop AI system that automates data extraction and report generation, while keeping users in control of the process.
                    </p>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16 overflow-hidden rounded-[24px] shadow-lg"
                >
                    <img
                        src={imgCover}
                        alt="Nexus Dashboard Interface"
                        className="w-full object-cover"
                    />
                </motion.div>

                {/* Overview */}
                <section className="mb-16  grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-12">
                        <h3 className="text-3xl font-bold">Project Overview</h3>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="space-y-6 text-neutral-600">
                            <div className="flex gap-4">
                                <span className="w-24 shrink-0">Platform:</span>
                                <span>iPad</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-24 shrink-0">Role:</span>
                                <span>User Research · UX/UI Design · Data Tracking & Iteration</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-24 shrink-0">Duration:</span>
                                <span>1 Month</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-24 shrink-0">Company:</span>
                                <span>Screening Eagle (a non-destructive testing solutions provider)</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <p className="mb-2 leading-relaxed text-neutral-600">
                            Inspect is used by professionals conducting on-site defect inspections in time-critical and safety-sensitive environments. Accuracy and speed are essential. The results directly influence repair decisions, costs, and compliance outcomes.
                        </p>
                        <p className="leading-relaxed text-neutral-600">
                            The existing reporting flow was reliable but inefficient—users spent a significant portion of their on-site time manually entering multiple fields to elaborate the defects.
                        </p>
                    </div>
                </section>

                <section className="mb-32 ">
                    <h3 className="text-l font-bold mb-4">Deliverables</h3>
                    <div className="flex flex-wrap gap-4">
                        {['UX Research', 'User Interface', 'AI-UX Interaction', 'Event Tracking'].map((tag) => (
                            <div key={tag} className="flex items-center gap-1.5 rounded-full bg-white text-neutral-600 px-3 py-1 shadow-sm">
                                <span>{tag}</span>
                            </div>

                        ))}


                    </div>
                </section>
                {/* Research */}
                <section className="mb-32 relative">
                    <h3 className="text-l font-bold mb-4">Problem + Requirements</h3>
                    <div className="p-12 relative w-full h-full overflow-hidden">
                        <img src={imgStoryboard} alt="Storyboard" className="w-full h-auto rounded-2xl shadow-sm" />
                    </div>
                    <div className="text-neutral-600 mb-8 leading-relaxed">
                        <p>
                            The core problems lie on the following:                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-neutral-600">
                            <li className="font-bold">
                                Introducing AI without disrupting an established mental model
                            </li>
                            <p>
                                Most Inspect users are experienced professionals with deeply ingrained workflows.A disruptive AI-first redesign risked increasing cognitive load, reducing trust, and slowing adoption. The core challenge was not adding AI, but integrating it in a way that felt familiar, optional, and predictable.
                            </p>
                            <li className="font-bold">
                                Balancing automation with responsibility in a high-risk domain
                            </li>
                            <p>
                                Defect reports are high-stakes artifacts. AI errors—such as misclassification or incorrect severity—can lead to serious downstream consequences.
                            </p>
                            <p>
                                The design challenge was to prevent automation bias while still delivering meaningful efficiency gains. Users needed to remain the final decision-maker, without feeling slowed down by additional verification steps.
                            </p>
                        </ul>
                    </div>
                </section>

                {/* Tagline */}
                <section className="mb-32 relative">
                    <h3 className="text-l font-bold mb-4">“AI is not the feature you need to market.”</h3>
                    <div className="text-neutral-600 mb-8 leading-relaxed">
                        <p>
                            The core problems lie on the following:Although, it’s such a trend to label every feature with "AI", I led my team down a different path. I maintained our focus on the quality of the user experience rather than the underlying technology.
                        </p>
                        <p>
                            After all, the goal is to provide the best possible service, regardless of whether it involves computer vision, natural language processing, or any other form of AI.
                        </p>

                    </div>
                </section>

                {/* Solution 1 */}
                <section className="mb-32">
                    <h3 className="text-l font-bold mb-4">Design</h3>
                    <h4 className="text-neutral-600 mb-4">Don’t change the mental model</h4>
                    <div className="text-neutral-600 mb-8 leading-relaxed">
                        <p>
                            The core workflow stays the same. AI works quietly in the background to analyze the defect photos and fill the data.
                            After taking a photo the user can immediately move to the next spot.
                        </p>
                    </div>
                    <div className="relative mb-24">
                        <img src={imgDesign1} alt="Spot Detail WIP" className="mx-auto" />
                    </div>
                    <h4 className="text-neutral-600 mb-4">Draft by default</h4>
                    <div className="text-neutral-600 mb-8 leading-relaxed">
                        <p className="mb-2">
                            We followed a human-in-the-loop approach: AI suggests → users review and decide. AI never makes the final call.
                        </p>
                        <p className="mb-16">
                            To reinforce that, all spots filled by AI starts as a Draft. We introduced a prominent “Approve” action to force a human moment. And a “Pending Review” status on the spot list for easy filtering.
                        </p>
                        <div className="relative mb-24">
                            <img src={imgDesign2} alt="Draft Spot" className="mx-auto" />
                        </div>
                    </div>

                    <h4 className="text-neutral-600 mb-4">Optimize for review</h4>
                    <div className="text-neutral-600 mb-8 leading-relaxed">
                        <p className="mb-2">
                            We redesigned the detail view from the cramped side panel to spacious modal. The new layout allows more content visible above the fold so that it’s easier for the user to review and edit the content without scrolling back and forth.
                        </p>
                        <p className="mb-16">
                            In addition, we introduced clear visual indicators for AI-generated content to avoid the “AI black box”.
                        </p>
                        <div className="relative">
                            <img src={imgDesign3} alt="Draft Spot" className="mx-auto" />
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section className="mb-32">
                    <div className="mb-16">
                        <h3 className="text-l font-bold mb-4">Outcomes</h3>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                        <div className="rounded-2xl bg-white p-8 shadow-sm relative">
                            <h1 className="text-4xl mb-4">80%</h1>
                            <h4 className="mb-4">Reduction in Reporting Time</h4>
                            <p className="text-[#acacac]">Primarily by eliminating manual data entry for standard defects</p>
                        </div>

                        <div className="rounded-2xl bg-white p-8 shadow-sm relative">
                            <h1 className="text-4xl mb-4">70%</h1>
                            <h4 className="mb-4">Adoption</h4>
                            <p className="text-[#acacac]">Pilot users consistently rely on the AI-suggestions after 1-2 uses </p>
                        </div>
                    </div>

                </section>

                {/* Learning */}
                <section className="mb-32">
                    <h3 className="text-l font-bold mb-4">Reflection</h3>
                    <p className="leading-relaxed mb-4">
                        This project reinforced my belief that effective AI design is less about maximizing automation and more about defining clear boundaries between system intelligence and human responsibility.
                    </p>
                    <p>
                        By prioritizing familiarity, transparency, and control, I helped the team deploy AI in a high-stakes workflow with confidence—creating real efficiency gains without compromising trust.
                    </p>
                </section>

                {/* Footer Navigation */}
                <div className="flex justify-center border-t border-neutral-200 pt-12">
                    <Link to="/case-studies/saas-dashboard" className="text-lg font-bold text-[#171717] hover:text-[#32B3CD] hover:underline">
                        Next Project: Saas Platform →
                    </Link>
                </div>

            </main>
        </div >
    );
};
