import { Quote, Star } from 'lucide-react';
import { REVIEWS, type Review } from '@/content/reviews';

/**
 * What salons say, when any of them have said anything.
 *
 * Renders nothing at all while there are no reviews. A testimonials section
 * standing empty — or worse, filled with invented quotes — costs more trust
 * than it buys, and the people reading this page are salon owners who will
 * search the names.
 */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={
            index < rating ? 'h-3.5 w-3.5 fill-amber-400 text-amber-400' : 'h-3.5 w-3.5 text-stone-300'
          }
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="card card-lift flex h-full flex-col p-6">
      <Quote className="h-5 w-5 text-brand-300" aria-hidden />

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">“{review.quote}”</blockquote>

      {review.rating ? <div className="mt-5"><Stars rating={review.rating} /></div> : null}

      <figcaption className="mt-4 flex items-center gap-3 border-t border-stone-200 pt-4">
        {review.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={review.photo} alt="" className="h-9 w-9 rounded-full object-cover" />
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-brand-100 text-2xs font-semibold text-brand-700 ring-1 ring-brand-200/70">
            {initials(review.name)}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink">
            {review.name}
            {review.role ? <span className="font-normal text-ink-muted"> · {review.role}</span> : null}
          </p>
          <p className="truncate text-xs text-ink-muted">
            {review.salon}
            {review.city ? `, ${review.city}` : ''}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  if (REVIEWS.length === 0) return null;

  return (
    <section id="reviews" className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">From the front desk</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-4xl">What salons say</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
          Owners who moved their diary, their billing and their WhatsApp onto Parlon, in their own words.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <ReviewCard key={`${review.name}-${review.salon}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
