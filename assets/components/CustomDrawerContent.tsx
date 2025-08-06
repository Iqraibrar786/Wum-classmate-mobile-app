import {DrawerContentScrollView,DrawerItem,DrawerItemList,} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { View,Image,Text } from "react-native";

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}>
        <View style={{padding:20}}>
            <Image
            source={{uri: 'https://i.postimg.cc/5tzrrC04/519526019-17972329046873762-1705704639409662658-n-webp-1.jpg'}}
            style={{width:100, borderRadius:100, height: 100, alignSelf:'center'}}
            />
            <Text style={{
                alignSelf: 'center',
                fontWeight: '500',
                fontSize: 18,
                paddingTop: 10,
                color: '#5363df',
            }}>
                Mr Allah Rakha
            </Text>
        </View>
        
        <DrawerItemList {...props} />
        <DrawerItem label={"Logout"} onPress={() => router.replace("/")} />
      </DrawerContentScrollView>
    </View>
  );
}
