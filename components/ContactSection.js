import { contact } from "@/data/portfolio";

export function ContactSection({ expanded = false }) {
  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let us build something useful together.</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-panel">
          <h3>Reach out</h3>
          <p>
            Use these placeholder details for now. Replace them with your actual email, phone,
            location, and social profiles before publishing.
          </p>
          <ul className="contact-list">
            {contact.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <a href={item.href}>{item.value}</a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your full name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell me about your project or opportunity" />
          </label>
          <button className="button primary" type="submit">
            Send Message
          </button>
          {expanded ? <p className="form-note">Connect this form to Formspree, EmailJS, or your own API route.</p> : null}
        </form>
      </div>
    </section>
  );
}
