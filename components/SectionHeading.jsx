/**
 * Editorial section marker: "(01) Selected work" over a hairline rule.
 * `dark` flips the rule color for use on the black contact section.
 */
export default function SectionHeading({ index, title, aside, dark = false }) {
  return (
    <div
      className={`mb-14 flex items-baseline justify-between border-t pt-5 ${
        dark ? "border-line-dark" : "border-line"
      }`}
    >
      <h2 className="label !text-inherit">
        <span className="text-faint">({index})</span>{" "}
        <span className={dark ? "text-paper" : "text-ink"}>{title}</span>
      </h2>
      {aside && <span className="label hidden sm:block">{aside}</span>}
    </div>
  );
}
