export default function SectionHeading({ index, title, aside, dark = false }) {
  return <div className={`section-heading ${dark ? "section-heading-dark" : ""}`}><p className="label"><span className="section-index">{index}</span>{title}</p>{aside && <span className="label section-aside">{aside}</span>}</div>;
}
