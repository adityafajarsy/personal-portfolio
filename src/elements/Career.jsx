import { useState } from "react";
import { GraduationCap, Briefcase, ChevronDown, ChevronUp } from "lucide-react";

export default function EducationExperience() {
  const [expandedEdu, setExpandedEdu] = useState(null);
  const [expandedCareer, setExpandedCareer] = useState(null);

  const education = [
    {
      institution: "Universitas Padjadjaran",
      degree: "Sarjana, Sastra Rusia · GPA 3.70/4.00",
      period: "2021 - 2025",
      location: "Bandung, Sumedang",
      logo: "/assets/logo-unpad1.png",
      responsibilities: [
        "Actively participated in various campus organizations, including the Russian Studies Student Association and the Student Executive Board (BEM).",
        "Engaged in self development through seminars and workshops on Graphic Design, Video Editing, AI, Programming, Finance, and Investment.",
        "Contributed directly to the Russian Studies Department by assisting in visual design and video editing for academic and promotional purposes.",
      ],
      projects: [
        ""
      ],
      achievements: [
        ""
      ],
    },
  ];

  const careerExperiences = [
    {
      title: "Creative Media Lead",
      company: "Himpunan Mahasiswa Sastra Rusia",
      location: "Bandung - Sumedang",
      period: "Jan 2023 - Jan-2024",
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/logo himarus crop.png",
      responsibilities: [
        "Led the creation of Himarus’ complete social media branding, including the logos, color palette, design structure, and overall visual identity.",
        "Collaborated with departments to deliver design and publication materials.",
        "Pioneered the integration of AI tools in content creation and caption writing during the early release of GPT based models.",
        "Increased social media engagement significantly, with each post averaging 50+ likes, marking a clear improvement from the previous year.",
        "Led Creative Media to become the most productive division in the cabinet.",
      ],
      description:
        "Himarus (Himpunan Mahasiswa Sastra Rusia) is the official student association of the Russian Literature Department at Universitas Padjadjaran.",
    },
    {
      title: "Graphic Design Creative Division Lead",
      company: "Russian festival",
      location: "Bandung, Sumedang",
      period: "July 2023 - Dec 2023",
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/logo fesrus.png",
      responsibilities: [
        "Designed the event’s visual brand identity, including logo, banners, ID cards, lanyards, and long-feed Instagram posts.",
        "Created engaging promotional posters that attracted a wide external audience, achieving a 99% attendance rate.",
        "Operated professional cameras to capture high-quality event documentation.",
        "Led a team of 4 staffs and supervised 2 interns in the Creative Media division.",
      ],
      description:
        "Festival Rusia is the largest annual event of the Russian Studies, featuring performances and activities attended by both internal and external audiences.",
    },
    {
      title: "Vice Project Officer",
      company: "Matrikulasi Intern Rusia",
      location: "Bandung, Sumedang",
      period: "May 2022 - Oct 2022",
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/521851580_18392027272190952_5120733725427049205_n.jpg",
      responsibilities: [
        "Supervised and coordinated over 40 committee members across multiple divisions to ensure smooth event execution.",
        "Assisted each division in organizing and fulfilling their respective responsibilities.",
        "Collaborated with the Creative Media division to create social media content, animated twibbons, and aftermovies.",
        "Operated cameras for event documentation.",
      ],
      description:
        "Matrikulasi Intern Rusia is an orientation event for new students of the Russian Studies Department, organized by the student committee.",
    },
  ];

  return (
    <div className="flex max-w-7xl mx-auto py-12 mt-8">
      {/* Education & Experience Grid */}
      <div className="grid lg:grid-cols-2  gap-10 ">
        {/* Education Section */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-once={true}
          data-aos-delay="400"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-2 border-indigo-400/20 
          shadow-[0_0_25px_rgba(93,68,255,0.25)] rounded-lg"
            >
              <GraduationCap size={24} className="text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="border-indigo-400/20 border rounded-md p-5 hover:border-indigo-900/50 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-14 h-14 rounded-lg object-cover border border-zinc-700"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-white mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>

                    {/* Toggle Details */}
                    <button
                      onClick={() =>
                        setExpandedEdu(expandedEdu === index ? null : index)
                      }
                      className="mt-4 flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      {expandedEdu === index ? (
                        <>
                          <ChevronUp
                            size={16}
                            className="transition-transform duration-500 rotate-180"
                          />
                          Hide details
                        </>
                      ) : (
                        <>
                          <ChevronDown
                            size={16}
                            className="transition-transform duration-500"
                          />
                          Show details
                        </>
                      )}
                    </button>

                    {/* Expanded Content */}
                    <div
                      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
                        expandedEdu === index
                          ? "max-h-[1000px] opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-3"
                      } mt-4`}
                    >
                      {edu.responsibilities && (
                        <div>
                          <p className="text-xs font-semibold text-indigo-400 mb-2">
                            ACTIVITIES & RESPONSIBILITIES
                          </p>
                          <ul className="space-y-1.5 text-sm text-gray-400">
                            {edu.responsibilities.map((res, idx) => (
                              <li
                                key={idx}
                                className="flex gap-2 items-start transition-all duration-500 ease-out hover:translate-x-1"
                                style={{ transitionDelay: `${idx * 50}ms` }}
                              >
                                <span className="text-indigo-500 mt-1">•</span>
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* {edu.projects && (
                        <div>
                          <p className="text-xs font-semibold text-indigo-400 mb-2">
                            PROJECTS
                          </p>
                          <ul className="space-y-1.5 text-sm text-gray-400">
                            {edu.projects.map((project, idx) => (
                              <li
                                key={idx}
                                className="flex gap-2 items-start transition-all duration-500 ease-out hover:translate-x-1"
                                style={{ transitionDelay: `${idx * 50}ms` }}
                              >
                                <span className="text-indigo-500 mt-1">•</span>
                                <span>{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {edu.achievements && (
                        <div>
                          <p className="text-xs font-semibold text-indigo-400 mb-2">
                            ACHIEVEMENTS
                          </p>
                          <ul className="space-y-1.5 text-sm text-gray-400">
                            {edu.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex gap-2 items-start transition-all duration-500 ease-out hover:translate-x-1"
                                style={{ transitionDelay: `${idx * 50}ms` }}
                              >
                                <span className="text-indigo-500 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Section */}
        <div
          className="mt-12 sm:mt-0"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-once={true}
          data-aos-delay="700"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-2 border-indigo-400/20 
          shadow-[0_0_25px_rgba(93,68,255,0.25)] rounded-lg"
            >
              <Briefcase size={24} className="text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold">Leadership Experiences</h2>
          </div>

          <div className="space-y-4">
            {careerExperiences.map((exp, index) => (
              <div
                key={index}
                className="border-indigo-400/20 border rounded-md p-5 hover:border-indigo-900/50 transition-all duration-500"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-14 h-14 rounded-lg object-cover border border-zinc-700"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-2 text-xs mb-3">
                      <span className="px-2 py-1 bg-indigo-950/50 border border-indigo-900/50 rounded-md text-indigo-300">
                        {exp.type}
                      </span>
                      <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded-md text-gray-400">
                        {exp.mode}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    {exp.description && (
                      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    )}

                    {/* Toggle Details */}
                    <button
                      onClick={() =>
                        setExpandedCareer(
                          expandedCareer === index ? null : index
                        )
                      }
                      className="mt-4 flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      {expandedCareer === index ? (
                        <>
                          <ChevronUp
                            size={16}
                            className="transition-transform duration-300"
                          />
                          Hide responsibilities
                        </>
                      ) : (
                        <>
                          <ChevronDown
                            size={16}
                            className="transition-transform duration-300"
                          />
                          Show responsibilities
                        </>
                      )}
                    </button>

                    {/* Expanded Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedCareer === index
                          ? "max-h-96 opacity-100 mt-4"
                          : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      {exp.responsibilities && (
                        <div className="transform transition-transform duration-300">
                          <p className="text-xs font-semibold text-indigo-400 mb-2">
                            RESPONSIBILITIES
                          </p>
                          <ul className="space-y-1.5 text-sm text-gray-400">
                            {exp.responsibilities.map((res, idx) => (
                              <li
                                key={idx}
                                className="flex gap-2 animate-in fade-in slide-in-from-left-2"
                                style={{ animationDelay: `${idx * 50}ms` }}
                              >
                                <span className="text-indigo-500 mt-1">•</span>
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
