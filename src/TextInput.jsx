export const TextInput = ({ labelText, inputProps }) => {
  return (
    <div>
      <label htmlFor='name'>{labelText}:</label>
      <input type='text' {...inputProps} />
    </div>
  );
};
