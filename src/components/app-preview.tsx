/**
 * A picture of the product, drawn rather than photographed.
 *
 * A screenshot would be out of date the week after it was taken, would carry a
 * real salon's customer names, and would need a designer every time the app
 * changed. This is the day's diary as the front desk sees it, built from the
 * same shapes and colours — accurate about the *idea* without pretending to be
 * a specific Tuesday in a specific salon.
 */

const COLUMNS = [
  { name: 'Priya', hue: 'bg-rose-400' },
  { name: 'Rahul', hue: 'bg-sky-400' },
  { name: 'Ananya', hue: 'bg-violet-400' },
];

/** top = where in the day it starts, span = how long it runs. */
const BOOKINGS: { col: number; top: number; span: number; label: string; price: string }[] = [
  { col: 0, top: 0, span: 2, label: 'Colour · global', price: '₹3,200' },
  { col: 0, top: 3, span: 1, label: 'Cut & finish', price: '₹900' },
  { col: 1, top: 1, span: 1, label: 'Beard trim', price: '₹350' },
  { col: 1, top: 2.5, span: 2, label: 'Keratin', price: '₹4,500' },
  { col: 2, top: 0.5, span: 1.5, label: 'Facial', price: '₹1,400' },
  { col: 2, top: 3.5, span: 1, label: 'Threading', price: '₹150' },
];

const HOURS = ['10', '11', '12', '1', '2'];

export function AppPreview() {
  return (
    <div className="relative">
      {/* The window */}
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_2px_4px_rgba(28,25,23,0.04),0_24px_64px_-24px_rgba(28,25,23,0.28)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-stone-200 bg-stone-50/80 px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
          </span>
          <span className="ml-2 text-2xs text-ink-subtle">Today · Church Street</span>
          <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-2xs font-medium text-emerald-700">
            6 booked
          </span>
        </div>

        <div className="grid grid-cols-[2.2rem_1fr]">
          {/* Hours down the side */}
          <div className="border-r border-stone-100 pt-9">
            {HOURS.map((hour) => (
              <div key={hour} className="tnum h-12 pr-2 text-right text-2xs text-ink-subtle">
                {hour}
              </div>
            ))}
          </div>

          <div>
            {/* Stylist columns */}
            <div className="grid grid-cols-3 border-b border-stone-100">
              {COLUMNS.map((column) => (
                <div key={column.name} className="flex items-center gap-1.5 px-2 py-2.5">
                  <span className={`h-2 w-2 rounded-full ${column.hue}`} />
                  <span className="truncate text-2xs font-medium text-ink">{column.name}</span>
                </div>
              ))}
            </div>

            {/* The day */}
            <div className="relative grid h-60 grid-cols-3">
              {/* Hour lines */}
              {HOURS.map((hour, index) => (
                <div
                  key={hour}
                  className="pointer-events-none absolute inset-x-0 border-t border-stone-100"
                  style={{ top: `${index * 48}px` }}
                />
              ))}

              {COLUMNS.map((_, columnIndex) => (
                <div key={columnIndex} className="relative border-r border-stone-100 last:border-r-0">
                  {BOOKINGS.filter((booking) => booking.col === columnIndex).map((booking) => (
                    <div
                      key={booking.label}
                      className="absolute inset-x-1 overflow-hidden rounded-lg border border-white/70 px-1.5 py-1 shadow-sm"
                      style={{
                        top: `${booking.top * 48 + 3}px`,
                        height: `${booking.span * 48 - 6}px`,
                        background:
                          columnIndex === 0
                            ? 'linear-gradient(160deg,#fff1f2,#ffe4e6)'
                            : columnIndex === 1
                              ? 'linear-gradient(160deg,#f0f9ff,#e0f2fe)'
                              : 'linear-gradient(160deg,#f5f3ff,#ede9fe)',
                      }}
                    >
                      <p className="truncate text-[10px] font-medium leading-tight text-ink">{booking.label}</p>
                      <p className="tnum text-[10px] leading-tight text-ink-muted">{booking.price}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The strip along the bottom — the numbers an owner checks */}
        <div className="grid grid-cols-3 gap-px border-t border-stone-200 bg-stone-200">
          {[
            { label: 'Billed today', value: '₹18,400' },
            { label: 'Rebooked', value: '4 of 6' },
            { label: 'Avg bill', value: '₹1,530' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white px-3 py-2.5">
              <p className="tnum text-sm font-semibold text-ink">{stat.value}</p>
              <p className="text-2xs text-ink-subtle">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* A WhatsApp confirmation, floating off the corner */}
      <div className="absolute -bottom-20 -left-10 hidden w-56 rounded-xl border border-stone-200 bg-white p-3 shadow-[0_12px_32px_-12px_rgba(28,25,23,0.35)] sm:block">
        <div className="flex items-center gap-1.5">
          <span className="h-4 w-4 rounded-full bg-emerald-500" />
          <span className="text-2xs font-medium text-ink">WhatsApp · sent</span>
        </div>
        <p className="mt-1.5 text-[11px] leading-snug text-ink-muted">
          Hi Meera, you&rsquo;re booked with Priya tomorrow at 11:00. See you then!
        </p>
      </div>
    </div>
  );
}
