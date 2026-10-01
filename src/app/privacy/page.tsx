import type { Metadata } from 'next';
import { Bullets, Callout, LegalPage, P, Section } from '@/components/legal/prose';
import { LEGAL, PRODUCT } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'What Parlon does with a salon’s data and its customers’ data: what is stored, who it is shared with, and how to get it back or have it deleted.',
};

/**
 * WRITTEN FROM THE SCHEMA, NOT FROM A TEMPLATE.
 *
 * Every field named below is one the app really stores, and every company named
 * is one a message or an image really passes through. That is not diligence for
 * its own sake: a privacy policy is the one document where being vague is the
 * failure. Google's OAuth review reads it looking for specific disclosures, and
 * a salon owner reads it looking for one answer about their customer list.
 *
 * Two disclosures here are the ones a generic policy would have missed, and both
 * are the kind that matter if anybody ever checks:
 *
 *   · customers' WhatsApp messages are sent to a third-party AI model to write
 *     the replies — a transfer of personal data to a processor nobody would
 *     guess at from the outside;
 *   · no card details exist anywhere in the system, because there is no payment
 *     gateway at all. Most policies have to hedge about payment data. This one
 *     can say plainly that there is none, which is worth more than a paragraph
 *     of reassurance.
 */
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      intro={
        <>
          <p>
            {PRODUCT} is software that salons use to run their business — the diary, the till, the customer book and
            the messages that go with them. This explains what we store, who it goes to, and how to get it back or
            have it removed.
          </p>
          <p className="mt-3">
            It is written to be read rather than to be defensible. If something here is unclear, that is a fault worth
            telling us about.
          </p>
        </>
      }
    >
      <Section id="two-roles" title="Two kinds of data, and who is responsible for each">
        <P>
          This distinction runs through everything below, so it comes first.
        </P>
        <Bullets
          items={[
            <>
              <strong className="font-medium text-ink">A salon’s own account data</strong> — the business, its branches,
              its staff logins. {PRODUCT} decides how this is handled, and we are responsible for it.
            </>,
            <>
              <strong className="font-medium text-ink">A salon’s customers’ data</strong> — the people who book
              appointments. The salon decides what to collect and what to send; we hold and process it on their
              instructions. The salon is responsible for it, and we act for them.
            </>,
          ]}
        />
        <P>
          In practice that means if you are a salon’s customer and want your details changed or removed, the salon is
          the right place to ask. They can do it themselves in the app. If you cannot reach them, write to us at{' '}
          <a href={`mailto:${LEGAL.contactEmail}`} className="text-brand-700 underline underline-offset-2">
            {LEGAL.contactEmail}
          </a>{' '}
          and we will pass it on.
        </P>
      </Section>

      <Section id="what-we-store" title="What is stored">
        <P>Of the salon and its staff:</P>
        <Bullets
          items={[
            'Business name, address, GST number, contact details and branches.',
            'A login for each staff member: name, email, phone, role, and a password that is stored only as a one-way hash — we cannot read it, and neither can anyone else with access to the database.',
            'A record of actions taken in the app — who changed a price, who voided a bill, who reset whose password — kept so a salon can answer that question months later.',
          ]}
        />

        <P>Of the salon’s customers, as the salon enters or collects it:</P>
        <Bullets
          items={[
            'Name, phone number, an alternative number, email, gender, date of birth, address and city.',
            'Appointments, the services taken, which staff member served them, and visit history.',
            'Bills, the amounts, and payments recorded against them.',
            'Loyalty points, memberships, packages and any offers used.',
            'Feedback and ratings they leave, including free text.',
            'Notes and tags the salon adds about them.',
            'Whether they have agreed to receive messages on WhatsApp, SMS and email — held separately per channel.',
            'Messages sent to them and messages they send back, including the contents.',
          ]}
        />

        <P>And technically, of anyone using the app:</P>
        <Bullets
          items={[
            'IP address and browser, recorded with sign-ins and with sensitive actions.',
            'Session cookies. They hold a sign-in token and nothing else — no tracking, no advertising cookies, no analytics that follow anybody between sites.',
          ]}
        />
      </Section>

      <Section id="payments" title="Card details">
        <Callout>
          No card or bank details are stored anywhere in {PRODUCT}, because there is no payment gateway in it at all.
        </Callout>
        <P>
          When a salon records a payment, the app stores the amount, the method (cash, card, UPI, transfer) and
          optionally a reference number the salon types in. The card itself is handled by whatever machine or app the
          salon already uses, and never reaches us.
        </P>
        <P>
          Salons pay us for {PRODUCT} by bank transfer or UPI against an invoice. We hold no payment instrument for
          them either.
        </P>
      </Section>

      <Section id="ai" title="The assistant, and where messages go">
        <P>
          Salons can switch on an assistant that replies to customers on WhatsApp. When it is on, the customer’s
          message, recent messages in that conversation, and the salon’s own details — services, prices, opening hours,
          and that customer’s own appointments and offers — are sent to a third-party AI provider, which returns
          suggested text.
        </P>
        <P>
          We send what the reply needs and no more. The provider is used to generate the reply and we do not permit
          the data to be used to train their models. A salon can turn the assistant off, and a conversation can be
          handed to a person at any time.
        </P>
        <P>
          Replies are also kept in the salon’s own message history, so staff can see exactly what was said in their
          name.
        </P>
      </Section>

      <Section id="sharing" title="Who else sees it">
        <Callout>We do not sell data, and we do not share it for anyone else’s advertising.</Callout>
        <P>Data reaches these companies only because the service cannot work without them:</P>
        <Bullets
          items={[
            <>
              <strong className="font-medium text-ink">Meta</strong> — WhatsApp messages, through the WhatsApp Business
              Platform.
            </>,
            <>
              <strong className="font-medium text-ink">MSG91</strong> — SMS delivery in India.
            </>,
            <>
              <strong className="font-medium text-ink">Resend</strong> — email delivery.
            </>,
            <>
              <strong className="font-medium text-ink">Cloudinary</strong> — images a salon uploads, such as its logo
              and gallery photos.
            </>,
            <>
              <strong className="font-medium text-ink">An AI provider</strong> — message text, as described above.
            </>,
            <>
              <strong className="font-medium text-ink">Amazon Web Services</strong> and{' '}
              <strong className="font-medium text-ink">Vercel</strong> — where the application and database run.
            </>,
            <>
              <strong className="font-medium text-ink">Google</strong> — only if a salon connects its Google Business
              Profile, and then only to read and reply to that salon’s own reviews. We ask for no more access than
              that, and the salon can disconnect it at any time.
            </>,
          ]}
        />
        <P>
          Beyond those, data is disclosed only where the law requires it, and we will tell the salon unless we are
          forbidden from doing so.
        </P>
      </Section>

      <Section id="messages" title="Messages and consent">
        <P>
          Consent is stored per channel and per customer, and a message is not sent on a channel where consent has not
          been given. Marketing is treated separately from service messages: a customer who has opted out of offers
          still receives their appointment confirmation, because that is the message they asked for by booking.
        </P>
        <P>
          Replying STOP on WhatsApp opts that customer out immediately and automatically. The salon cannot override
          it.
        </P>
      </Section>

      <Section id="security" title="How it is protected">
        <Bullets
          items={[
            'Passwords are stored as bcrypt hashes and are never recoverable, by us or by anyone else.',
            'Access tokens for connected accounts are encrypted before they are stored.',
            'Sign-in tokens live in httpOnly cookies, so no script in the browser can read them.',
            'Every salon’s data is isolated at the database layer, not by a filter somebody has to remember to write.',
            'Staff see only what their role allows, and a salon’s owner decides who may see money, payroll and customer contact details.',
          ]}
        />
        <P>
          No system is beyond compromise. If one happens and it affects personal data, we will tell the salons
          concerned without undue delay and say plainly what was involved.
        </P>
      </Section>

      <Section id="keeping" title="How long it is kept">
        <P>
          A salon’s data is kept while their account is open, because the whole point of a customer book is that last
          year’s visit is still in it.
        </P>
        <P>
          If a salon closes their account, their records stay readable and exportable for a period so they can take
          them away, and are then deleted. Some records are kept longer where Indian tax law requires it — invoices,
          chiefly — and those are kept for that purpose and nothing else.
        </P>
        <P>
          A salon can delete an individual customer at any time, and we delete what we hold for that person on their
          instruction.
        </P>
      </Section>

      <Section id="rights" title="Your rights">
        <P>
          Under the Digital Personal Data Protection Act, 2023, a person whose data is held may ask for a copy of it,
          ask for it to be corrected, ask for it to be erased, and withdraw consent they have given.
        </P>
        <P>
          For a salon’s customer, the salon answers those requests — they hold the relationship and they can act on it
          in the app immediately. For a salon’s own account data, write to us.
        </P>
        <P>
          A salon can export its own data from the app at any time, including while the account is suspended for
          non-payment. We do not hold a business’s records hostage over an invoice.
        </P>
      </Section>

      <Section id="children" title="Children">
        <P>
          {PRODUCT} is a tool for businesses and is not directed at children. Salons should not record a child’s
          details except where a parent or guardian has given them for a booking.
        </P>
      </Section>

      <Section id="changes" title="Changes">
        <P>
          When this changes materially we will update the date at the top and tell salons in the app. Continuing to
          use {PRODUCT} after that means the updated version applies.
        </P>
      </Section>

      <Section id="contact" title="Who we are">
        <P>
          {LEGAL.entity}
          <br />
          {LEGAL.address}
          <br />
          <a href={`mailto:${LEGAL.contactEmail}`} className="text-brand-700 underline underline-offset-2">
            {LEGAL.contactEmail}
          </a>
        </P>
      </Section>
    </LegalPage>
  );
}
