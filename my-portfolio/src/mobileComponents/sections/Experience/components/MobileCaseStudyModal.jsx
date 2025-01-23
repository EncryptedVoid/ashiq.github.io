// MobileCaseStudyModal.jsx
const MobileCaseStudyModal = ({ isOpen, onClose, experience }) => {
    if (!isOpen || !experience) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg"
        >
          {/* Mobile-Optimized Modal Content */}
          <div className="
            relative
            min-h-screen
            flex flex-col
          ">
            {/* Header */}
            <div className="
              sticky top-0
              bg-gray-900/80
              backdrop-blur-lg
              border-b border-white/10
              z-10
            ">
              <div className="
                flex items-start justify-between
                p-4
                sm:p-6
              ">
                <div>
                  <h1 className="text-xl font-bold text-white mb-1">
                    {experience.title}
                  </h1>
                  <div className="text-sm text-white/60">
                    {experience.company}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="
                    p-2
                    -m-2
                    text-white/60
                    active:scale-90
                    transition-transform
                  "
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Timeline Tabs */}
              <div className="
                flex gap-4
                overflow-x-auto
                scrollbar-none
                px-4
                pb-4
              ">
                {['Overview', 'Timeline', 'Achievements'].map((tab, index) => (
                  <button
                    key={tab}
                    className={`
                      flex-shrink-0
                      px-4 py-2
                      rounded-full
                      text-sm
                      transition-colors
                      ${index === 0 ?
                        'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                        'bg-white/5 text-white/60 border-white/10'
                      }
                      border
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-6 max-w-lg mx-auto">
                {/* Description */}
                <div className="
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  p-4
                ">
                  <p className="text-white/80 leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h2 className="text-sm font-semibold text-white/60 uppercase">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="
                          px-3 py-1
                          bg-white/5
                          border border-white/10
                          rounded-full
                          text-sm text-white/60
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="space-y-3">
                  <h2 className="text-sm font-semibold text-white/60 uppercase">
                    Key Achievements
                  </h2>
                  <div className="grid gap-3">
                    {experience.achievements?.map((achievement, index) => (
                      <div
                        key={index}
                        className="
                          p-4
                          bg-white/5
                          border border-white/10
                          rounded-xl
                        "
                      >
                        <div className="text-2xl font-bold text-blue-400 mb-2">
                          {achievement.stat}
                        </div>
                        <div className="text-white mb-1">
                          {achievement.label}
                        </div>
                        <div className="text-sm text-white/60">
                          {achievement.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="
              sticky bottom-0
              bg-gray-900/80
              backdrop-blur-lg
              border-t border-white/10
              p-4
              flex gap-3
            ">
              {experience.links?.company && (
                <a
                  href={experience.links.company}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    flex items-center justify-center gap-2
                    py-3
                    bg-white/5
                    border border-white/10
                    rounded-xl
                    text-white/60
                    active:scale-98
                    transition-transform
                  "
                >
                  <span>Visit Company</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };


  export default MobileCaseStudyModal;