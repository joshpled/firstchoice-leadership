import React from "react";
import { Parallax } from "react-parallax";
import { Home, Personal } from "pages";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const image1 = "https://i.picsum.photos/id/794/1080/720.jpg?hmac=NqoWHJSfMpxwptz7fdii1Ue-b29JfxMBmcXQGWMqezk";
const image2 = "https://i.picsum.photos/id/477/1080/720.jpg?hmac=_RLqUVg4Dj0Qn6r4GDSekxbXSLTerfZZ6onoYvzEUa4";

function App() {
  return (
    <div style={styles}>
      <Parallax bgImage={image1} strength={600}>
        <div style={{ height: 500 }}>
          <Home styles={insideStyles} />
        </div>
      </Parallax>
      <Parallax bgImage={image2} strength={-100}>
        <div style={{ height: 500 }}>
          <Personal styles={insideStyles} />
        </div>
      </Parallax>
      <Parallax
        bgImage={image2}
        strength={200}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500,
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>renderProp</div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
