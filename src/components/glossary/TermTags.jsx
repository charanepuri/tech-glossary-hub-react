import "./TermTags.css";

function TermTags({ tags }) {
  return (
    <section className="term-tags-section">
      <h2>Tags</h2>

      <div className="term-tags">
        {tags.map((tag) => (
          <span key={tag}>
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TermTags;