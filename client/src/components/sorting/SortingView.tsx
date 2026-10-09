"use client";

import { Mobile } from "@/types/Mobile";
import MobileCard from "./MobileCard";
import MobileToolbar from "./MobileToolbar";
import MobilePagination from "./MobilePagination";

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
            </header>

            <div className="mx-auto max-w-7xl space-y-8">
                <MobileToolbar />

                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {mobiles.map((mobile) => (
                        <MobileCard key={mobile._id} mobile={mobile} />
                    ))}
                </section>

                <MobilePagination />
            </div>
        </main>
    );
}
