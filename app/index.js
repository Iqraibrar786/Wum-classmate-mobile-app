import React from "react-native";
// import { useState } from "react";
import { ScrollView } from "react-native";
import { useRouter } from 'expo-router';

import Splash from "./splash";
import Onboarding1 from "./onboarding1";
import Onboarding2 from "./onboarding2";
import SignUp from "./signup";
import Login from "./login";
import Registration from "./registration";
import Otp from "./otp";
import Home from "./home";
import CreateClass from "./createclass";
import JoinClass from "./joinclass";
import ClassInfo from "./classinfo";
import Assigning from "./assigning";
import Addperson from "./addperson";
import Cardscreen from "./cardscreen";
import Announcement from "./announcement";
import Profile from "./profile";
import Editprofile from "./editprofile";
import Postscreen from "./postscreen";
import Attachments from "./attachments ";

 const Index=()=>{
  let router=  useRouter()
  return (
    <ScrollView>
      <Splash/>
      <Onboarding1/>
      <Onboarding2/>
      <SignUp/>
      <Login/>
      <Registration/>
      <Otp/>
      <Home/>
      <CreateClass/>
      <JoinClass/>
      <ClassInfo/>
      <Assigning/>
      <Addperson/>
      <Cardscreen/>
      <Announcement/>
      <Postscreen/>
      <Attachments/>
      <Profile/>
      <Editprofile/>
    </ScrollView>
  );
}
export default Index;