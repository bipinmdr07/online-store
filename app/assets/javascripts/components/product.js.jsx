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
	<div>
		<ul>
			<li>{product.name}</li>
			<li>{product.description}</li>
			<li>{product.quantity}</li>
			<li>{product.price}</li>
		</ul>
	</div>
