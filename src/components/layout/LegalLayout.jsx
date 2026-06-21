import PageHero from '../sections/PageHero.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';

export default function LegalLayout({ eyebrow, title, lastUpdated, children, withCta = true }) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={lastUpdated ? `Last updated ${lastUpdated}.` : undefined}
      />
      <section className="relative pb-16">
        <div className="container-luxe max-w-3xl">
          <article className="rounded-[28px] border border-white/60 bg-white/75 p-8 backdrop-blur-xl sm:p-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-warmbrown-700 [&_h2]:mt-10 [&_h2:first-child]:mt-0 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-warmbrown-700 [&_h3]:mt-7 [&_p]:mt-4 [&_p]:text-warmbrown-600 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-warmbrown-600 [&_ul]:space-y-1.5 [&_a]:text-warmbrown-700 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-warmbrown-500">
            {children}
          </article>
        </div>
      </section>
      {withCta && <FinalCTA />}
    </>
  );
}
