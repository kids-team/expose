import { useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AppContext } from '../services/context';

const Filter = ({ showFilter }) => {
	const { state, dispatch } = useContext(AppContext);

	const selectedCategory = state.selectedCategory;
	const selectedTags = state.selectedTags;

	return (
		<div className={`filters ${showFilter ? '' : 'filters-mobile-hidden'}`}>
			<h4>{__('Categories', 'expose')}</h4>
			<div className="pills">
				<button
					className={selectedCategory == 0 ? 'active' : ''}
					onClick={() => {
						dispatch({ type: 'SET_SELECTED_CATEGORY', payload: 0 });
					}}
					value={0}
				>
					{__('All', 'expose')}
				</button>
				{Object.entries(state.categories).map(([key, value]) => {
					return (
						<button
							className={selectedCategory == key ? 'active' : ''}
							onClick={() => {
								dispatch({ type: 'SET_SELECTED_CATEGORY', payload: key });
							}}
							key={key}
							value={key}
						>
							{value}
						</button>
					);
				})}
			</div>

			<div className="tags">
				<h4>{__('Tags', 'expose')}</h4>
				{Object.entries(state.tags).map(([key, value]) => {
					return (
						<div className="checkbox" key={key}>
							<label>
								<input
									type="checkbox"
									value={key}
									onChange={() => {
										if (selectedTags.includes(key)) {
											dispatch({
												type: 'SET_SELECTED_TAGS',
												payload: selectedTags.filter((tag) => tag !== key),
											});
										} else {
											dispatch({
												type: 'SET_SELECTED_TAGS',
												payload: [...selectedTags, key],
											});
										}
									}}
								/>
								<span>{value}</span>
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Filter;
