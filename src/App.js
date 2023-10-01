import "./App.css";
import yarns from "./products";

let productList = yarns.map((yarn) => {
  return (
    <div className="product">
      <div className="text">
        <img src={yarn.img} width="100px" height="100px" />
        <h2>{yarn.name}</h2>
        <h4>{yarn.weight}</h4>
        <h4>{yarn.price}</h4>
      </div>
    </div>
  );
});

function App() {
  return (
    <div className="text">
      <h1>Yarn shop</h1>
      <h4>
        all the yarns you'll need for your knitting, crochetting, tufting and
        any other related projects
      </h4>
      <img
        src="https://i.etsystatic.com/13197440/r/il/3cc0b3/4220294296/il_fullxfull.4220294296_go99.jpg"
        width="400px"
        height="400px"
      />
      <div className="product">{productList}</div>
    </div>
  );
}

export default App;
