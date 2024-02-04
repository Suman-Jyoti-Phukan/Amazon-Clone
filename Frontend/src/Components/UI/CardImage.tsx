function CardImage({ image, product }: { image: string; product: string }) {
  return (
    <div>
      <img
        src={`${image}`}
        alt={product}
        className="object-contain w-[140px] h-[140px]"
      />
    </div>
  );
}

export default CardImage;
