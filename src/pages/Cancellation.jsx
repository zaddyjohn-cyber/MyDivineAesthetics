import LegalLayout from '../components/layout/LegalLayout.jsx';

export default function Cancellation() {
  return (
    <LegalLayout
      eyebrow="Cancellation Policy"
      title={<>Cancellation <span className="italic gold-text">& Reschedule</span></>}
      lastUpdated="June 2026"
    >
      <h2>We get it — life happens.</h2>
      <p>
        Our policy exists so we can give every client the calm, unrushed experience
        they came for. When an appointment is canceled at the last minute, we lose
        the chance to offer that time to someone else.
      </p>

      <h2>Reschedules</h2>
      <ul>
        <li>
          Free reschedule when you give us <strong>at least 24 hours’ notice</strong>.
        </li>
        <li>
          Less than 24 hours’ notice may incur a <strong>50% rebooking fee</strong>{' '}
          based on the originally scheduled service.
        </li>
      </ul>

      <h2>Cancellations</h2>
      <ul>
        <li>
          Cancel <strong>48+ hours</strong> before your appointment and your deposit
          is fully refunded.
        </li>
        <li>
          Cancel within <strong>24–48 hours</strong>: your deposit becomes a credit
          you can apply to a future booking.
        </li>
        <li>
          Cancel within <strong>24 hours or no-show</strong>: the deposit is
          forfeited and a 50% service fee may apply.
        </li>
      </ul>

      <h2>Late arrivals</h2>
      <p>
        Please arrive 5–10 minutes early. If you’re more than 15 minutes late, we may
        need to shorten your service or reschedule to keep the day on time for the
        clients after you. Original service pricing still applies.
      </p>

      <h2>Deposits</h2>
      <p>
        A non-refundable deposit (typically $50–$100, depending on the service) is
        required to hold injectable, facial balancing, and GLP-1 appointments. The
        deposit is applied to your treatment total at checkout.
      </p>

      <h2>Medical & unexpected circumstances</h2>
      <p>
        If you’re ill, contagious, or experiencing a true emergency, please contact
        us — we’ll handle it with care and waive fees where appropriate.
      </p>

      <h2>How to cancel or reschedule</h2>
      <p>
        Reply to your appointment confirmation, message us on{' '}
        <a href="https://wa.me/16179430892" target="_blank" rel="noreferrer">WhatsApp</a>,
        or call <a href="tel:+16179430892">+1 (617) 943-0892</a>.
      </p>
    </LegalLayout>
  );
}
