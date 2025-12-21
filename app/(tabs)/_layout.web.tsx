import { Link, Slot, usePathname } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          padding: 16,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#171630",
        }}
      >
        <HeaderLink href="/" text="Home" icon="home-outline" />
        <HeaderLink href="/settings" text="Settings" icon="settings-outline" />
      </View>

      {/* Main Content */}
      <View style={{ flex: 1 }}>
        <Slot />
      </View>

      {/* Footer */}
      <View
        style={{
          padding: 16,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#171630",
        }}
      >
        <Text style={{ color: "#fff" }}>
          Made with ♥️ by{" "}
          <Text
            style={{ textDecorationLine: "underline" }}
            onPress={() => {
              Linking.openURL("https://galaxies.dev");
            }}
          >
            Galaxies.dev
          </Text>
        </Text>
      </View>
    </View>
  );
};

const HeaderLink = ({ href, text, icon }: any) => {
  const path = usePathname();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(path === href);
  }, [path]);

  return (
    <Link href={href} asChild>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Ionicons
          name={icon}
          size={20}
          color={selected ? "#00eaff" : "#fff"}
        />
        <Text
          style={{
            color: selected ? "#00eaff" : "#fff",
            fontWeight: selected ? "bold" : "normal",
            fontSize: 16,
          }}
        >
          {text}
        </Text>
      </Pressable>
    </Link>
  );
};

export default Page;
