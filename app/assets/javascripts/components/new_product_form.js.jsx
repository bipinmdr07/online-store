class NewProductForm extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			name: '',
			description: '',
			quantity: '',
			price: ""
		}
	}

	textChangeHandler(e, field_name){
		switch(field_name){
			case 'name':
				this.setState({ name: e.target.value });
				break;
			case 'description':
				this.setState({ description: e.target.value });
				break;
			case 'quantity':
				this.setState({ quantity: e.target.value });
				break;
			case 'price':
				this.setState({ price: e.target.value });
				break;
		}

	}

	handleSubmit(){
		const product = {name: this.state.name, description: this.state.description, quantity: this.state.quantity, price: this.state.price}
		$.post('/products', {product: product}).done()
	}

  render() {
    return (
	  	<div className="uk-panel uk-panel-box-primary uk-width-1-3 align_c">
				<div className="uk-container">
					<form className="uk-form-stacked" onSubmit = {() => this.handleSubmit()}>
						<div className="uk-margin">
							<label className="uk-form-label">Name</label>
							<div className="uk-form-controls">
								<input type='text'
								className="uk-input uk-width-1-1"
								onChange={(e) => this.textChangeHandler(e, "name")}
								placeholder="Name of Product"
								value={this.state.name}/>
							</div>
						</div>

						<div className="uk-margin">
							<label className="uk-form-label">Description</label>
							<div className="uk-form-controls">
								<textarea
								className="uk-textarea uk-width-1-1"
								onChange={(e) => this.textChangeHandler(e, "description")}
								placeholder="Description of the product"
								value={this.state.description}/>
							</div>
						</div>

						<div className="uk-margin">
							<label className="uk-form-label">Quantity</label>
							<div className="uk-form-controls">
								<input type='number'
								className="uk-input uk-width-1-1"
								onChange={(e) => this.textChangeHandler(e, "quantity")}
								placeholder="Quantity of product available in integer"
								value={this.state.quantity}/>
							</div>
						</div>

						<div className="uk-margin">
							<label className="uk-form-label">Price</label>
							<div className="uk-form-controls">
								<input type='number'
								className="uk-input uk-width-1-1"
								onChange={(e) => this.textChangeHandler(e, "price")}
								placeholder="Price of the product"
								value={this.state.price}/>
							</div>
						</div>

						<div className="uk-margin">
							<div className="uk-form-controls">
								<input type="submit" className="uk-button-primary" value="Add New Product" />
							</div>
						</div>
					</form>
				</div>
			</div>
    )
  }
}
