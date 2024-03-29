import React from "react";

const slides = [
  {
    title: "Watch Something Great",
    subtitle: "Videos. clips, motion pictures, recordings",
    type: ["Video"],
    image: require("../assets/images/watch.jpg"),
  },
  {
    title: "Download elegant apps",
    subtitle: "Install interesting apps on your gadgets",
    type: ["App"],
    image: require("../assets/images/apps.jpg"),
  },
  {
    title: "Listen to some great stuff",
    subtitle: "audios, podcasts, talks, recordings, discussions",
    type: ["audio"],
    image: require("../assets/images/listen.jpg"),
  },
  {
    title: "Read about incredible things",
    subtitle: "articles, blogs, papers, slides, visuals",
    type: ["written"],
    image: require("../assets/images/reading.jpg"),
  },
  {
    title: "Book Great Services with us",
    subtitle: "Don't hesitate, you will be served incredibly well.",
    type: ["Service"],
    image: require("../assets/images/reception.jpg"),
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      {/* <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      /> */}
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner text-white">
          <h4 className="slideTitle text-center">{slide.title}</h4>
          <p className="slideSubtitle text-center">{slide.subtitle}</p>
          <p className="slideDescription"></p>
        </div>
      </div>
    </div>
  );
}

function Slider() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "fit-content",
        }}
        onClick={() => dispatch({ type: "NEXT" })}
      >
        ‹
      </button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "fit-content",
        }}
        onClick={() => dispatch({ type: "PREV" })}
      >
        ›
      </button>
    </div>
  );
}

export default Slider;
