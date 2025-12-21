// export { default } from "./_layout.web";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Icon, Label, NativeTabs, VectorIcon} from 'expo-router/unstable-native-tabs';
import {Platform} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Tabs} from 'expo-router';
const Page = () => {
    return (
        <NativeTabs minimizeBehavior="onScrollDown">
            {/* Stream of work */}
            <NativeTabs.Trigger name="announcement">
                <Label>Stream</Label>
                {Platform.select({
                    ios: <Icon sf="house.fill"/>,
                    android: <Icon src={<VectorIcon family={MaterialIcons} name="stream" />} />,
                })}
            </NativeTabs.Trigger>


           {/* Class-work  */}
             <NativeTabs.Trigger name="assigning">
                <Label>Classwork</Label>
                {Platform.select({
                    ios: <Icon sf="house.fill"/>,
                    android: <Icon src={<VectorIcon family={MaterialCommunityIcons} name="clipboard-edit-outline" />} />,
                })}
            </NativeTabs.Trigger>
            

            {/* add Person/People  */}
            <NativeTabs.Trigger name="addperson">
                <Label>People</Label>
                {Platform.select({
                    ios: <Icon sf="gear"/>,
                    android: <Icon src={<VectorIcon family={MaterialIcons} name="people" />} />,
                })}
            </NativeTabs.Trigger> 


            {/* Profile  */}
            <NativeTabs.Trigger name="profile">
                <Label>Profile</Label>
                {Platform.select({
                    ios: <Icon sf="gear"/>,
                    android: <Icon src={<VectorIcon family={MaterialCommunityIcons} name="face-man-profile" />} />,
                })}
            </NativeTabs.Trigger> 
        </NativeTabs>
    )
};




export default Page;