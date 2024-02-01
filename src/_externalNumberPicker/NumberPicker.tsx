import React from 'react';
import './style.scss';

type NumberPickerProps = {
	value: number;
	max: number;
	min: number;
	steps: number;
	onChange: ( value: number ) => void;
};

const NumberPicker = ( props: NumberPickerProps ) => {
	const { value, max, min, steps, onChange } = props;

	const changeNumber = ( value: number ) => {
		onChange( value );
	};

	return (
		<div className="ctx-numberpicker">
			<button
				className="ctx-numberpicker-add"
				onClick={ () => {
					if ( value > min ) {
						changeNumber( value - steps );
					}
				} }
			>
				<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
					<path d="M200-440v-80h560v80H200Z" />
				</svg>
			</button>
			<fieldset>
				<input
					onChange={ ( event ) => {
						changeNumber( parseInt( event.target.value ) );
					} }
					className="ctx-number-picker__number"
					value={ value }
					type="text"
					inputMode="numeric"
					pattern="\d*"
					min={ min }
					max={ max }
				/>
			</fieldset>
			<button
				className="button--secondary"
				onClick={ () => {
					if ( value < max ) {
						changeNumber( value + steps );
					}
				} }
			>
				<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
					<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
				</svg>
			</button>
		</div>
	);
};

NumberPicker.defaultProps = {
	start: 0,
	max: 100,
	min: 0,
	steps: 1,
};

export default NumberPicker;
