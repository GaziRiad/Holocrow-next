function FormRow({ children, label, type = "vertical" }) {
  if (type === "horizontal")
    return (
      <div className=" flex flex-col md:flex-row md:gap-6">{children}</div>
    );
  return (
    <div className="flex flex-col items-start gap-2 mb-8 w-full">
      {label && <label className="text-slate-500 text-sm">{label}</label>}
      {children}
    </div>
  );
}

export default FormRow;
