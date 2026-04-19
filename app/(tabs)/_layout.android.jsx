import { Icon, Label, NativeTabs, VectorIcon } from 'expo-router/unstable-native-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from "../../constants/colors";

const Page = () => {
  return (
    <SafeAreaProvider>
      <NativeTabs
        minimizeBehavior="never"
        backgroundColor={colors.accentLight}
        borderTopColor={colors.primary}
        iconColor={{ default: colors.primaryDark, selected: colors.primary }}
        labelStyle={{
          default: { color: colors.primary, fontSize: 11, fontWeight: '700' },
          selected: { color: colors.primary, fontSize: 12, fontWeight: '700' },
        }}
        indicatorColor={colors.primaryLight}
        rippleColor={colors.primaryLight}
        shadowColor={colors.primaryLight}
        disableTransparentOnScrollEdge={true}
        headerShown={true}
      >

        {/* Stream */}
        <NativeTabs.Trigger name="announcement">
          <Label>Stream</Label>
          <Icon src={<VectorIcon family={MaterialIcons} name="dynamic-feed" />} />
        </NativeTabs.Trigger>

        {/* Classwork */}
        <NativeTabs.Trigger name="assigning">
          <Label>Classwork</Label>
          <Icon src={<VectorIcon family={MaterialCommunityIcons} name="clipboard-edit-outline" />} />
        </NativeTabs.Trigger>

        {/* People */}
        <NativeTabs.Trigger name="addperson">
          <Label>People</Label>
          <Icon src={<VectorIcon family={MaterialIcons} name="people" />} />
        </NativeTabs.Trigger>

        {/* Profile */}
        <NativeTabs.Trigger name="profile">
          <Label>Profile</Label>
          <Icon src={<VectorIcon family={MaterialCommunityIcons} name="face-man-profile" />} />
        </NativeTabs.Trigger>

      </NativeTabs>
    </SafeAreaProvider>
  );
};

export default Page;