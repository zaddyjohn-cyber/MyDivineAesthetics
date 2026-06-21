import LegalLayout from '../components/layout/LegalLayout.jsx';

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title={<>Privacy <span className="italic gold-text">Policy</span></>}
      lastUpdated="June 2026"
    >
      <h2>Our promise</h2>
      <p>
        My Divine Aesthetics respects your privacy. This Privacy Policy explains what
        information we collect, how we use it, and the choices you have. By using our
        website or services, you agree to the terms below.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Contact details</strong> you provide when booking, submitting our
          contact form, or messaging us on WhatsApp — name, email, phone, treatment of
          interest, and any notes you share.
        </li>
        <li>
          <strong>Clinical information</strong> shared during consultation and
          treatment. This is handled separately under our HIPAA Notice and stored in a
          secure clinical record system.
        </li>
        <li>
          <strong>Site analytics</strong> — anonymized data about how visitors use the
          site (pages viewed, device type, approximate location). We use this to
          improve the site, not to identify you personally.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your inquiries and schedule appointments.</li>
        <li>To deliver and follow up on treatments you book with us.</li>
        <li>
          To send occasional emails about new services, education, and offers — only
          if you opt in. You can unsubscribe at any time.
        </li>
        <li>To meet our legal, regulatory, and clinical record-keeping obligations.</li>
      </ul>

      <h2>How we share your information</h2>
      <p>
        We do not sell, rent, or trade your information. We may share it only with
        trusted vendors who help us operate (e.g. our booking platform, email
        provider, payment processor) — and only to the extent they need to provide
        that service. They are bound to protect your information.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can opt out of marketing emails by clicking unsubscribe in any email.</li>
        <li>
          You can request a copy of, or deletion of, your personal information by
          emailing <a href="mailto:hello@mydivineaesthetics.com">hello@mydivineaesthetics.com</a>.
        </li>
        <li>You can decline cookies in your browser settings.</li>
      </ul>

      <h2>Security</h2>
      <p>
        We use industry-standard safeguards to protect the information you share. No
        method of transmission over the internet is 100% secure, but we work to keep
        your information safe and limit access to those who need it.
      </p>

      <h2>Children</h2>
      <p>
        Our services are designed for adults 18 and older. We do not knowingly
        collect information from anyone under 18 without parent or guardian consent.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The “last updated” date at the
        top reflects the most recent revision.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email{' '}
        <a href="mailto:hello@mydivineaesthetics.com">hello@mydivineaesthetics.com</a>{' '}
        or call <a href="tel:+16179430892">+1 (617) 943-0892</a>.
      </p>
    </LegalLayout>
  );
}
