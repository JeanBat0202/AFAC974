import ArtDisplay from "../components/ArtDisplay";

function Gallery() {
  return (
    <div className="grid-container">
      <section className="art-display">
        <ArtDisplay className="one" />
        <ArtDisplay className="two" />
        <ArtDisplay className="three" />
        <ArtDisplay className="fourth" />
        <ArtDisplay className="five" />
      </section>
    </div>
  );
}

export default Gallery;
