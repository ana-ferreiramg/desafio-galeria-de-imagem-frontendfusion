export function Card({ image }) {
  return (
    <div className="bg-transparent p-2 rounded-lg">
      <img src={image.download_url} alt={image.author} className="w-full h-64" />
      <p className="text-center">{image.author}</p>
    </div>
  );
}
