"use client";

import { Mobile } from "@/types/Mobile";
import MobileCard from "./MobileCard";
import MobileToolbar from "./MobileToolbar";
import MobilePagination from "./MobilePagination";
import Link from "next/link";
import { FiArrowLeft, FiSmartphone } from "react-icons/fi";

type SortingViewProps = {
    mobiles: Mobile[];
};

export default function SortingView({ mobiles }: SortingViewProps) {

    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 px-6 py-12 sm:px-10 lg:px-16">
            <header className="mx-auto mb-10 max-w-7xl">
                <h1 className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                    Mobile Catalog
                </h1>
                <p className="mt-2 text-sm text-purple-100/70">
                    Browse, search, sort, and filter through the latest smartphones.
                </p>
                <Link href='/'>
                    <button className="mt-2 inline-flex items-center gap-2 text-white text-sm">
                        <FiArrowLeft className="h-4 w-4" />
                        Back to home
                    </button>
                </Link>
            </header>

            <div className="mx-auto max-w-7xl space-y-8">
                <MobileToolbar />

                {mobiles.length === 0 ? (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-16 text-center backdrop-blur-md">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-200">
                            <FiSmartphone className="h-8 w-8" />
                        </div>
                        <h2 className="text-xl font-bold text-white">No mobiles found</h2>
                        <p className="mt-2 max-w-md text-sm text-purple-100/70">
                            Try adjusting your search or filters to find what you're looking for.
                        </p>
                    </div>
                ) : (
                    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {mobiles.map((mobile) => (
                            <MobileCard key={mobile._id} mobile={mobile} />
                        ))}
                    </section>
                )}

                <MobilePagination />
            </div>
        </main>
    );
}
