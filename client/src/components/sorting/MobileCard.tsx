"use client";

import { Mobile } from "@/types/Mobile";
import { FaStar } from "react-icons/fa";

type MobileCardProps = {
    mobile: Mobile;
};

export default function MobileCard({ mobile }: MobileCardProps) {
    const {
        mobilename,
        brand,
        price,
        warrenty,
        camera,
        battery,
        ram,
        storage,
        processor,
        display,
        rating,
        inStock,
        releaseYear,
        tags,
    } = mobile;

    const specs = [
        { label: "RAM", value: ram },
        { label: "Storage", value: storage },
        { label: "Processor", value: processor },
        { label: "Display", value: display },
        { label: "Camera", value: camera },
        { label: "Battery", value: battery },
    ];

    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-300/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-fuchsia-500/20">
            <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-500/30 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            {/* Header: brand + rating */}
            <div className="flex items-start justify-between gap-3">
                <span className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                    {brand}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2.5 py-1 text-xs font-semibold text-amber-300">
                    <FaStar className="h-3.5 w-3.5" />
                    {rating}
                </span>
            </div>

            {/* Name */}
            <h2 className="mt-4 text-lg font-bold leading-snug text-white transition-colors group-hover:text-fuchsia-200">
                {mobilename}
            </h2>

            {/* Price + stock */}
            <div className="mt-3 flex items-center justify-between gap-2">
                <span className="text-2xl font-extrabold text-white">
                    ₹{price.toLocaleString("en-IN")}
                </span>
                <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        inStock
                            ? "bg-emerald-400/10 text-emerald-300"
                            : "bg-rose-400/10 text-rose-300"
                    }`}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${
                            inStock ? "bg-emerald-400" : "bg-rose-400"
                        }`}
                    />
                    {inStock ? "In Stock" : "Out of Stock"}
                </span>
            </div>

            {/* Divider */}
            <div className="my-4 h-px w-full bg-white/10" />

            {/* Specs */}
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
                {specs.map((spec) => (
                    <div key={spec.label}>
                        <dt className="text-[11px] font-medium uppercase tracking-wide text-purple-200/60">
                            {spec.label}
                        </dt>
                        <dd className="mt-0.5 text-sm font-medium text-purple-50 line-clamp-2">
                            {spec.value}
                        </dd>
                    </div>
                ))}
            </dl>

            {/* Warranty + release year */}
            <div className="mt-4 flex items-center justify-between text-xs text-purple-100/70">
                <span>{warrenty}</span>
                <span>{releaseYear}</span>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-purple-100/80"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </article>
    );
}