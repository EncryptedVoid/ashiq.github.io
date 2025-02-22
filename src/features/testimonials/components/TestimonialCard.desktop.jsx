import { ExternalLink, Quote } from 'lucide-react';

export const TestimonialCard = ({ testimonial }) => (
<div className="w-full min-h-[300px] p-8 relative backdrop-blur-xl
    bg-white/[0.03] border border-white/[0.08] rounded-3xl"
>
    {/* Company Badge */}
    <div className="absolute top-8 right-8 py-2 px-4 border border-white/[0.08]
    rounded-full bg-white/[0.03]"
    >
    <span className="text-sm text-white">{testimonial.company}</span>
    <a
        href={testimonial.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 inline-flex items-center text-white/60 hover:text-white/80
        transition-colors"
        onClick={e => e.stopPropagation()}
    >
        <ExternalLink className="w-4 h-4" />
    </a>
    </div>

    {/* Quote Icon */}
    <Quote className="absolute top-8 left-8 w-8 h-8 text-white/40" />

    {/* Main Content */}
    <div className="mt-16 flex gap-6">
    {/* Profile Circle */}
    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500
        flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
    >
        {testimonial.initials}
    </div>

    {/* Text Content */}
    <div className="space-y-4">
        <div>
        <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
        <p className="text-white/60">{testimonial.role}</p>
        </div>
        <p className="text-lg text-white/80 leading-relaxed">
        "{testimonial.quote}"
        </p>
    </div>
    </div>
</div>
);