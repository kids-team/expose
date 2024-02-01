type Props = {
	label: string;
	width: number;
	alignment: 'left' | 'center' | 'right';
	disabled: boolean;
};

const Submit = ( props: Props ) => {
	const { label, width, alignment, disabled } = props;

	const classes = [
		'ctx-form-field',
		'flex',
		'input--width-' + width,
		'flex--align-center',
		alignment == 'right' ? 'flex--justify-end' : '',
	].join( ' ' );
	return (
		<div className={ classes }>
			<input className="button button--primary" type="submit" value={ label } disabled={ disabled } />
		</div>
	);
};

Submit.defaultProps = {
	label: '',
	width: 6,
};

export default Submit;
