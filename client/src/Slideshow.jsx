import { useState } from "react";

const slides = [
  { id: 1, content: "https://firebasestorage.googleapis.com/v0/b/aquila-web-hosting.appspot.com/o/products%20other%2FPorositonline.gf%2F%E2%AD%90%EF%B8%8FSUPER%20ZBRITJE%20%20FULLBOX%E2%9A%A1%EF%B8%8FSuper%20zbritje%20Gjith%20modelet%F0%9F%93%AETransporti%20falas%20n%C3%AB%20gjith%20kosov%C3%ABn%F0%9F%87%BD%F0%9F%87%B0%F0%9F%9A%96(Shqip%C3%ABri%F0%9F%87%A6%F0%9F%87%B1%20%2C%20maqedoni%F0%9F%87%B2%F0%9F%87%B0%203%E2%82%AC)%20(1).jpg?alt=media&token=7076140b-e245-4579-aee4-434661bff2f4", color: "#ffadad" },
  { id: 2, content: "https://firebasestorage.googleapis.com/v0/b/aquila-web-hosting.appspot.com/o/products%20other%2FPorositonline.gf%2F%E2%AD%90%EF%B8%8FSUPER%20ZBRITJE%20%20FULLBOX%E2%9A%A1%EF%B8%8FSuper%20zbritje%20Gjith%20modelet%F0%9F%93%AETransporti%20falas%20n%C3%AB%20gjith%20kosov%C3%ABn%F0%9F%87%BD%F0%9F%87%B0%F0%9F%9A%96(Shqip%C3%ABri%F0%9F%87%A6%F0%9F%87%B1%20%2C%20maqedoni%F0%9F%87%B2%F0%9F%87%B0%203%E2%82%AC)%20(2).jpg?alt=media&token=eb476ffa-ce9e-4fc6-a6d7-4056390bc388", color: "#ffd6a5" },
  { id: 3, content: "https://firebasestorage.googleapis.com/v0/b/aquila-web-hosting.appspot.com/o/products%20other%2FPorositonline.gf%2F%E2%AD%90%EF%B8%8FSUPER%20ZBRITJE%20%20FULLBOX%E2%9A%A1%EF%B8%8FSuper%20zbritje%20Gjith%20modelet%F0%9F%93%AETransporti%20falas%20n%C3%AB%20gjith%20kosov%C3%ABn%F0%9F%87%BD%F0%9F%87%B0%F0%9F%9A%96(Shqip%C3%ABri%F0%9F%87%A6%F0%9F%87%B1%20%2C%20maqedoni%F0%9F%87%B2%F0%9F%87%B0%203%E2%82%AC)%20(3).jpg?alt=media&token=4f894920-6a4b-4938-a1e1-e9b03d52041b", color: "#fdffb6" },
  { id: 4, content: "https://firebasestorage.googleapis.com/v0/b/aquila-web-hosting.appspot.com/o/products%20other%2FPorositonline.gf%2F%E2%AD%90%EF%B8%8FSUPER%20ZBRITJE%20%20FULLBOX%E2%9A%A1%EF%B8%8FSuper%20zbritje%20Gjith%20modelet%F0%9F%93%AETransporti%20falas%20n%C3%AB%20gjith%20kosov%C3%ABn%F0%9F%87%BD%F0%9F%87%B0%F0%9F%9A%96(Shqip%C3%ABri%F0%9F%87%A6%F0%9F%87%B1%20%2C%20maqedoni%F0%9F%87%B2%F0%9F%87%B0%203%E2%82%AC)%20(4).jpg?alt=media&token=fdb8de81-c69c-4924-b995-d2b3cce65c9e", color: "#caffbf" },
  { id: 5, content: "https://firebasestorage.googleapis.com/v0/b/aquila-web-hosting.appspot.com/o/products%20other%2FPorositonline.gf%2F%E2%AD%90%EF%B8%8FSUPER%20ZBRITJE%20%20FULLBOX%E2%9A%A1%EF%B8%8FSuper%20zbritje%20Gjith%20modelet%F0%9F%93%AETransporti%20falas%20n%C3%AB%20gjith%20kosov%C3%ABn%F0%9F%87%BD%F0%9F%87%B0%F0%9F%9A%96(Shqip%C3%ABri%F0%9F%87%A6%F0%9F%87%B1%20%2C%20maqedoni%F0%9F%87%B2%F0%9F%87%B0%203%E2%82%AC).jpg?alt=media&token=6b9d92cf-162c-40c7-8f6b-b5b138cfe030", color: "#9bf6ff" },
];

export default function Slideshow() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getVisibleSlides = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(slides[(startIndex + i) % slides.length]);
    }
    return result;
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={handlePrev}>&lt;</button>

      <div style={{ display: "flex", gap: "10px", overflow: "hidden" }}>
        {getVisibleSlides().map((slide) => (
          <div
            key={slide.id}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: slide.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <button onClick={handleNext}>&gt;</button>
    </div>
  );
}
