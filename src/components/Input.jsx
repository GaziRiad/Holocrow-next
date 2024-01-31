function Input({ type = "text", id, register, validation = {}, placeHolder }) {
  if (register)
    return (
      <input
        placeholder={placeHolder}
        name={id}
        {...register(id, validation)}
        type={type}
        id={id}
        className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
      />
    );

  return (
    <input
      placeholder={placeHolder}
      name={id}
      type={type}
      id={id}
      className="bg-stone-100 px-2 py-2 rounded-md w-full text-black-800 outline-none focus:ring-2 ring-primary"
    />
  );
}

export default Input;
