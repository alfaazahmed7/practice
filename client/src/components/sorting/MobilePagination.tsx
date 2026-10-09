export default function MobilePagination() {
    const pages = [1, 2, 3, 4, 5];

    return (
        <nav className="flex items-center justify-center gap-2">
            <button className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-purple-100/70 transition hover:border-fuchsia-300/40 hover:text-white">
                Prev
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                        page === 1
                            ? "border border-fuchsia-300/40 bg-fuchsia-400/10 text-fuchsia-200"
                            : "border border-white/10 bg-white/5 text-purple-100/70 hover:border-fuchsia-300/40 hover:text-white"
                    }`}
                >
                    {page}
                </button>
            ))}

            <button className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-purple-100/70 transition hover:border-fuchsia-300/40 hover:text-white">
                Next
            </button>
        </nav>
    );
}
