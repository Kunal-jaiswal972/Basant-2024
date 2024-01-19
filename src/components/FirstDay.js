import SimpleImageSlider from "react-simple-image-slider";


const images = [
  {
    url: 'media/day1/DSC_7373.JPG',
    // caption: 'Slide 1'
  },
  {
    url: 'media/day1/DSC_7390.JPG',
    // caption: 'Slide 2'
  },
  {
    url: 'media/day1/DSC_7436.JPG',
    // caption: 'Slide 3'
  },
  {
    url: 'media/day1/DSC_7447.JPG',
    // caption: 'Slide 3'
  },
  {
    url: 'media/day1/DSC_7451.JPG',
    // caption: 'Slide 3'
  },
  {
    url: 'media/day1/DSC_7542.JPG',
    // caption: 'Slide 3'
  },
  {
    url: 'media/day1/DSC_7780.JPG',
    // caption: 'Slide 3'
  },
  {
    url: 'media/day1/DSC_7789.JPG',
    // caption: 'Slide 3'
  },
  {
    url: 'media/day1/DSC_7796.JPG',
    // caption: 'Slide 3'
  },
];

const FirstDay = () =>{
  return(
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <SimpleImageSlider 
      width={850}
      height={550}
      images={images}
      showBullets={true}
      showNavs={true}
    />
  </div>
  )
}

export default FirstDay;