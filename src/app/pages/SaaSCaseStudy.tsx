import React from "react";
import { ArrowLeft, ArrowDown, ArrowUp, MessagesSquare, Brain } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import imgCover from "../../assets/workspace_case_study.png";
import imgResearch from "../../assets/workspace_research.png";
import imgSolution1 from "../../assets/workspace_solution_1.png";
import imgSolution2 from "../../assets/workspace_solution_2.png";
import imgSolution3 from "../../assets/workspace_solution_3.png";
import imgResult1 from "../../assets/workspace_result_1.png";
import imgResult2 from "../../assets/workspace_result_2.png";
import imgVisual from "../../assets/workspace_visual.png";

export const SaaSCaseStudy = () => {
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
          {/* <div className="mb-6 flex flex-wrap gap-4 text-sm font-medium text-[#737373]">
            <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 shadow-sm">
              <Tag size={14} />
              <span>SaaS Platform</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 shadow-sm">
              <Calendar size={14} />
              <span>2024 - 2025</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 shadow-sm">
              <User size={14} />
              <span>Lead Product Designer</span>
            </div>
          </div> */}

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            All-in-One Civil Inspection Data Platform
          </h1>
          <p className="text-xl leading-relaxed text-neutral-600 md:text-2xl">
            Redesigning the core reporting workflow for civil engineers to process massive datasets and increased the adoption rate by 56%.
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
          <div className="lg:col-span-6">
            <h3 className="text-3xl font-bold mb-8">Project Overview</h3>
            <div className="space-y-6 text-neutral-600">
              <div className="flex gap-4">
                <span className="w-24 shrink-0">Platform:</span>
                <span>Responsive Web</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0">Role:</span>
                <span>Product Planning · User Research · UX/UI Design · Data Tracking & Iteration</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0">Duration:</span>
                <span>5 Months</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 shrink-0">Company:</span>
                <span>Screening Eagle (a non-destructive testing solutions provider)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="leading-relaxed text-neutral-600">
              As Screening Eagle transitions from a traditional sensor hardware company to the SaaS model, cloud storage has become central to its offering. However, many customers remain unconvinced of its value. This project responds to that challenge—by designing a platform that makes inspection data not just stored, but truly usable.
            </p>
          </div>
        </section>

        <section className="mb-32 ">
          <h3 className="text-l font-bold mb-4">Deliverables</h3>
          <div className="flex flex-wrap gap-4">
            {['UX Research', 'User Interface', 'Design System', 'Usability Testing', 'Event Tracking'].map((tag) => (
              <div key={tag} className="flex items-center gap-1.5 rounded-full bg-white text-neutral-600 px-3 py-1 shadow-sm">
                <span>{tag}</span>
              </div>

            ))}


          </div>
        </section>
        {/* Research */}
        <section className="mb-32 relative">
          <h3 className="text-sm italic text-center text-[#acacac]">Research</h3>
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold">
              To understand how user engage with the data <br /> & where the platform was falling short
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-neutral-800 p-8 shadow-sm relative">
              <div className="absolute top-0 right-0 p-4 text-neutral-100 opacity-10">
                <MessagesSquare className="h-40 w-40" />
              </div>
              <h4 className="text-5xl font-light text-white mb-4">5</h4>
              <p className="text-xl text-neutral-600">Interviewed 5 active users (2 using the legacy cloud storage platform)</p>
            </div>

            <div className="rounded-2xl bg-neutral-800 p-8 shadow-sm relative">
              <div className="absolute top-0 right-0 p-4 text-neutral-100 opacity-10">
                <Brain className="h-40 w-40" />
              </div>
              <h4 className="text-5xl font-light text-white mb-4">Collab</h4>
              <p className="text-xl text-neutral-600">Conducted collaborative audit with designers from sensor product teams</p>
            </div>
          </div>

          <div className="mt-16 p-12 relative w-full h-full overflow-hidden">
            <img src={imgResearch} alt="Research Process" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Solution 1 */}
        <section className="mb-32 ">
          <p className="text-sm italic text-[#acacac]">Solution</p>

          <h3 className="mb-6 text-3xl font-bold">
            Quick Access to Inspection Data
          </h3>
          <div className="text-neutral-600 mb-8 leading-relaxed">
            <p>
              Engineers often work in noisy, high-pressure environments and don’t have time to name files properly. As a result, data is stored with default filenames (e.g., “measurement_001”), making it cumbersome to retrieve specific records later.
            </p>
            <h4 className="text-neutral-600 font-bold my-4">Design Strategy:</h4>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Introduced map-based and calendar-based views as entry points for locating inspection records by location and time.</li>
              <li>Enabled users to explore historical and nearby records visually, without relying on filenames.</li>
            </ul>
          </div>
          <div className="relative">
            <img src={imgSolution1} alt="Map and Calendar View" className="w-full h-auto" />
          </div>
        </section>

        {/* Solution 2 */}
        <section className="mb-32 ">
          <p className="text-sm italic text-[#acacac]">Solution</p>

          <h3 className="mb-6 text-3xl font-bold">
            Embedded Data Visualization
          </h3>
          <div className="text-neutral-600 mb-8 leading-relaxed">
            <p>
              Users had to download raw files and open them in Excel or custom tools just to get a quick sense of their data.

            </p>
            <h4 className="text-neutral-600 font-bold my-4">Design Strategy:</h4>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Embedded chart previews (line charts, heatmaps, etc.) for different test types directly into the platform.</li>
              <li>Matched data type with the most appropriate visualization model.</li>
            </ul>
          </div>
          <div className="relative">
            <img src={imgSolution2} alt="Embedded Data Visualization" className="w-full h-auto" />
          </div>
        </section>

        {/* Solution 3 */}
        <section className="mb-32">
          <p className="text-sm italic text-[#acacac]">Solution</p>

          <h3 className="mb-6 text-3xl font-bold">
            Streamlined Report Generation
          </h3>
          <div className="text-neutral-600 mb-8 leading-relaxed">
            <p>
              Engineers need to produce official reports, often copying data manually into Word docs or Excel templates. Report formats differ slightly by region, but key data points are mostly the same.
            </p>
            <h4 className="text-neutral-600 font-bold my-4">Design Strategy:</h4>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Developed report templates by composing the standards from different region.</li>
              <li>Support both XSLX & DOCX format for easy post-processing.</li>
            </ul>
          </div>
          <div className="relative">
            <img src={imgSolution3} alt="Report Generation" className="mx-auto" />
          </div>
        </section>

        {/* Results */}
        <section className="mb-32">
          <div className="mb-16">
            <p className="text-sm italic text-[#acacac]">Result</p>
            <div className="text-3xl mb-2 w-3/4 leading-relaxed">
              <span className="font-bold">Less</span> <span className="text-[#acacac]">clicks to locate relevant inspection and </span><span className="font-bold">improved</span> <span className="text-[#acacac]">clarity and speed</span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <img src={imgResult1} alt="Adoption Rate" className="md:col-span-1 w-full h-auto rounded-2xl shadow-sm" />
            <img src={imgResult2} alt="Adoption Rate" className="md:col-span-1 w-full h-auto rounded-2xl shadow-sm" />

          </div>
        </section>

        {/* Style Guide Preview */}
        <section className="mb-20 w-full h-full pointer-events-none relative">
          <h3 className="absolute top-16 left-16 text-sm italic text-[#acacac]">UI Design & Brand Integration</h3>
          <img src={imgVisual} alt="Visual Design" className="w-full h-auto rounded-2xl shadow-sm" />
        </section>

        {/* Learning */}
        <section className="mb-32">
          <p className="text-sm mb-8  italic text-[#acacac]">After Thoughts</p>
          <p className="leading-relaxed">
            <span className="font-bold">It was challenging </span>
            <span className="text-neutral-600">
              at the beginning, I was overwhelmed by the broad vision from the business side and took the product manager role as there wasn't one at the beginning. However, it turned out to be a really rewarding experience to understand users many different products and find out a user flow that works for all. I am glad to see how the project came out. We are able to yield big impacts and create a great experience for users, and the continually increased adoption rate is strong evidence to support us.
            </span>
          </p>
        </section>

        {/* Footer Navigation */}
        <div className="flex justify-center border-t border-neutral-200 pt-12">
          <Link to="/case-studies/design-system" className="text-lg font-bold text-[#171717] hover:text-[#32B3CD] hover:underline">
            Next Project: Design System →
          </Link>
        </div>

      </main>
    </div>
  );
};
