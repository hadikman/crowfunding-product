export default function Image({fileName, altImage, classes, onClick}) {
  return (
    <img
      src={require(`../assets/${fileName}`)}
      alt={altImage}
      className={classes}
      onClick={onClick}
    />
  );
}
