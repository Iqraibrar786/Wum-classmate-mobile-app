import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Icon, Label, NativeTabs, VectorIcon } from 'expo-router/unstable-native-tabs';
import { Platform } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {colors} from "../../constants/colors";
const TabsLayout = () => {
  return (
    <SafeAreaProvider>
    <NativeTabs
      minimizeBehavior="never"
      backgroundColor={colors.primaryLight}
      iconColor={{ default: colors.primaryDark, selected: colors.primaryDark }}
      labelStyle={{
        default: { color: colors.textSecondary, fontSize: 11 },
        selected: { color: colors.textPrimary, fontSize: 11, fontWeight: '600' },
      }}
      indicatorColor="#d7dee8"
      rippleColor="#d3dae3"
      shadowColor="#e2e6ee"
      disableTransparentOnScrollEdge={true}
      static={true}
    >
      {/* Stream of work */}
      <NativeTabs.Trigger name="announcement">
        <Label>Stream</Label>
        {Platform.select({
          ios: <Icon sf="house.fill" />,
          android: <Icon src={<VectorIcon family={MaterialIcons} name="stream" />} />,
        })}
      </NativeTabs.Trigger>

      {/* Class-work  */}
      <NativeTabs.Trigger name="assigning">
        <Label>Classwork</Label>
        {Platform.select({
          ios: <Icon sf="house.fill" />,
          android: <Icon src={<VectorIcon family={MaterialCommunityIcons} name="clipboard-edit-outline" />} />,
        })}
      </NativeTabs.Trigger>

      {/* add Person/People  */}
      <NativeTabs.Trigger name="addperson">
        <Label>People</Label>
        {Platform.select({
          ios: <Icon sf="gear" />,
          android: <Icon src={<VectorIcon family={MaterialIcons} name="people" />} />,
        })}
      </NativeTabs.Trigger>

      {/* Profile  */}
      <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        {Platform.select({
          ios: <Icon sf="gear" />,
          android: <Icon src={<VectorIcon family={MaterialCommunityIcons} name="face-man-profile" />} />,
        })}
      </NativeTabs.Trigger>

       {/* Reuse Posts 
      <NativeTabs.Trigger name="reusepost">
        <Label>Reuse Posts</Label>
        {Platform.select({
          ios: <Icon sf="gear" />,
          android: <Icon src={<VectorIcon family={MaterialCommunityIcons} name="face-man-profile" />} />,
        })}
      </NativeTabs.Trigger> */}
    </NativeTabs>
    </SafeAreaProvider>
  );
};

export default TabsLayout;