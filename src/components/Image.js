export default function Image({fileName, altImage, classes}) {
  return (
    <img
      src={require(`../assets/${fileName}`)}
      alt={altImage}
      className={classes}
    />
  );
}
