class NavMenu extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  homeNavClickHandler(){
    {console.log("home nav clicked.")}
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

  render(){
    return(
      <div className="ui menu fixed sticky">
        <a className="active item" onClick={() => this.homeNavClickHandler()}> Home </a>
        <a className="item" onClick ={() => this.categoryNavClickHandler()}> Category </a>

        <div className="right menu">
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
