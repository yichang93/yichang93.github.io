import React from "react";
import { ArrowLeft, Clock, TabletSmartphone, Box, Layers, RefreshCw, Users } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";
import imgCover from "../../assets/ds_case_study.png";
import imgTypographyBefore from "../../assets/ds_typo_before.png";
import imgUIGReference from "../../assets/ds_typo_reference.png";
import imgTypographyAfter from "../../assets/ds_typo_after.png";
import imgColor1 from "../../assets/ds_color_1.png";
import imgColor2 from "../../assets/ds_color_2.png";
import imgColor3 from "../../assets/ds_color_3.png";
import imgTradeoff from "../../assets/ds_tradeoff.png";

interface StatCardProps {
    icon: React.ElementType;
    value: string;
    label: string;
    subtext?: string;
}

const TypographyCarousel = () => {
    const steps = [
        {
            step: "Step 1",
            title: "Comprehensive Audit of Existing Typography",
            content: (
                <div className="mb-4">
                    <p>Documented every typography instance used across all apps, including font size, weight, line height, and usage context.</p>
                </div>
            ),
            image: imgTypographyBefore
        },
        {
            step: "Step 2",
            title: "Benchmarking Against Platform Standards",
            content: (
                <div className="space-y-4 mb-4">
                    <p>I referenced Apple’s Human Interface Guidelines (HIG) to ensure the system aligned with platform expectations.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
                        <li>Hierarchy structure</li>
                        <li>Dynamic type scaling</li>
                        <li>Readability standards</li>
                        <li>Accessibility considerations</li>
                    </ul>
                </div>
            ),
            image: imgUIGReference
        },
        {
            step: "Step 3",
            title: "Functional Grouping and Reduction",
            content: (
                <div className="space-y-4 mb-4">
                    <p>Instead of comparing styles visually, I grouped typography by function to ensure the visual consistent in the future designs.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600">
                        <li>Page titles</li>
                        <li>Section headers</li>
                        <li>Body text</li>
                        <li>Captions / metadata</li>
                    </ul>
                </div>
            ),
            image: imgTypographyAfter
        },
        {
            step: "Step 4",
            title: "Rapid Prototyping and Internal Review",
            content: (
                <div className="space-y-4 mb-4">
                    <p>I applied the reduced type scale to key screens in Figma and conducted quick visual validation with the entire design team.</p>
                </div>
            ),
            image: imgTypographyAfter
        },
        {
            step: "Step 5",
            title: "Pilot Implementation and Visual Regression Testing",
            content: (
                <div className="space-y-4 mb-4">
                    <p>Together with developers we implemented the new typography in selected pilot apps.</p>
                    <p>
                        This minimized risk before full rollout, I used Figma’s “Difference” blend mode to compare before-and-after screens, allowing us to detect unintended layout shifts and spacing inconsistencies.
                    </p>
                </div>
            ),
            image: imgTypographyAfter
        },
        {
            step: "Step 6",
            title: "System-Wide Rollout",
            content: (
                <div className="space-y-4 mb-4">
                    <p>After validation, we finalized the type scale and implemented it across all apps.</p>
                    <ul>
                        <li>Updating design tokens</li>
                        <li>Syncing with engineering variables</li>
                        <li>Replacing legacy styles</li>
                        <li>Documenting usage guidelines</li>
                    </ul>
                </div>
            ),
            image: imgTypographyAfter
        }
    ];
    const handleCarouselControl = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });

    }


    return (
        <div className="">
            <div className="carousel carousel-vertical rounded-box h-100 space-y-6">
                {steps.map((item, index) => (
                    <div key={index} id={`item-${index}`} className="carousel-item h-100 bg-white border border-neutral-200 rounded-xl overflow-hidden flex flex-row">
                        <div className="p-6 flex-grow flex flex-col justify-start overflow-hidden">
                            <div className="flex items-center gap-3 mb-2 shrink-0">
                                <span className="text-xs tracking-widest text-neutral-500 bg-neutral-100 px-2 py-1 rounded">{item.step}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-neutral-900 leading-tight shrink-0">{item.title}</h3>
                            <div className="text-neutral-600 text-sm leading-relaxed overflow-hidden relative">
                                <div className="">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                        <div className="w-2/3 border-l border-neutral-100 bg-neutral-50 h-full relative shrink-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-contain p-4"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                {steps.map((item, index) => (
                    <a key={index} href={`#item-${index}`}
                        className="rounded-full bg-white px-3 py-1 shadow-sm"
                        onClick={(e) => handleCarouselControl(e, `item-${index}`)}
                    >
                        {index + 1}
                    </a>

                ))}
            </div>
        </div>

    );
};

const StatCard = ({ icon: Icon, value, label, subtext }: StatCardProps) => (
    <div className={`p-8 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-neutral-400 transition-colors group`}>
        <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded-full bg-white text-neutral-900 border border-neutral-200">
                <Icon size={24} />
            </div>
        </div>
        <h3 className="text-4xl font-bold text-neutral-900 mb-2 group-hover:scale-105 transition-transform origin-left">{value}</h3>
        <p className="text-neutral-900 font-medium mb-1">{label}</p>
        {subtext && <p className="text-neutral-500 text-sm">{subtext}</p>}
    </div>
);


export const DesignSystemCaseStudy = () => {
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                        Building a Design System from the Ground Up
                    </h1>
                    <p className="text-xl leading-relaxed text-neutral-600 md:text-2xl">
                        Reduced visual entropy and transformed fragmented UI patterns into a cohesive, scalable design system across products.
                    </p>
                </motion.div>
                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16 overflow-hidden rounded-[24px]"
                >
                    <img
                        src={imgCover}
                        alt="Design System Cover Image"
                        className="w-full object-cover"
                    />
                </motion.div>

                {/* Overview */}
                <section className="mb-16 grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-12">
                        <h3 className="text-3xl">Project Overview</h3>
                    </div>

                    <div className="lg:col-span-12">
                        <div className="space-y-6 text-neutral-600">
                            <div className="flex gap-4">
                                <span className="w-24 shrink-0">Platform:</span>
                                <div className="flex items-center gap-2">
                                    <TabletSmartphone size={16} /> iOS (9 iPad apps & 3 iPhone apps)
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-24 shrink-0">Team:</span>
                                <span>My self (lead IC), 1 UI designer, 1 frontend engineer, 1 iOS engineer</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-24 shrink-0">Duration:</span>
                                <span>2 Years (developed alongside ongoing product initiatives)</span>
                            </div>

                        </div>
                    </div>

                    <div className="lg:col-span-12 flex flex-col justify-center">
                        <p className="mb-2 leading-relaxed text-neutral-600">
                            When I joined, there was no design system in place. Each product had evolved independently, shaped by different designers at different stages of growth. Over time, this led to visible inconsistencies — but more importantly, structural fragmentation.
                        </p>
                        <p className="leading-relaxed text-neutral-600">
                            Buttons looked similar but behaved differently. Typography varied subtly across pages. Spacing felt uneven. Interaction states weren’t predictable. Individually, none of these issues seemed critical. Together, they made the overall experience feel disjointed.
                        </p>
                        <p className="leading-relaxed text-neutral-600">
                            The challenge became more urgent as the company set out to build a connected ecosystem covering the entire lifecycle of structure inspection. Without a shared foundation, scaling the experience across products would only amplify the inconsistency.
                        </p>
                    </div>
                </section>

                {/* Research */}
                <section className="mb-32">
                    <div className="mb-12">
                        <h3 className="text-3xl mb-12">Observed State</h3>
                        <p className="text-neutral-600">The first step wasn’t building components. It was understanding what already existed.
                            I involved all the product designers & a few members of engineering team to conduct a comprehensive interface audit across all products, mapping recurring UI patterns and identifying variation clusters. </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard
                            icon={Box}
                            value="100+"
                            label="Button Variations"
                            subtext="Across 12 products"
                        />
                        <StatCard
                            icon={Layers}
                            value="45"
                            label="Typography Styles"
                            subtext="No hierarchy alignment"
                        />
                        <StatCard
                            icon={RefreshCw}
                            value="40%"
                            label="Duplicated Code"
                            subtext="Frontend components"
                        />
                        <StatCard
                            icon={Users}
                            value="High"
                            label="Misalignment"
                            subtext="Design vs Engineering"
                        />
                    </div>
                </section>

                {/* Phase 1 */}
                <section className="mb-32 relative">
                    <span className="text-neutral-500">Phase 1</span>
                    <h3 className="text-3xl mb-4">Visual Reduction: Bringing Order to Entropy</h3>
                    <div className="mb-8 leading-relaxed">
                        <p className="text-neutral-600">
                            Rather than selecting a “best-looking” version of each element, I focused on uncovering the underlying structure.
                        </p>
                        <h5 className="text-xl mt-6 mb-2">Typography</h5>
                        <p className="text-neutral-600 mb-6">
                            The goal wasn’t simplification for aesthetics. It was revealing structure beneath surface variation.
                        </p>
                        <TypographyCarousel />

                        <h5 className="text-xl mt-12 mb-2">Color</h5>
                        <p className="text-neutral-600">Color required a similar reframing. Instead of preserving individual hex values, I translated colors into semantic roles such as primary, success, warning, and neutral. This shifted color from decoration to communication, while also making future expansion and theming possible.</p>
                    </div>
                    <div className="flex items-start justify-center w-full gap-6">
                        <img
                            src={imgColor1}
                            alt="Color System Example"
                            className="w-1/3 h-auto rounded-lg border border-neutral-200"
                        />
                        <img
                            src={imgColor2}
                            alt="Color System Example"
                            className="w-1/3 h-auto rounded-lg border border-neutral-200"
                        />
                        <img
                            src={imgColor3}
                            alt="Color System Example"
                            className="w-1/3 h-auto rounded-lg border border-neutral-200"
                        />
                    </div>


                    <h5 className="text-xl mt-12 mb-2">Others</h5>
                    <p className="text-neutral-600">I applied the same reduction approach to spacing, border radius, and iconography. I extracted all existing values and visual treatments across products, then synthesized them into a smaller, consistent set of foundational elements. For these primitives, the goal was predictability and coherence — introducing clear rules that eliminated arbitrary decisions accumulated over time.</p>
                    <p className="text-neutral-600 mt-6">The goal wasn’t simplification for aesthetics. It was revealing structure beneath surface variation.</p>



                </section>

                {/* Phase 2 */}
                <section className="mb-32 relative">
                    <span className="text-neutral-500">Phase 2</span>
                    <h3 className="text-3xl mb-4">Turning Visual Logic into System Architecture</h3>
                    <div className="text-neutral-600 mb-8 leading-relaxed flex gap-4 flex-col">
                        <p>Once the visual foundation was stable, we began building the component system.</p>
                        <p>What mattered most to me was that components weren’t just visual assets in Figma. They needed to operate as structured, flexible units in production.</p>
                        <p>I worked closely with engineers to translate design tokens directly into code variables. Naming conventions were aligned early. Variants in Figma mirrored props in React and iOS. We didn’t treat handoff as a separate phase — implementation was embedded in the design process.</p>
                        <p><strong>Buttons</strong> are a good example. Instead of maintaining 17 separate visual variations, we defined them structurally through hierarchy, size, and state. What previously appeared as many visual differences became a concise set of configurable rules. In code, these were managed through consistent props and shared logic, eliminating duplication and edge-case drift.</p>
                        <p>This tight alignment significantly reduced interpretation gaps. Design decisions were validated in real environments, not just static mockups.
                        </p>
                    </div>

                </section>


                {/* Trade Off */}
                <section className="bg-neutral-900 text-white rounded-3xl mb-32">
                    <div className="grid md:grid-cols-2 gap-16 items-center p-12">
                        <div>
                            <h2 className="text-2xl mb-6">Balancing Consistency and Product Evolution</h2>
                            <p className="text-neutral-400 mb-8 leading-relaxed">
                                As the system matured, a natural tension emerged. Product teams wanted flexibility. Marketing initiatives needed room for expression. A system that felt too rigid would quickly be bypassed.
                            </p>
                            <p className="text-neutral-400 mb-8 leading-relaxed">Rather than locking everything down, I defined a stable core — typography, color, spacing, and primitive components — while allowing greater flexibility at the pattern level. This preserved brand coherence without restricting experimentation.</p>
                            <p className="text-neutral-200 mb-8 leading-relaxed">The system felt enabling, not constraining.</p>
                        </div>

                        <div className="relative h-80 bg-neutral-800 rounded-xl overflow-hidden flex items-center justify-center p-8">
                            <img src={imgTradeoff} alt="Consistency vs Flexibility Tradeoff" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </section>

                {/* Impact */}
                <section className="mb-32 relative">
                    <h3 className="text-3xl mb-4">Impact</h3>
                    <div className="text-neutral-600 mb-8 leading-relaxed flex gap-4 flex-col">
                        <p>Over time, the results were measurable.</p>
                        <p>Design time for new pages decreased by around 30%, largely because foundational decisions were already established. Component reuse exceeded 70%, significantly reducing redundant work. On the engineering side, duplicated components dropped below 10%, and feature delivery became noticeably faster.</p>
                        <p>More importantly, the overall product experience became cohesive. Users moving between products encountered consistent hierarchy, interaction behavior, and visual tone. Internally, design discussions shifted away from debating minor UI differences and toward product intent and experience quality.</p>
                        <div className="grid md:grid-cols-2 gap-16">
                            {/* Efficiency Chart */}
                            <div>
                                <h3 className="mb-6 flex items-center gap-2">
                                    <Clock size={20} /> Efficiency Gains
                                </h3>
                                <div className="h-64 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={[
                                                { name: 'Design Time', before: 100, after: 70, label: '30% Reduction' },
                                                { name: 'Review Time', before: 100, after: 60, label: '40% Reduction' },
                                            ]}
                                            layout="vertical"
                                            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e5e5" />
                                            <XAxis type="number" hide />
                                            <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12, fill: '#525252' }} axisLine={false} tickLine={false} />
                                            <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                            <Bar dataKey="after" fill="#171717" radius={[0, 4, 4, 0]} barSize={32} name="Current Time %" />
                                            <Bar dataKey="before" fill="#e5e5e5" radius={[0, 4, 4, 0]} barSize={32} name="Previous Time %" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="mt-4 flex justify-between text-sm text-neutral-600 px-4">
                                    <span>30% Faster Page Design</span>
                                    <span>40% Faster Review Cycles</span>
                                </div>
                            </div>

                            {/* Reuse Rate */}
                            <div>
                                <h3 className="mb-6 flex items-center gap-2">
                                    <RefreshCw size={20} /> Component Reuse
                                </h3>
                                <div className="flex items-center justify-center h-64 w-full relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={[
                                                    { name: 'Reuse', value: 70, fill: '#171717' },
                                                    { name: 'Custom', value: 30, fill: '#e5e5e5' },
                                                ]}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={5}
                                                dataKey="value"
                                                startAngle={90}
                                                endAngle={-270}
                                            >
                                                {[
                                                    { name: 'Reuse', value: 70, fill: '#171717' },
                                                    { name: 'Custom', value: 30, fill: '#e5e5e5' },
                                                ].map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                        <span className="text-4xl font-bold block">70%</span>
                                        <span className="text-xs uppercase tracking-wide text-neutral-500">Reuse Rate</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Engineering Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-neutral-100">
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-1">&lt;10%</div>
                                <div className="text-sm text-neutral-500">Duplicated Components</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-1">25%</div>
                                <div className="text-sm text-neutral-500">Faster Delivery</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-1">95%</div>
                                <div className="text-sm text-neutral-500">Design-to-Code Fidelity</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-1">50%</div>
                                <div className="text-sm text-neutral-500">Faster Onboarding</div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="mb-32 relative">
                    <h3 className="text-3xl mb-4">Afterthoughts</h3>
                    <div className="text-neutral-600 mb-8 leading-relaxed flex gap-4 flex-col">
                        <p>For me, this project was about more than standardization.</p>
                        <p>It was about recognizing patterns within complexity, reducing noise without losing character, and building systems that feel quiet but intentional.</p>
                        <p>It required visual sensitivity, structural thinking, and deep collaboration with engineering.</p>
                        <p>The result wasn’t just a component library. It was a shared language that made the product ecosystem feel coherent and deliberate.</p>
                    </div>

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
