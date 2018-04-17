// class Products extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       products: this.products
//     }
//   }
//
//   render(){
//     return(
//       <p>{this.state.products[0].name}</p>
//     )
//   }
// }

const Products = ({products}) =>
  <div className="ui four cards">
    {products.map((product) =>
      < Product product={product} key={product.id} />
    )}
  </div>
