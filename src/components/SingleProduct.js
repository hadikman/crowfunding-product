import '../scss/styles.scss';

export default function SingleProduct({
  classes,
  title,
  pledgePrice,
  desc,
  leftQty,
}) {
  return (
    <section className={classes}>
      <h3>{title}</h3>
      <h4>Pledge ${pledgePrice} or more</h4>
      <p>{desc}</p>
      <p>
        <span>{leftQty}</span>left
      </p>
      <button className="btn-primary">
        {leftQty > 0 ? 'Select Reward' : 'Out of Stock'}
      </button>
    </section>
  );
}
