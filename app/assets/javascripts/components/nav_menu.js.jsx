class NavMenu extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  homeNavClickHandler(){
    {window.location = '/'}
  }

  categoryNavClickHandler(){
    {console.log("category nav clicked")}
  }

  searchTextChangeHandler(){
    {console.log("search  text changed")}
  }

  searchBtnClickHandler(){
    console.log("search button clicked")
  }

  handleAddButtonClick() {
    window.location = '/products/new'
  }

  render(){
    return(
      <div className="ui large menu inverted fixed navbar">
        <a className="active item" onClick={() => this.homeNavClickHandler()}> Home </a>
        <a className="item" onClick ={() => this.categoryNavClickHandler()}> Categories </a>

        <div className="right menu">
          <a className="item right" onClick={() => this.handleAddButtonClick()}>Add New Product</a>
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." onChange={() => this.searchTextChangeHandler()} />
              <i className="search link icon" onClick={() => this.searchBtnClickHandler()} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
