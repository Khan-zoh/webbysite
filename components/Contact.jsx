const socials = [
  ["GitHub", "https://github.com/Khan-zoh"],
  ["LinkedIn", "https://linkedin.com/in/zohair-khan-2352672a5"],
  ["Request résumé", "mailto:khan.zoh25@gmail.com?subject=Resume%20request"],
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell">
        <div className="contact-top label"><span>04 / Start a conversation</span><span className="availability"><i aria-hidden="true" />Open to data internships</span></div>
        <div className="contact-main">
          <h2>Let’s make<br />something <em>useful.</em></h2>
          <a href="mailto:khan.zoh25@gmail.com" className="contact-arrow" aria-label="Email Zohair Khan"><span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-bottom">
          <p>I’m looking for internships in data engineering and ML. Have a role in mind, a question, or a wonderfully messy dataset? I’d like to hear about it.</p>
          <a href="mailto:khan.zoh25@gmail.com" className="contact-email link-fade">khan.zoh25@gmail.com</a>
        </div>
        <footer>
          <p className="label">© {new Date().getFullYear()} Zohair Khan</p>
          <div className="footer-links">{socials.map(([label, href]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="link-grow">{label} ↗</a>)}</div>
          <a href="#top" className="back-top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
