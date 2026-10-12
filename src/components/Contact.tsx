import { useState, type FormEvent } from "react";
import { profile, services } from "../data";
import { CopyIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { SectionTitle } from "./SectionTitle";

interface Props {
  onCopyEmail: () => void;
  notify: (msg: string) => void;
}

type Fields = { name: string; email: string; message: string };
const EMPTY: Fields = { name: "", email: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact({ onCopyEmail, notify }: Props) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, boolean>>>({});

  const set = (k: keyof Fields) => (v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: false }));
  };

  // No backend: the form opens the visitor's email app with everything filled in.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next = {
      name: !fields.name.trim(),
      email: !EMAIL_RE.test(fields.email.trim()),
      message: !fields.message.trim(),
    };
    setErrors(next);
    if (next.name || next.email || next.message) {
      notify("Please fill in all fields");
      return;
    }
    const subject = encodeURIComponent(`Hello from ${fields.name.trim()}`);
    const body = encodeURIComponent(`${fields.message.trim()}\n\n— ${fields.name.trim()} (${fields.email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    notify("Opening your email app…");
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle num="03" title="Contact" sub="Hiring, have a process worth automating, or an app that needs building? Let's talk." />
        <div className="contact">
          <form className="contact__form reveal" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="cf-name" className="mono">name</label>
              <input id="cf-name" autoComplete="name" value={fields.name} onChange={(e) => set("name")(e.target.value)} aria-invalid={!!errors.name} />
            </div>
            <div className="field">
              <label htmlFor="cf-email" className="mono">email</label>
              <input id="cf-email" type="email" autoComplete="email" value={fields.email} onChange={(e) => set("email")(e.target.value)} aria-invalid={!!errors.email} />
            </div>
            <div className="field">
              <label htmlFor="cf-message" className="mono">message</label>
              <textarea id="cf-message" rows={5} value={fields.message} onChange={(e) => set("message")(e.target.value)} aria-invalid={!!errors.message} />
            </div>
            <button type="submit" className="btn btn--solid">Send message</button>
            <p className="contact__note mono dim">// opens your email app with the message ready to send</p>
          </form>

          <aside className="contact__side reveal">
            <p>I'm open to full-time roles, freelance projects and collaborations. I can help with:</p>
            <ul className="bullets">{services.map((s) => <li key={s}>{s}</li>)}</ul>
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
