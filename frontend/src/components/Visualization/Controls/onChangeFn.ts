const onChangeValueOnly = (e: React.ChangeEvent<HTMLInputElement>, setValue: (value: React.SetStateAction<number | undefined>) => void) => {
	const value = parseInt(e.target.value);
	if (isNaN(value)) {
		setValue(undefined);
	} else {
		if (value > 99) {
			setValue(99);
		} else if (value < 0) {
			setValue(0);
		} else {
			setValue(value);
		}
	}
};

export default onChangeValueOnly;
