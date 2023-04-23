import React from "react";
import "./movie_show_time.css"
import TheaterNameDiaply from "./theater_name"
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress,CircularProgressLabel } from "@chakra-ui/react";
function DisplayShow(){
  const movies = [
    { name: "Avathar The Way Of Water", language: "English",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avatar-the-way-of-water-et00037264-1670850986.jpg",movie_id:"76600",trailer:"https://youtu.be/d9MyW72ELq0" },
  { name: "Black Panther", language: "English",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/black-panther-et00046523-16-09-2016-12-06-19.jpg",movie_id:"284054",trailer:"https://youtu.be/xjDjIWPwcPU" },
  { name: "Pushpa", language: "Telugu",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg",movie_id:"690957",trailer:"https://youtu.be/Q1NKMPhP8PY" },
   { name: "Kgf Chapter 2", language: "Kannada",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kgf-chapter-2-et00098647-08-04-2022-11-33-32.jpg",movie_id:"587412",trailer:"https://youtu.be/jQsE85cI384" },
    { name: "kantara", language: "Kannada",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kantara-kannada-et00330541-1667307802.jpg",movie_id:"858485",trailer:"https://youtu.be/8mrVmf239GU" },
     { name: "Vikranth Rona", language: "kannada",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vikrant-rona-et00128225-1657019014.jpg",movie_id:"680334",trailer:"https://youtu.be/-0ldvhBlL-k" },
      { name: "Bahubali The Conclusion", language: "Telugu",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baahubali-2-the-conclusion-et00038693-12-11-2020-05-48-55.jpg",movie_id:"350312",trailer:"https://youtu.be/qD-6d8Wo3do" },
       { name: "Dasara", language: "Telugu",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dasara-et00316318-1679638362.jpg",movie_id:"885184",trailer:"https://youtu.be/GP6DRJwGjcE" },
        { name: "Ponniyin Selvan - Part 2", language: "Tamil",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ponniyin-selvan--part-2-et00348725-1680776467.jpg",movie_id:"858082",trailer:"https://youtu.be/EnhS3matIoU" },
         { name: "Vaarisu", language: "Tamil",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/varisu-et00332034-1672912293.jpg",movie_id:"835017",trailer:"https://youtu.be/9fux9swQ5AQ" },
          { name: "Master", language: "Tamil",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/master-et00110368-08-01-2021-07-41-32.jpg",movie_id:"626392",trailer:"https://youtu.be/UTiXQcrLlv4" },
           { name: "Vikram", language: "Tamil",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vikram-et00138591-22-07-2021-11-45-18.jpg",movie_id:"743563",trailer:"https://youtu.be/OKBMCL-frPU" },
            { name: "Asuran", language: "Tamil",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/asuran-et00092591-15-10-2020-02-58-42.jpg",movie_id:"576928",trailer:"https://youtu.be/vOCM9wztBYQ" },
             { name: "Pathaan", language: "Hindi",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pathaan-et00323848-1674372556.jpg",movie_id:"864692",trailer:"https://youtu.be/vqu4z34wENw" },
              { name: "Dangal", language: "Hindi",rating:"U",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dangal-et00033292-17-04-2017-17-54-21.jpg",movie_id:"360814",trailer:"https://youtu.be/x_7YlGv9u1g" },
               { name: "Dhoom 3", language: "Hindi",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dhoom-3-et00007674-11-11-2020-04-45-27.jpg",movie_id:"44977",trailer:"https://youtu.be/yeF_b8EQcK0" },
                { name: "Brahmastra", language: "Hindi",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/brahmastra-et00063710-1661162101.jpg",movie_id:"496331",trailer:"https://youtu.be/BUjXzrgntcY" },
                 { name: "Karthikeya 2", language: "Telugu",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/karthikeya-2-et00307869-1667801965.jpg",movie_id:"892762",trailer:"https://youtu.be/d5s_IGuOJEc" },
                  { name: "Sardar", language: "Tamil",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sardar-et00310546-1665572029.jpg",movie_id:"858080",trailer:"https://youtu.be/8OQzz_i3KFE" },
                   { name: "Jana Gana Mana", language: "Malayalam",rating:"UA",link:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jana-gana-mana-et00311371-29-03-2022-01-22-44.jpg",movie_id:"792358",trailer:"https://youtu.be/oN3tz-UetKw" },
  ];
  const theaternames=[
    {name:"SPI S2 Cinemas- Perambur - Chennai",address:"114, A, 114 B , 3Rd Floor, Paper Mills Road, Gopal Colony, Perambur, Chennai, Tamil Nadu 600011"},
    {name:"PVR Ampa Skywalk Mall - Aminjikarai",address:"4th Floor, Ampa Skywalk Mall, Nelson Manickam Road, Aminjikarai"},
    {name:"PVR Grand Mall - Velachery",address:"3rd Floor No: 137 Tambaram Velachery Road"},
    {name:"PVR SKLS Galaxy Mall - Red Hills",address:"Survey No. 93/IC/2B, GNT Road, Red Hills"},
    {name:"PVR Aerohub - Chennai",address:"Pvr Cinemas,2Nd Floor, Aerohub East Wing, Mlcp Block, Chennai International Airport, Gst Road, Meenambakkam, Chennai 600027"},
    {name:"PVR Grand Mall - Velachery",address:"3rd Floor No: 137 Tambaram Velachery Road"},
    {name:"PVR Grand Mall - Velachery",address:"3rd Floor No: 137 Tambaram Velachery Road"},
    {name:"PVR Grand Mall - Velachery",address:"3rd Floor No: 137 Tambaram Velachery Road"},
    ];
    const { movieName } = useParams();  
    const[moviedata,setmoviedata]=useState(null);
    const id = find(movieName);
    useEffect(()=>{
      const link = "https://api.themoviedb.org/3/movie/"+id+"?api_key=b68de287cf986bd45ee2ebd1f9dbd0a1";
      fetch(link).then(
        response=>response.json()).then(
          data => {setmoviedata(data);}
        ).catch((e)=>{
          console.log(e);
        })
    },[]);

    //  const genreNames = moviedata.genres?.map(genre => genre.name);
    //  const combinedGenres = genreNames.join(", ");
    function find(name){
      return movies.find(link=>link.name==name)?.movie_id;
    }
    function findlink(name){
      return movies.find(link=>link.name==name)?.link;
    }
    function findlang(name){
      return movies.find(link=>link.name==name)?.language;
    }
  return <div>
   <div className="trailer">
  <div className="movieimg-wrapper">
    <img className="movieimg" src={findlink(movieName)} alt="" />
  </div>
  <div className="details">
  <p className="title">{moviedata?.title}</p>
  <div className="first">
  <p className="language">{findlang(movieName)}</p>
  <p>|</p>
  <p className="rating">U/A</p>
  </div>
  <div className="second">
  <p className="genere"></p>
  <p>|</p>
  <p className=" runtime">{moviedata?.runtime+" min"}</p>
  <p>|</p>
  <p className="releasedate">{moviedata?.release_date}</p>
  </div>
  <p className="overview">Overview</p>
  <p>{moviedata?.overview}</p>
  </div>
</div>
      <div className="theaters">
        {theaternames.map((name)=>{
          return <TheaterNameDiaply name={name} movie={movieName}/>
        })}
      </div>
  </div>
}

export default DisplayShow;