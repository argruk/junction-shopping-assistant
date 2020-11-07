import React from "react";
import ProfileHeader from "./ProfileHeader";
import HeaderProfilePage from "./HeaderProfilePage"
import Footer from "../Footer/Footer";


export default function Profile () {
  return(
      <div>
        <HeaderProfilePage/>
        <ProfileHeader/>
        <Footer/>
      </div>
  )
}