'use client'

import { Mobile } from "@/types/Mobile";
import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";

interface MobileProps {
    initialMobiles: Mobile[]
}

export default function MobileToolbar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const search = searchParams.get('search') || '';

    const updateQuery = (key: string, value: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        if (!value || value === 'all') {
            current.delete(key);
        }
        else {
            current.set(key, value);
        }

        router.push(`/sorting?${current.toString()}`);
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                {/* Search */}
                <div className="relative w-full md:max-w-sm">
                    <FiSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-200/50" />
                    <input
                        type="text"
                        placeholder="Search mobiles..."
                        value={search}
                        onChange={(e) => updateQuery('search', e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-purple-200/50 focus:border-fuchsia-300/40"
                    />
                </div>

                {/* Sort + Filter */}
                <div className="flex items-center gap-3">
                    <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-purple-100 outline-none transition focus:border-fuchsia-300/40">
                        <div className="bg-black text-gray-900">
                            <option>Sort: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating: High to Low</option>
                            <option>Newest First</option>
                        </div>
                    </select>
                    <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-purple-100 outline-none transition focus:border-fuchsia-300/40">
                        <div className="bg-black text-gray-900">
                            <option>Filter: Brand</option>
                            <option>In Stock Only</option>
                            <option>Flagship</option>
                            <option>Android</option>
                        </div>
                    </select>
                </div>
            </div>
        </div>
    );
}
