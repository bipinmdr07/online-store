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
		$.post('/products', {product: product}).done((data) =>
			console.log(data)
		)
	}

  render() {

		return(
			<div className="ui black card">
				<div className="content">
					<span className="header">Add New Product</span>
					<hr />
					<form className="ui form" onSubmit={() => this.handleSubmit()} >
						<div className="field">
							<label>Name</label>
							<div className="field">
								<input type="text"
								onChange={(e) => this.textChangeHandler(e, 'name')}
								placeholder="Name of the Product"
								value={this.state.name} />
							</div>
						</div>

						<div className="field">
							<label>Description</label>
							<div className="field">
								<textarea
									onChange={(e) => this.textChangeHandler(e, 'description')}
									placeholder="Description of the Product"
									value={this.state.description}
								 />
							</div>
						</div>

						<div className="field">
							<label>Quantity</label>
							<div className="field">
								<input type="number"
								onChange={(e) => this.textChangeHandler(e, 'quantity')}
								placeholder="Quantity of product available for sale"
								value={this.state.quantity} />
							</div>
						</div>

						<div className="field">
							<label>Price</label>
							<div className="field">
								<input type="number"
								onChange={(e) => this.textChangeHandler(e, 'price')}
								placeholder="Price of unit product"
								value={this.state.price} />
							</div>
						</div>

						<input className="ui button primary" type='submit' value="Add This Product" />
					</form>
				</div>
			</div>
		)
    // return (
	  // 	<div>
		// 		<div>
		// 			<form className="ui form" onSubmit = {() => this.handleSubmit()}>
		// 				<div>
		// 					<label>Name</label>
		// 					<div className="ui input">
		// 						<input type='text'
		// 						onChange={(e) => this.textChangeHandler(e, "name")}
		// 						placeholder="Name of Product"
		// 						value={this.state.name}/>
		// 					</div>
		// 				</div>
		//
		// 				<div>
		// 					<label>Description</label>
		// 					<div className="ui input">
		// 						<textarea
		// 						onChange={(e) => this.textChangeHandler(e, "description")}
		// 						placeholder="Description of the product"
		// 						value={this.state.description}/>
		// 					</div>
		// 				</div>
		//
		// 				<div>
		// 					<label>Quantity</label>
		// 					<div className="ui input">
		// 						<input type='number'
		// 						onChange={(e) => this.textChangeHandler(e, "quantity")}
		// 						placeholder="Quantity of product available in integer"
		// 						value={this.state.quantity}/>
		// 					</div>
		// 				</div>
		//
		// 				<div>
		// 					<label>Price</label>
		// 					<div className="ui input">
		// 						<input type='number'
		// 						onChange={(e) => this.textChangeHandler(e, "price")}
		// 						placeholder="Price of the product"
		// 						value={this.state.price}/>
		// 					</div>
		// 				</div>
		//
		// 				<div>
		// 					<div>
		// 						<input type="submit" value="Add New Product" />
		// 					</div>
		// 				</div>
		// 			</form>
		// 		</div>
		// 	</div>
    // )
  }
}
