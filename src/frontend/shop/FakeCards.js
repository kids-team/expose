import { Fragment } from '@wordpress/element';

function FakeCards( props ) {
	const { count } = props;
	return (
		<Fragment>
			{ [ ...Array( count ) ].map( ( item, key ) => {
				return (
					<div className="fake-card" key={ key }>
						<div className="fake-card-image"></div>
						<div className="fake-card-content">
							<h2></h2>
							<p></p>
						</div>
					</div>
				);
			} ) }
		</Fragment>
	);
}

export default FakeCards;
