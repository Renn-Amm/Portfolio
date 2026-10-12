/* =============================================================
   CONTACT: "03. Contact". Form + services + links.
   The form has no backend: it opens the visitor's email app
   with the message filled in.
   Text comes from content/contact.ts; email/links from profile.ts.
   ============================================================= */
import { useState, type FormEvent } from "react";
import { contactText, profile } from "../../content";
import { CopyIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../../components/Icons";
import { SectionTitle } from "../../components/SectionTitle";
import "./Contact.css";

interface Props {
  onCopyEmail: () => void;
  notify: (message: string) => void;
}

type Field = "name" | "email" | "message";
const EMPTY_FORM: Record<Field, string> = { name: "", email: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact({ onCopyEmail, notify }: Props) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [invalid, setInvalid] = useState<Partial<Record<Field, boolean>>>({});

  const update = (field: Field, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setInvalid((i) => ({ ...i, [field]: false }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    const errors = { name: !name, email: !EMAIL_PATTERN.test(email), message: !message };
    setInvalid(errors);
    if (errors.name || errors.email || errors.message) {
      notify("Please fill in all fields");
      return;
    }

    const subject = encodeURIComponent(`Hello from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    notify("Opening your email app…");
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle num="03" title="Contact" subtitle={contactText.subtitle} />

        <div className="contact">
          {/* ---------- Form ---------- */}
          <form className="reveal" onSubmit={submit} noValidate>
            <div className="contact__field">
              <label htmlFor="cf-name" className="mono">name</label>
              <input id="cf-name" autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} aria-invalid={!!invalid.name} />
            </div>
            <div className="contact__field">
              <label htmlFor="cf-email" className="mono">email</label>
              <input id="cf-email" type="email" autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)} aria-invalid={!!invalid.email} />
            </div>
            <div className="contact__field">
              <label htmlFor="cf-message" className="mono">message</label>
              <textarea id="cf-message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} aria-invalid={!!invalid.message} />
            </div>
            <button type="submit" className="btn btn--solid">Send message</button>
            <p className="contact__note mono dim">{contactText.formNote}</p>
          </form>

          {/* ---------- Side: services + direct links ---------- */}
          <aside className="contact__side reveal">
            <p>{contactText.intro}</p>
            <ul className="bullets">
              {contactText.services.map((s) => <li key={s}>{s}</li>)}
            </ul>

            <div className="contact__email">
              <a href={`mailto:${profile.email}`} className="mono">{profile.email}</a>
              <button className="icon-btn icon-btn--sm" onClick={onCopyEmail} aria-label="Copy email address"><CopyIcon /></button>
            </div>

            <div className="contact__links">
              <a href={profile.github} target="_blank" rel="noopener" className="text-link"><GitHubIcon /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener" className="text-link"><LinkedInIcon /> LinkedIn</a>
              <a href={`mailto:${profile.email}`} className="text-link"><MailIcon /> Email</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
