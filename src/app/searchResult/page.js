"use client";
import React, { useState } from 'react';
import "./searchResult.css";
import ButtonIcon from "@/components/ButtonIcon/";
import RadioButton from "@/components/RadioButton/";
import { CiSearch } from "react-icons/ci";


const searchResult = () => {
  return (
    <div className="container mx-auto max-w-screen-lg mt-20">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-7">

                <form className="searchbar flex">
                    <input type="text" placeholder="Search for.." />
                    <div className='btn-search'><ButtonIcon iconTag={<CiSearch />} fontSize="20px" targetPage="#" /></div>
                </form>
                
            </div>
            <div className="col-span-5">
                

            </div>
            <RadioButton/>
        </div>
    </div>
  );
};

export default searchResult;
