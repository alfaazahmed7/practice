export default function MobileToolbar() {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                {/* Search */}
                <div className="relative w-full md:max-w-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-200/50"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search mobiles..."
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
