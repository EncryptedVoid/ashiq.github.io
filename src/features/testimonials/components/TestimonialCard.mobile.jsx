import { Quote, ExternalLink } from 'lucide-react';

export const TestimonialCardMobile = ({ testimonial }) => (
<div className="w-full relative backdrop-blur-xl bg-white/[0.03]
    border border-white/[0.08] rounded-xl p-3"
>
    {/* Company Tag */}
    <div className="flex items-center justify-between mb-4">
    <span className="text-sm text-white/60 bg-white/[0.03] px-3 py-1 rounded-full">
        {testimonial.company}
    </span>
    <a
        href={testimonial.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full
        bg-white/[0.03] active:scale-95 transition-all touch-manipulation"
        onClick={e => e.stopPropagation()}
    >
        <ExternalLink className="w-5 h-5 text-white/60" />
    </a>
    </div>

    {/* Content */}
    <div className="space-y-4">
    <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/90
        to-purple-500/90 flex items-center justify-center text-lg font-bold text-white"
        >
        {testimonial.initials}
        </div>
        <div>
        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
        <p className="text-sm text-white/60">{testimonial.role}</p>
        </div>
    </div>

    <div className="relative">
        <Quote className="absolute top-0 left-0 w-5 h-5 text-white/20" />
        <p className="pl-8 text-base text-white/80 leading-relaxed">
        "{testimonial.quote}"
        </p>
    </div>
    </div>
</div>
);