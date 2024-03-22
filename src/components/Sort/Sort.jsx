import "./Sort.css";

const Sort = () => {
  // * To Dos
  // - UserInput bei onchange/onclick holen (bei select/option lassen, lieber was anderes wie bei wetterapp?)
  // - Sortierfunktion für 2x price, 1x rating analog zu movieDB
  // - Select/Option in article/p ändern
  // - globalen Fetch sortieren? bzw. eigentlich das an RenderProducts weitergegebene Ergebnis - wie? Haben wir globalen state für gefilterte/gesuchte Produkte?

  return (
    <section className="sort">
      <p>Sort by:</p>
      <select name="sort" id="sort">
        <option value="l-price">Lowest Price</option>
        <option value="h-price">Highest Price</option>
        <option value="rate">Rating</option>
      </select>
    </section>
  );
};

export default Sort;
