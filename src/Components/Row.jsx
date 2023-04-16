import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


const Row = ({ title, fetchURL, rowID }) => {

    const [movies, setMoives]= useState([])


    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMoives(response.data.results)
        })
    },[fetchURL]);

    const slideLeft = () => {
      var slider = document.getElementById('slider' + rowID)
      slider.scrollTo({
        left: slider.scrollLeft - 500,
        behavior: 'smooth'
      });
    }

    const slideRight = () => {
      var slider = document.getElementById('slider' + rowID)
      slider.scrollTo({
        left: slider.scrollLeft + 500,
        behavior: 'smooth'
      });
    }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="reative flex items-center group scroll-smoth">
        <MdChevronLeft 
        onClick={slideLeft}
        className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
        <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smoth scrollbar-hide relative">
    {movies.map((item,id)=>(
       <Movie key={id} item={item} />
    ))}
        </div>
        <MdChevronRight 
        onClick={slideRight}
        className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block " size={40} />
      </div>
    </>
  );
};

export default Row;
