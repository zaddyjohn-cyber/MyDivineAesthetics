import LegalLayout from '../components/layout/LegalLayout.jsx';

export default function Hipaa() {
  return (
    <LegalLayout
      eyebrow="HIPAA Notice"
      title={<>Notice of <span className="italic gold-text">Privacy Practices</span></>}
      lastUpdated="June 2026"
    >
      <p>
        This Notice describes how medical information about you may be used and
        disclosed by My Divine Aesthetics and how you can get access to this
        information. Please review it carefully.
      </p>

      <h2>Our duties</h2>
      <p>
        We are required by law to maintain the privacy of your protected health
        information (PHI), to provide you with this Notice, and to follow the terms
        of the Notice currently in effect.
      </p>

      <h2>How we may use and disclose your PHI</h2>
      <ul>
        <li>
          <strong>Treatment</strong> — to provide and coordinate your care, including
          consultations, treatment planning, and follow-up.
        </li>
        <li>
          <strong>Payment</strong> — to bill for services you receive, including
          insurance claims when applicable.
        </li>
        <li>
          <strong>Health-care operations</strong> — for internal quality, staff
          training, and business management of the practice.
        </li>
        <li>
          <strong>Appointment reminders</strong> — to remind you about upcoming
          visits via text, email, or phone.
        </li>
        <li>
          <strong>As required by law</strong> — including public-health reporting,
          court orders, and prevention of serious harm.
        </li>
      </ul>

      <h2>Uses requiring your authorization</h2>
      <p>
        We will obtain your written authorization before using or disclosing your PHI
        for marketing purposes, sale of information, or most uses of psychotherapy
        notes. You can revoke that authorization in writing at any time.
      </p>

      <h2>Your rights</h2>
      <ul>
        <li>
          <strong>Inspect and copy</strong> your medical record, with limited
          exceptions.
        </li>
        <li>
          <strong>Request an amendment</strong> if you believe information is
          incorrect or incomplete.
        </li>
        <li>
          <strong>Request restrictions</strong> on certain uses or disclosures.
        </li>
        <li>
          <strong>Request confidential communications</strong> — for example, by mail
          to a specific address or only by phone.
        </li>
        <li>
          <strong>Receive an accounting</strong> of certain disclosures we have made.
        </li>
        <li>
          <strong>Receive a paper copy</strong> of this Notice on request, even if
          you have agreed to receive it electronically.
        </li>
      </ul>

      <h2>Complaints</h2>
      <p>
        If you believe your privacy rights have been violated, you may file a
        complaint with us by emailing{' '}
        <a href="mailto:hello@mydivineaesthetics.com">hello@mydivineaesthetics.com</a>{' '}
        or with the U.S. Department of Health & Human Services Office for Civil
        Rights. We will not retaliate against you for filing a complaint.
      </p>

      <h2>Changes to this Notice</h2>
      <p>
        We reserve the right to change this Notice and to make the new version
        effective for all PHI we maintain. The current Notice will be posted in the
        studio and at this URL.
      </p>
    </LegalLayout>
  );
}
