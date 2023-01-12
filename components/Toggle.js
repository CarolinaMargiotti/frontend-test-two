export default function toggle(props) {
	const toggleFunction = props.toggleFunction;
	const toggleText = props.toggleText;
	const isChecked = props.isChecked;

	return (
		<div>
			<input
				type="checkbox"
				onChange={(e) => toggleFunction()}
				checked={isChecked}
			/>
			<label>{toggleText}</label>
		</div>
	);
}
