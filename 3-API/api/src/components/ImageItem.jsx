

function ImageItem(props) {
return ( 
  <div>
    <img src={props.image.urls.small} alt={props.image.alt_description} />
  </div>
)
}

export default ImageItem;
