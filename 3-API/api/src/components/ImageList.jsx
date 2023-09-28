import ImageItem from './ImageItem'; 

function ImageList(props) {
  return (
    <div>
      {props.imagesPlaceHolder.map((image,index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
