import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: 'media/day2/_DSC0007.JPG' },
  { url: 'media/day2/_DSC0038.JPG' },
  { url: 'media/day2/_DSC0143.JPG' },
  { url: 'media/day2/_DSC0144.JPG' },
  { url: 'media/day2/_DSC0237.JPG' },
  { url: 'media/day2/_DSC0245.JPG' },
  { url: 'media/day2/_DSC0261.JPG' },
  { url: 'media/day2/_DSC0273.JPG' },
  { url: 'media/day2/_DSC0281.JPG' },
  { url: 'media/day2/_DSC0292.jpg' },
  { url: 'media/day2/_DSC9949.JPG' },

];

const SecondDay = () =>{
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

export default SecondDay;