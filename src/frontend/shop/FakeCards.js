function FakeCards( props ) {
	const { count } = props;
	return (
		<>
			{ [ ...Array( count ) ].map( ( item, key ) => {
				return (
					<div class="fake-card">
						<div class="fake-card-image"></div>
						<div class="fake-card-content">
							<h2></h2>
							<p></p>
						</div>
					</div>
				);
			} ) }
		</>
	);
}

export default FakeCards;
