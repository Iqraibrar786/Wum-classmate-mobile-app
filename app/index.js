import React from "react-native";
// import { useState } from "react";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";

import Splash from "./splash";

 const Index=()=>{
  let router=  useRouter()
  return (
    <ScrollView>
      <Splash/>
    </ScrollView>
  );
}
export default Index;