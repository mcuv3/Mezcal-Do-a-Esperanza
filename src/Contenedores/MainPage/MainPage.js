import React, { Component } from "react";
import Presentacion from "../../Componentes/Presentacion/Presentacion";
import SimpleImageSlider from "react-simple-image-slider";
import BestSellers from "../../Componentes/MainPage/BestSellers/BestSellers";
import Image1 from "../../Assets/s1.jpg";
import Image2 from "../../Assets/s2.jpg";
import Image3 from "../../Assets/s3.jpg";
import Image4 from "../../Assets/s4.jpg";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/Index";
import About from "../../Componentes/MainPage/About/About";
import Location from "../../Componentes/MainPage/Location/Location";

export class MainPage extends Component {
  componentDidMount() {
    this.props.onFilterProduct("");
  }
  goToProduct = (product) => {
    this.props.history.push("/catalogo/" + product.id);
  };
  render() {
    const images = [
      { url: Image1 },
      { url: Image2 },
      { url: Image3 },
      { url: Image4 },
    ];

    return (
      <div>
        <Presentacion />
        <About />
        <SimpleImageSlider
          width="100%"
          height="350px"
          images={images}
          bgColor="#fff"
        />
        <BestSellers
          products={this.props.BestSellersProducts}
          redirect={this.goToProduct}
        />
        <Location />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    BestSellersProducts: state.catalogo.products[state.catalogo.page].slice(
      0,
      3
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterProduct: (productName) =>
      dispatch(actions.filterProducts(productName, true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
