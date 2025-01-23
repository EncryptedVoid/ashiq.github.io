// MobileExperienceCard.jsx
const MobileExperienceCard = ({ experience, isActive, onClick, onCaseStudyClick }) => {
  const isCurrentJob = !experience.endDate;

  return (
    <div
      className="
        w-full relative
        bg-white/[0.03]
        border border-white/[0.06]
        rounded-xl
        overflow-hidden
        transition-all duration-300
        sm:rounded-2xl
        md:hover:bg-white/[0.06]
        md:hover:border-white/[0.12]
      "
      onClick={onClick}
    >
      {/* Compact Header for Mobile */}
      <div className="p-4 sm:p-6">
        <div className="flex items-start gap-3">
          {/* Company Icon - Smaller on Mobile */}
          <div className="
            w-10 h-10
            sm:w-12 sm:h-12
            rounded-lg
            bg-gradient-to-br from-blue-500/20 to-purple-500/20
            flex items-center justify-center
            flex-shrink-0
          ">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
          </div>

          {/* Title and Details - Stacked Layout */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-white truncate">
              {experience.title}
            </h3>
            <div className="text-sm text-white/60 truncate">
              {experience.company}
            </div>

            {/* Date and Location on Same Line */}
            <div className="flex items-center gap-2 mt-1 text-xs text-white/40">
              <Calendar className="w-3 h-3" />
              <span>{experience.startDate} - {experience.endDate || 'Present'}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <MapPin className="w-3 h-3" />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Expand/Collapse Icon */}
          <ChevronDown
            className={`
              w-5 h-5 text-white/40
              transition-transform duration-300
              ${isActive ? 'rotate-180' : ''}
            `}
          />
        </div>

        {/* Technologies - Horizontal Scroll on Mobile */}
        {!isActive && (
          <div className="
            mt-3
            flex gap-2
            overflow-x-auto
            scrollbar-none
            -mx-4 px-4
            pb-2
          ">
            {experience.technologies?.slice(0, 5).map((tech, index) => (
              <span
                key={index}
                className="
                  flex-shrink-0
                  px-2 py-1
                  text-xs
                  bg-white/[0.03]
                  border border-white/[0.06]
                  rounded-full
                  text-white/60
                  whitespace-nowrap
                "
              >
                {tech}
              </span>
            ))}
            {experience.technologies?.length > 5 && (
              <span className="
                flex-shrink-0
                px-2 py-1
                text-xs
                bg-white/[0.03]
                border border-white/[0.06]
                rounded-full
                text-white/60
              ">
                +{experience.technologies.length - 5} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4 sm:px-6 sm:pb-6">
              {/* Description - More Readable on Mobile */}
              <p className="
                text-sm
                text-white/80
                leading-relaxed
                sm:text-base
              ">
                {experience.description}
              </p>

              {/* Mobile-Optimized Achievement Stats */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-white/60 uppercase">
                  Key Achievements
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {experience.achievements?.map((achievement, index) => (
                    <div
                      key={index}
                      className="
                        p-3
                        bg-white/[0.03]
                        border border-white/[0.06]
                        rounded-lg
                      "
                    >
                      <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {achievement.stat}
                      </div>
                      <div className="text-xs text-white/60 mt-1">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons - Full Width on Mobile */}
              <div className="
                flex flex-col gap-2
                sm:flex-row sm:gap-4
                border-t border-white/[0.06]
                pt-4
              ">
                {experience.links?.company && (
                  <a
                    href={experience.links.company}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center gap-2
                      w-full
                      px-4 py-3
                      bg-white/[0.03]
                      border border-white/[0.06]
                      rounded-lg
                      text-sm text-white/60
                      active:scale-98
                      transition-transform
                      sm:w-auto
                    "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Visit Company</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {experience.links?.caseStudy && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCaseStudyClick();
                    }}
                    className="
                      flex items-center justify-center gap-2
                      w-full
                      px-4 py-3
                      bg-blue-500/20
                      border border-blue-500/30
                      rounded-lg
                      text-sm text-white
                      active:scale-98
                      transition-transform
                      sm:w-auto
                    "
                  >
                    <span>View Case Study</span>
                    <Award className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Mobile-Optimized Testimonials */}
              {experience.testimonials?.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-white/60 uppercase">
                    Testimonials
                  </h4>
                  <div className="
                    -mx-4 px-4
                    overflow-x-auto
                    scrollbar-none
                  ">
                    <div className="
                      flex gap-4
                      w-max
                      pb-4
                    ">
                      {experience.testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="
                            w-[280px]
                            flex-shrink-0
                            p-4
                            bg-white/[0.03]
                            border border-white/[0.06]
                            rounded-lg
                          "
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="
                              w-8 h-8
                              rounded-full
                              bg-gradient-to-br from-purple-500/20 to-blue-500/20
                              flex items-center justify-center
                              text-sm text-white
                            ">
                              {testimonial.name[0]}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">
                                {testimonial.name}
                              </div>
                              <div className="text-xs text-white/60">
                                {testimonial.position}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-white/80 line-clamp-4">
                            {testimonial.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileExperienceCard;