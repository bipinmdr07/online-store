// class Product extends React.Component {

// 	render() {
// 		return(
// 			<div>
// 				<p>Let's say this is one single product</p>
// 			</div>
// 		)
// 	}

// }

const Product = ({product}) =>
	<div className="ui red card">
		<div className="content">
			<div className="right floated ui teal tag label">{product.quantity} available</div>
			<h3>{product.name}</h3>
			<p>{product.description}</p>
			<div>NRs: {product.price}</div>
		</div>
	</div>
