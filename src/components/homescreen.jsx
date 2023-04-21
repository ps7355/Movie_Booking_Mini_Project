import React from "react";
import './homescreen.css'
import Carousel from "./carousel";
import MovieCard from "./movie_card";
import { Divider } from "@chakra-ui/react";

function HomeScreen(){
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
  return <div className="home">
    <Carousel/>
    <div className="heading">
      <h2>MOVIES</h2>
    </div>
    <div className="sidebar">
      <h2>Filter By</h2>
      <hr class="my-hr"></hr>
    </div>
    <div className="moviecarddisplay">
      {
        movies.map((value)=>{
          return <MovieCard movie={value}></MovieCard>
        })
      }
  </div>
  </div>
}

export default HomeScreen;


