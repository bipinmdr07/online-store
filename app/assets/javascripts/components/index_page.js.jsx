class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products
    }
  }

  render(){
    return (
      <div>
        <Products products={this.state.products} />
      </div>
    )
  }
}
