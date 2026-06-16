import { Fragment } from '@wordpress/element';

type FakeCardsProps = {
	count: number;
};

function FakeCards( { count }: FakeCardsProps ) {
	return (
		<Fragment>
			{ [ ...Array( count ) ].map( ( _, key ) => {
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
