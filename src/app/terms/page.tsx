import type { Metadata } from 'next';
import Link from 'next/link';
import { Bullets, Callout, LegalPage, P, Section } from '@/components/legal/prose';
import { LEGAL, PRODUCT } from '@/content/legal';

export const metadata: Metadata = {
  title: 'Terms',
  description:
    'The terms a salon agrees to when using Parlon: what the service is, how billing works, who owns the data, and what each side is responsible for.',
};

/**
 * THE TERMS, WRITTEN TO MATCH WHAT THE SOFTWARE ACTUALLY DOES.
 *
 * Three clauses here describe behaviour that is built rather than promised, and
 * they are the ones worth keeping honest as the product changes:
 *
 *   · non-payment makes an account read-only, not deleted — that is a real mode
 *     in the app, and the terms should not reserve a harsher right than the
 *     software exercises;
 *   · there is no payment gateway, so nothing is ever charged automatically;
 *   · messaging allowances can be exceeded to finish work already under way,
 *     and replies to customers are never cut off.
 *
 * The messaging clause carries the most weight commercially. Meta holds the
 * SENDER responsible for what goes out on their number, and the sender is the
 * salon. If that is not said here, the first salon to buy a list and blast it
 * will take their own number down and expect us to fix it.
 */
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      intro={
        <>
          <p>
            These are the terms on which a salon uses {PRODUCT}. They are meant to be read by the person who runs the
            salon, not only by a lawyer, so they are in plain words.
          </p>
          <p className="mt-3">
            By creating an account or using {PRODUCT}, the salon agrees to them.
          </p>
        </>
      }
    >
      <Section id="service" title="What the service is">
        <P>
          {PRODUCT} is software for running a salon: appointments, billing and GST invoices, a customer book, stock,
          staff attendance and commission, and messaging to customers over WhatsApp, SMS and email.
        </P>
        <P>
          It is provided as a service over the internet. There is nothing to install, and we may improve or change how
          features work. If we remove something a salon depends on, we will say so in advance.
        </P>
      </Section>

      <Section id="account" title="The account, and who may use it">
        <P>
          A salon creates logins for its own staff and chooses what each may see. Those logins belong to the salon, and
          the salon is responsible for what is done with them.
        </P>
        <Bullets
          items={[
            'Keep passwords to one person each. A login shared between the front desk and a stylist makes the activity record meaningless, which is the one thing nobody can reconstruct afterwards.',
            'Remove a login when somebody leaves. The owner can do this at any time.',
            'Tell us promptly if you believe an account has been taken.',
          ]}
        />
        <P>
          Staff cannot reset their own password. An owner or manager does it for them, and a salon’s sole owner can ask
          us — we verify them against the details already on the account before issuing anything.
        </P>
      </Section>

      <Section id="data" title="Your data is yours">
        <Callout>
          A salon owns its records. We do not sell them, we do not use them to advertise, and we do not use one salon’s
          data to benefit another.
        </Callout>
        <P>
          We hold and process a salon’s customer data on that salon’s instructions, as described in the{' '}
          <Link href="/privacy" className="text-brand-700 underline underline-offset-2">
            privacy policy
          </Link>
          . A salon can export its data at any time, in formats that open elsewhere.
        </P>
        <P>
          The salon is responsible for having the right to hold the customer details it enters, and for having consent
          where consent is needed to message them.
        </P>
      </Section>

      <Section id="billing" title="Paying for it">
        <Callout>Nothing is ever charged automatically. There is no payment gateway in {PRODUCT} at all.</Callout>
        <P>
          Plans are billed in advance for the period chosen. We invoice; the salon pays by bank transfer or UPI. No
          card is stored, and no amount is taken without the salon sending it.
        </P>
        <P>
          Prices can change. We will tell a salon before a change applies to them, and it never applies to a period
          already paid for.
        </P>
      </Section>

      <Section id="unpaid" title="If an invoice goes unpaid">
        <P>
          The account becomes <strong className="font-medium text-ink">read-only</strong>. Everything stays readable
          and exportable; what stops is saving new records and sending new messages.
        </P>
        <P>
          That is deliberate. A salon behind on an invoice should not lose access to its own customer book and its own
          bills — those are their records, not ours, and withholding them would be using a business’s own history as
          leverage. Settle the invoice and sending resumes, usually the same day.
        </P>
        <P>
          An account left unpaid for a long period may be closed, and we will give clear notice and a window to export
          before anything is deleted.
        </P>
      </Section>

      <Section id="messaging" title="Messaging, and what the salon is responsible for">
        <P>
          Messages go out in the salon’s name, from the salon’s own WhatsApp number. WhatsApp holds the sender
          responsible for them, and the sender is the salon.
        </P>
        <Bullets
          items={[
            'Message only people who have given you their number for this purpose. Do not upload a bought list.',
            'Honour opt-outs. STOP works automatically and cannot be overridden.',
            'Keep marketing to people who agreed to receive it. Appointment confirmations and reminders are different and are not marketing.',
            'Follow WhatsApp’s own policies. Repeated complaints lower a number’s quality rating, reduce how many messages it may send, and can get it blocked by Meta — and that is Meta’s decision, not one we can reverse.',
          ]}
        />
        <P>
          Each plan includes a monthly message allowance per channel. Going over does not silently cost money: sending
          stops, except that a campaign already running is allowed to finish, because half a send is worse for a
          salon’s customers than either outcome. Extra messages can be bought as a top-up.
        </P>
        <P>
          Replies to customers who have messaged you are the exception and are never cut off. Going quiet on somebody
          mid-conversation costs a salon more than the message does, so those keep sending and appear as an overage to
          be settled.
        </P>
      </Section>

      <Section id="acceptable" title="What you may not do with it">
        <Bullets
          items={[
            'Use it to send anything unlawful, deceptive or harassing.',
            'Try to reach another salon’s data, or test our security without asking us first.',
            <>Resell {PRODUCT} or present it as your own software without a written agreement.</>,
            'Automate access in a way that degrades the service for other salons.',
          ]}
        />
      </Section>

      <Section id="availability" title="Availability">
        <P>
          We work to keep {PRODUCT} available and to keep backups, but no internet service runs without interruption.
          Planned maintenance is announced where we can; outages at our hosting or messaging providers are not within
          our control.
        </P>
        <P>
          A salon should not rely on {PRODUCT} as its only record of something it is legally required to keep. Export
          periodically.
        </P>
      </Section>

      <Section id="liability" title="Liability">
        <P>
          {PRODUCT} is provided as it is. To the extent the law allows, we are not liable for lost profits, lost
          bookings or indirect losses, and our total liability for any claim is limited to the fees paid for the three
          months before it arose.
        </P>
        <P>
          Nothing here limits liability that cannot be limited by law, including for fraud.
        </P>
      </Section>

      <Section id="ending" title="Ending the agreement">
        <P>
          A salon may stop at any time, and the plan runs to the end of the period already paid for. We may end it if
          these terms are seriously or repeatedly broken, or if an account stays unpaid after notice.
        </P>
        <P>
          Either way, the salon gets a window to export everything before the data is deleted. We will not delete a
          salon’s records without telling them first.
        </P>
      </Section>

      <Section id="law" title="Law">
        <P>
          These terms are governed by the laws of India, and the courts at {LEGAL.jurisdiction} have exclusive
          jurisdiction.
        </P>
      </Section>

      <Section id="changes" title="Changes to these terms">
        <P>
          We will update the date at the top and tell salons in the app. If a change materially reduces what a salon
          gets, they may end the agreement and we will refund the unused part of what they have paid.
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
