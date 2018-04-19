class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products
    }
  }

  render(){
    return (
      <div className="bodyContent">
        <Products products={this.state.products} />
      </div>
    )
  }
}
