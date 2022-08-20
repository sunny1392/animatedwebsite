import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from "./Card";

const Services =()=>{
  const web = `https://www.filepicker.io/api/file/Crrtt0LwQ0Cuj5vKbntc`;
  const app = `https://i.pinimg.com/originals/47/01/b6/4701b62972f7b4b42fff4dda761b7b3a.jpg`;
  const software = `https://th.bing.com/th/id/R.4b09b8477722dbf2f524b35401da9457?rik=jB43CH5a%2fwKH%2fQ&riu=http%3a%2f%2fcyberfox.co.za%2fwp-content%2fuploads%2f2020%2f09%2fsoftware-development.jpg&ehk=wh%2f0xzt9GS%2b7uSGnrMovGBnwKzijACMPCoEF0t69YxA%3d&risl=&pid=ImgRaw&r=0`;
  const digital = `https://th.bing.com/th/id/R.1bccc7aafceccd9ee311b7fcf887e158?rik=7%2bpNMWkG5IUe7A&riu=http%3a%2f%2fdigitalmarketingtrends.in%2fwp-content%2fuploads%2f2019%2f02%2fDigital-Marketing-Courses-gif.gif&ehk=i7kBKtfOUESIWIWRLoxQRmRCtAqNekBEKt3xli3j5oM%3d&risl=&pid=ImgRaw&r=0`;
  const marke = `https://th.bing.com/th/id/R.2be4c5024be038a5f0908c0f141582ad?rik=dVQWtKNMPwYEEQ&riu=http%3a%2f%2fcdn.business2community.com%2fwp-content%2fuploads%2f2015%2f02%2fFloating-head-for-GIF-1.gif.gif&ehk=OycFyDBR%2b8EcIew6boCqedPa6m%2brsP4adsv64hu12IA%3d&risl=&pid=ImgRaw&r=0`;
  const android = `https://www.thinknexttraining.com/android-images/learn-android-programming.jpg`
  return(
    <>
    <div className="my-5">
      <h1 className="text-center">Our Services</h1>
      <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
          <Card imgv={web} title="web development" />
            <Card imgv={app} title="app development" />
            <Card imgv={software} title="software development" />
            <Card imgv={digital} title="digital marketing" />
            <Card imgv={marke} title="marketing" />
            <Card imgv={android} title="android development"/>

            
            </div>
            </div>
            






          </div>

        </div>

      </div>

    
  
    </>
  )
}
export default Services;