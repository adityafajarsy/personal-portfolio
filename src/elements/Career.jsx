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
        "Meraih Juara 2 dalam lomba desain poster tingkat mahasiswa bertema Keselamatan dan Kesehatan Kerja (K3).",
        "Aktif mengikuti seminar dan workshop pengembangan teknologi komputer, keamanan jaringan, dan inovasi digital.",
        "Aktif terlibat dalam berbagai kepanitiaan organisasi, termasuk himpunan mahasiswa jurusan Teknologi Komputer dan Badan Eksekutif Mahasiswa (BEM) di kampus.",
      ],
      projects: [
        "Mendesain dan membangun website portofolio menggunakan React, Tailwind CSS, Vite, dan ESLint.",
        "Membangun sistem online exam berbasis web menggunakan HTML, CSS, JavaScript, PHP, dan MySQL.",
      ],
      achievements: [
        "Dean's List selama 3 semester berturut-turut",
        "Juara 2 lomba desain poster K3 tingkat mahasiswa",
      ],
    },
  ];

  const careerExperiences = [
    {
      title: "Divisi HUMAS Hubungan & Masyarakat",
      company: "Himpunan Mahasiswa Teknologi Komputer",
      location: "Bantul, Daerah Istimewa Yogyakarta",
      period: "Aug 2024 - Present",
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/himatekkom-logo.png",
      responsibilities: [
        "Menyusun dan mengirimkan surat kerja sama, undangan, dan proposal ke instansi eksternal.",
        "Mengelola media sosial HIMATEKKOM untuk publikasi kegiatan dan informasi penting.",
        "Menjalin komunikasi dengan organisasi lain, sponsor, media partner, serta alumni.",
      ],
      description:
        "Himpunan Mahasiswa Teknologi Komputer (HIMATEKKOM) merupakan organisasi mahasiswa di Universitas Teknologi Digital Indonesia.",
    },
    {
      title: "Divisi HUMAS Hubungan & Masyarakat",
      company: "Himpunan Mahasiswa Teknologi Komputer",
      location: "Bantul, Daerah Istimewa Yogyakarta",
      period: "Aug 2024 - Present",
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/himatekkom-logo.png",
      responsibilities: [
        "Menyusun dan mengirimkan surat kerja sama, undangan, dan proposal ke instansi eksternal.",
        "Mengelola media sosial HIMATEKKOM untuk publikasi kegiatan dan informasi penting.",
        "Menjalin komunikasi dengan organisasi lain, sponsor, media partner, serta alumni.",
      ],
      description:
        "Himpunan Mahasiswa Teknologi Komputer (HIMATEKKOM) merupakan organisasi mahasiswa di Universitas Teknologi Digital Indonesia.",
    },
    {
      title: "Divisi HUMAS Hubungan & Masyarakat",
      company: "Himpunan Mahasiswa Teknologi Komputer",
      location: "Bantul, Daerah Istimewa Yogyakarta",
      period: "Aug 2024 - Present",
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/himatekkom-logo.png",
      responsibilities: [
        "Menyusun dan mengirimkan surat kerja sama, undangan, dan proposal ke instansi eksternal.",
        "Mengelola media sosial HIMATEKKOM untuk publikasi kegiatan dan informasi penting.",
        "Menjalin komunikasi dengan organisasi lain, sponsor, media partner, serta alumni.",
      ],
      description:
        "Himpunan Mahasiswa Teknologi Komputer (HIMATEKKOM) merupakan organisasi mahasiswa di Universitas Teknologi Digital Indonesia.",
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
                          <ChevronUp size={16} />
                          Hide details
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} />
                          Show details
                        </>
                      )}
                    </button>

                    {/* Expanded Content */}
                    {expandedEdu === index && (
                      <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        {edu.responsibilities && (
                          <div>
                            <p className="text-xs font-semibold text-indigo-400 mb-2">
                              ACTIVITIES & RESPONSIBILITIES
                            </p>
                            <ul className="space-y-1.5 text-sm text-gray-400">
                              {edu.responsibilities.map((res, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="text-indigo-500 mt-1">
                                    •
                                  </span>
                                  <span>{res}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {edu.projects && (
                          <div>
                            <p className="text-xs font-semibold text-indigo-400 mb-2">
                              PROJECTS
                            </p>
                            <ul className="space-y-1.5 text-sm text-gray-400">
                              {edu.projects.map((project, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="text-indigo-500 mt-1">
                                    •
                                  </span>
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
                                <li key={idx} className="flex gap-2">
                                  <span className="text-indigo-500 mt-1">
                                    •
                                  </span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
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
                className="border-indigo-400/20 border rounded-md p-5 hover:border-indigo-900/50 transition-all duration-300"
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
                          <ChevronUp size={16} />
                          Hide responsibilities
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} />
                          Show responsibilities
                        </>
                      )}
                    </button>

                    {/* Expanded Content */}
                    {expandedCareer === index && exp.responsibilities && (
                      <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-xs font-semibold text-indigo-400 mb-2">
                          RESPONSIBILITIES
                        </p>
                        <ul className="space-y-1.5 text-sm text-gray-400">
                          {exp.responsibilities.map((res, idx) => (
                            <li key={idx} className="flex gap-2">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
