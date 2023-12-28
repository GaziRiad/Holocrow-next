function SubHero({ content }) {
  return (
    <div className=" text-center text-lg md:text-xl lg:text-3xl flex flex-col gap-4 mb-12 lg:mb-32">
      {content.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

export default SubHero;
