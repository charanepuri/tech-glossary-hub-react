import "./TermContent.css";

function TermContent({ term }) {
  return (
    <div className="term-content">
      <section className="term-section">
        <h2>Definition</h2>

        <p>{term.definition}</p>
      </section>

      <section className="term-section">
        <h2>Explanation</h2>

        <p>{term.explanation}</p>
      </section>

      <section className="term-section">
        <h2>Example</h2>

        <pre>
          <code>{term.example}</code>
        </pre>
      </section>
    </div>
  );
}

export default TermContent;