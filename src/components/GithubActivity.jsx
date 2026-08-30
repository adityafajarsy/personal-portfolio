import React, { useState, useEffect, useMemo } from "react";
import { ArrowUpRight, GitCommit } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const GITHUB_USERNAME = "adityafajarsy";
const API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

export default function GithubActivity({ isMobile = false }) {
  const { t } = useLanguage();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchContributions = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        console.warn("GitHub contributions fetch fallback:", err);
        if (isMounted) {
          setData({
            total: { lastYear: 379 },
            contributions: Array.from({ length: 365 }, (_, i) => ({
              date: new Date(Date.now() - (364 - i) * 86400000)
                .toISOString()
                .split("T")[0],
              count: i % 4 === 0 ? 3 : i % 2 === 0 ? 1 : 0,
              level: i % 4 === 0 ? 2 : i % 2 === 0 ? 1 : 0,
            })),
          });
          setLoading(false);
        }
      }
    };

    fetchContributions();
    return () => {
      isMounted = false;
    };
  }, []);

  // Group all days into strictly Sunday-to-Saturday weeks (matching GitHub layout)
  const { weeks, monthLabels, sixMonthTotal } = useMemo(() => {
    if (!data?.contributions)
      return { weeks: [], monthLabels: [], sixMonthTotal: 0 };
    const list = data.contributions;

    const allWeeks = [];
    let currentWeek = [];

    list.forEach((day) => {
      const d = new Date(day.date + "T00:00:00");
      const dayOfWeek = d.getDay(); // 0 = Sunday, 6 = Saturday

      if (dayOfWeek === 0 && currentWeek.length > 0) {
        while (currentWeek.length < 7) {
          currentWeek.unshift({ date: null, count: 0, level: 0, empty: true });
        }
        allWeeks.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(day);
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: null, count: 0, level: 0, empty: true });
      }
      allWeeks.push(currentWeek);
    }

    // Take the last 26 weeks (~6 months from March to August)
    const recentWeeks = allWeeks.slice(-26);

    // Compute non-colliding month label column positions
    const labels = [];
    let lastMonth = "";
    let lastColIndex = -10;

    recentWeeks.forEach((week, wIdx) => {
      const realDays = week.filter((d) => d.date);
      const firstRealDay = realDays[0];
      if (firstRealDay) {
        const monthName = new Date(
          firstRealDay.date + "T00:00:00"
        ).toLocaleString("en-US", {
          month: "short",
        });
        if (monthName !== lastMonth && wIdx - lastColIndex >= 3) {
          labels.push({ colIndex: wIdx, label: monthName });
          lastMonth = monthName;
          lastColIndex = wIdx;
        }
      }
    });

    const total = recentWeeks.reduce((acc, week) => {
      return acc + week.reduce((sum, d) => sum + (d.count || 0), 0);
    }, 0);

    return {
      weeks: recentWeeks,
      monthLabels: labels,
      sixMonthTotal: total,
    };
  }, [data]);

  // Level to blue shades mapping
  const getLevelBg = (level) => {
    switch (level) {
      case 1:
        return "bg-[#0E2A5E]";
      case 2:
        return "bg-[#1D4ED8]";
      case 3:
        return "bg-[#3B82F6]";
      case 4:
        return "bg-[#60A5FA] shadow-[0_0_6px_rgba(96,165,250,0.55)]";
      default:
        return "bg-[#141820] hover:bg-white/20";
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-bold tracking-[0.14em] text-[#8A8A8A] uppercase">
          {t("sidebar.githubTitle") || "GITHUB ACTIVITY"}
        </h3>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-[#3B82F6] hover:text-[#60A5FA] transition-colors group"
        >
          <span>
            {sixMonthTotal} {t("sidebar.githubContributions") || "contributions"}
          </span>
          <ArrowUpRight
            size={11}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>

      {/* Heatmap Card Container */}
      <div className="bg-[#0B0B0B] border border-white/5 rounded-[14px] p-3 sm:p-3.5 flex flex-col gap-1.5 shadow-md relative w-full">
        {loading ? (
          <div className="h-20 flex items-center justify-center gap-2 text-white/30 text-[11px] animate-pulse">
            <GitCommit size={13} className="animate-spin text-white/40" />
            <span>Loading activity...</span>
          </div>
        ) : (
          <div className="w-full flex flex-col">
            {/* Month Labels Header (Exact Column Alignment) */}
            <div className="flex gap-[2.5px] sm:gap-[3px] items-center w-full mb-1 h-3.5 select-none">
              {weeks.map((_, wIdx) => {
                const labelObj = monthLabels.find((m) => m.colIndex === wIdx);
                return (
                  <div
                    key={wIdx}
                    className="flex-1 text-[9.5px] text-white/45 font-semibold relative overflow-visible"
                  >
                    {labelObj && (
                      <span className="absolute left-0 top-[-3px] whitespace-nowrap">
                        {labelObj.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Days Grid (Identical Sunday-to-Saturday Layout) */}
            <div className="flex gap-[2.5px] sm:gap-[3px] items-center justify-between w-full">
              {weeks.map((week, wIdx) => (
                <div
                  key={wIdx}
                  className="flex flex-col gap-[2.5px] sm:gap-[3px] flex-1"
                >
                  {week.map((day, dIdx) => {
                    if (day.empty || !day.date) {
                      return (
                        <div
                          key={dIdx}
                          className="aspect-square w-full opacity-0 pointer-events-none"
                        />
                      );
                    }
                    const isHovered = hoveredDay?.date === day.date;
                    return (
                      <div
                        key={dIdx}
                        onMouseEnter={() => setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`aspect-square w-full rounded-[2px] sm:rounded-[2.5px] transition-all duration-150 cursor-pointer ${getLevelBg(
                          day.level
                        )} ${
                          isHovered
                            ? "scale-125 z-10 !border-white !bg-[#60A5FA]"
                            : ""
                        }`}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer / Tooltip & Legend */}
        <div className="flex items-center justify-between text-[9.5px] text-[#8A8A8A] pt-1.5 mt-0.5 border-t border-white/5">
          <div className="truncate pr-2">
            {hoveredDay ? (
              <span className="text-white font-medium">
                {hoveredDay.count}{" "}
                {hoveredDay.count === 1 ? "contribution" : "contributions"} on{" "}
                {hoveredDay.date}
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-white/50">
                <GitCommit size={11} className="text-white/35 flex-shrink-0" />
                <span>
                  {t("sidebar.githubInLast6Months") || "in the last 6 months"}
                </span>
              </span>
            )}
          </div>

          {/* Level legend */}
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-[9px] text-white/30">
              {t("sidebar.githubLess") || "Less"}
            </span>
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#141820]" />
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#0E2A5E]" />
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#1D4ED8]" />
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#3B82F6]" />
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#60A5FA]" />
            <span className="text-[9px] text-white/30">
              {t("sidebar.githubMore") || "More"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
