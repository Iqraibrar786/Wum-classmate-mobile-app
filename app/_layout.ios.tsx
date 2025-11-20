import { Badge, Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

const Page = () => {
    return (
        <NativeTabs minimizeBehavior="onScrollDown">
            <NativeTabs.Trigger name="index">
                <Label>Home</Label>
                <Icon sf="house.fill"/>
                <Badge>9+</Badge>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="settings">
                <Icon sf="gear"/>
                <Label>Settings</Label>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="experiment">
                <Icon sf="exclamationmark.triangle"/>
                <Label>Experiment</Label>
            </NativeTabs.Trigger>
        </NativeTabs>
    );
};
export default Page;