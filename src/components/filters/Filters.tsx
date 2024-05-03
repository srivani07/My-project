import "./Filters.css";

export const Filters = () => {
  return (
    <section className="filters-block">
      <div className="filter-speech-bubble">Filters</div>
      <form className="filter-form">
        <select className="filter-drop-down">
          <option value="">Select range</option>
          <option value="1">range 2</option>
          <option value="1">range 1</option>
        </select>
        <div className="radio-block">
          <input className="radio" id="summary" type="radio" value="SUMMARY" name="filter" />
          <label htmlFor="summary">Summary</label>
        </div>
        <div className="radio-block">
          <input className="radio" id="branch-wise" type="radio" value="BRANCH-WISE" name="filter" />
          <label htmlFor="branch-wise">Branch wise</label>
        </div>
      </form>
    </section>
  );
};
