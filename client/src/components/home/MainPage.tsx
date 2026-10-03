import Link from "next/link";

type Card = {
    tag: string;
    heading: string;
    description: string;
    href: string;
};

// This will hold up to 20 cards. Only the first one is filled for now.
// Add the next 19 objects here and they will appear automatically in the grid.
const cards: Card[] = [
    {
        tag: "Sorting",
        heading: "Sorting Related Practice",
        description:
            'Practicing sorting, searching, and filtering algorithms in code. Working through bubble, selection, insertion, merge, and quick sort with hands-on problems.',
        href: "/sorting",
    },
];

export default function MainPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 px-6 py-16 sm:px-10 lg:px-16">
            <header className="mx-auto mb-14 max-w-5xl text-center">
                <h1 className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                    Practice Playground
                </h1>
            </header>

            <section className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {cards.map((card) => (
                    <Link
                        key={card.href}
                        href={card.href}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-300/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-fuchsia-500/20"
                    >
                        <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-500/30 opacity-60 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                        <span className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                            {card.tag}
                        </span>

                        <h2 className="mt-4 text-lg font-bold text-white transition-colors group-hover:text-fuchsia-200">
                            {card.heading}
                        </h2>

                        <p className="mt-2 text-sm leading-relaxed text-purple-100/80 line-clamp-3">
                            {card.description}
                        </p>

                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-fuchsia-300 transition-transform duration-300 group-hover:translate-x-1">
                            Explore
                            <span aria-hidden="true">&rarr;</span>
                        </span>
                    </Link>
                ))}
            </section>
        </main>
    );
}

