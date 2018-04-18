class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products
    }
  }

  handleAddButtonClick() {
    window.location = '/products/new'
  }

  render(){
    return (
      <div>
        <input type="submit" onClick={() => this.handleAddButtonClick()} value="Add New Product" />
        <Products products={this.state.products} />
      </div>
    )
  }
}
