import React, { useEffect, useState } from 'react'
import './Explore.css'
import himalaya from '../../assets/Explore1.jpg'
import Card from '../Card/Card'


const Explore = () => {


  const[displayedText,setDisplayedText]=useState("")
  const[showCursor,setShowCursor]= useState(true);
   const text ="Weelcome to Nepal"
  const speed = 200
  // const indexRef=useRef(0)


  useEffect(()=>{
   let index= 0;
  
    const interval  =setInterval(() => {

  
      setDisplayedText((prev)=>prev+text.charAt(index));
      index++;
      // console.log(displayedText)
      // 
  if(index>(text.length-1)){
        clearInterval(interval) 
  }   
    }, 100);
    
    return ()=>clearInterval(interval) }
    ,[text,speed]);
    
    // useEffect(() => {
    //   const cursorInterval=setInterval(() => {
    //     setShowCursor((prev)=>!prev)
    //   }, 500);
    
    //   return () => {
    //     clearInterval(cursorInterval)
    //   };
    // }, []);
    


  return <>
  <div className='explore'>
    <div className="section section1 firstsection">

      <h1>{displayedText}</h1>

         <div className='second contentExplore'>
        <img src="https://cdn.pixabay.com/photo/2023/09/06/03/23/sunrise-8236216_640.jpg" alt="" />
        <div className="textExplore">
          <p>Serene Hills</p>
          <p>Explore Nepal’s fertile plains and vibrant ecosystems, with dense forests, rivers, and wildlife sanctuaries perfect for nature lovers and adventure seekers alike.</p>
        </div>
      </div>
    
      <div className='first contentExplore'>
        <div className="textExplore">
          <p>Lush Lanscapes</p>
          <p>Nepal's fertile southern plains with lush forests, wildlife, and cultural towns, including Chitwan, Lumbini, and Koshi Tappu.</p>
        </div>
          <img src="https://vehiclenepal.com/wp-content/uploads/2023/04/Chitwan-NP.jpg"alt="" />
      </div>



      <div className='third contentExplore'>
        <img src="https://wallpapercave.com/wp/wp9682058.jpg" alt="" />
        <div className="textExplore">
          <p>Majestic Peaks</p>
          <p>Snow-capped peaks, including Mount Everest, home to world-famous trekking routes such as Everest Base Camp, Annapurna Circuit, Langtang Valley, and Mustang.</p>
        </div>


      </div>

    </div>

    <div className="section section2">
     <Card image="https://i.pinimg.com/originals/eb/c1/f6/ebc1f6b3cded8bc2552b1b6713ee654a.jpg" desc="Bandipur - A serene hilltop town blending Newari charm, traditional architecture, and breathtaking Himalayan views"/>
     <Card desc="Annapurna Base Camp (ABC) - A stunning trek surrounded by towering Himalayan peaks and serene natural beauty." image="https://www.himalayalandtreks.com/_next/image?url=https:%2F%2Fhlt-api.flamingoitstudio.net%2Fmedia%2Fblog%2Fbanner%2Fannapurna-base-camp-trek-complete-guide.jpg&w=3840&q=75" />
     <Card desc="Rara Lake - Nepal's largest and most tranquil lake, surrounded by pristine forests and snow-capped mountains." image="https://www.himalayanforever.com/public/storage/trip-seos/19/5db49d8d1d42d2db790bcce43379e5d6.jpg"/>
     <Card desc="Mustang - A mystical Himalayan region known for its dramatic desert landscapes and rich Tibetan culture." image="https://preview.redd.it/uq3vqf69cwf51.jpg?width=960&crop=smart&auto=webp&s=d0e5aa02443821e96ebc10e6ae1036509379ba96"/>
     <Card desc="Everest Base Camp (EBC) - A legendary trekking destination offering awe-inspiring views of the world's highest peak, Mount Everest" image="https://cdn.outsideonline.com/wp-content/uploads/2021/04/19/everest-base-camp-2019_h.jpg"/>
     <Card desc="Pokhara - A picturesque lakeside city famed for its serene Phewa Lake and breathtaking Himalayan vistas." image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/46/27/71/caption.jpg?w=1200&h=1200&s=1"/>
    </div>

    <div className="section section3">
     <Card desc="Nagarkot - A peaceful hill station renowned for its stunning sunrise and panoramic Himalayan views." image="https://d6qyz3em3b312.cloudfront.net/upload/images/media/2017/05/04/8360637463_17fe0b6c62_o.2048x1024.jpg"/>
     <Card desc="Shey Phoksundo Lake - A stunning turquoise glacial lake in Dolpo, surrounded by dramatic cliffs and pristine wilderness." image="https://tse4.mm.bing.net/th/id/OIP.SNfBSkuT7rkrIkVdD-dG5QHaD4?rs=1&pid=ImgDetMain&o=7&rm=3"/>
     <Card desc="Ilam - A scenic hill town in eastern Nepal famous for its lush tea gardens, rolling hills, and misty landscapes." image="https://i.pinimg.com/originals/f5/13/f8/f513f86a65096a6ce33d02a3b8cfae61.jpg"/>
     <Card  desc="Bardiya National Park – A remote wildlife sanctuary in western Nepal, home to tigers, rhinos, and rich biodiversity." image="https://visitsnepal.com/wp-content/uploads/2016/05/bardia-wildlife.jpg"/>
     <Card desc="Langtang National Park - A Himalayan park in Nepal known for its lush forests, diverse wildlife, and stunning mountain landscapes." image="https://www.go2trek.com/wp-content/uploads/2024/04/Red-Panda-2-685x447.jpg"/>
     <Card desc="Gosaikunda – A sacred alpine lake in the Langtang region, surrounded by snow-capped peaks and serene trekking trails." image="https://www.altitudehimalaya.com/media/files/Blog/Adventures/gosaikunda-lake.jpg"/>
    </div>
   
    </div>
  </>


}

export default Explore
