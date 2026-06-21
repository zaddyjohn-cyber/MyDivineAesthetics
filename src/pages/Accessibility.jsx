import LegalLayout from '../components/layout/LegalLayout.jsx';

export default function Accessibility() {
  return (
    <LegalLayout
      eyebrow="Accessibility"
      title={<>Accessibility <span className="italic gold-text">Statement</span></>}
      lastUpdated="June 2026"
    >
      <h2>Our commitment</h2>
      <p>
        My Divine Aesthetics is committed to ensuring our website and our studio are
        accessible to people of all abilities. We believe sacred self-care should be
        available to every body, every story, every journey.
      </p>

      <h2>Standards we follow</h2>
      <p>
        This website is designed to substantially conform to the Web Content
        Accessibility Guidelines (WCAG) 2.1, Level AA. We test for keyboard
        navigation, color contrast, alt text on meaningful images, and screen-reader
        compatibility.
      </p>

      <h2>Ongoing work</h2>
      <p>
        We treat accessibility as an ongoing practice, not a checkbox. We regularly
        review our pages and welcome feedback that helps us do better.
      </p>

      <h2>In-studio access</h2>
      <ul>
        <li>The studio entrance is step-free with accessible parking nearby.</li>
        <li>Treatment chairs accommodate a range of bodies and mobility needs.</li>
        <li>
          Please let us know about any accommodations you need when booking —
          additional time, lighting adjustments, sensory-sensitive scheduling, ASL
          interpretation requests — and we’ll arrange it with care.
        </li>
      </ul>

      <h2>Tell us what we can fix</h2>
      <p>
        If you experience any difficulty using this site or visiting the studio,
        please email{' '}
        <a href="mailto:hello@mydivineaesthetics.com">hello@mydivineaesthetics.com</a>{' '}
        or call <a href="tel:+16179430892">+1 (617) 943-0892</a>. We aim to respond
        within two business days and to resolve issues quickly.
      </p>
    </LegalLayout>
  );
}
