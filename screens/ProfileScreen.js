"use client"
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useTheme } from "../context/ThemeContext"

export default function ProfileScreen() {
  const { colors, spacing, borderRadius } = useTheme()

  const renderMenuItem = (icon, title, subtitle) => (
    <TouchableOpacity
      style={[
        styles.menuItem,
        {
          backgroundColor: colors.card,
          borderRadius: borderRadius.md,
          padding: spacing.md,
          marginBottom: spacing.sm,
        },
      ]}
    >
      <View style={[styles.menuIcon, { backgroundColor: colors.primary + "20", borderRadius: borderRadius.sm }]}>
        <Feather name={icon} size={20} color={colors.primary} />
      </View>
      <View style={styles.menuContent}>
        <Text style={[styles.menuTitle, { color: colors.text }]}>{title}</Text>
        {subtitle && <Text style={[styles.menuSubtitle, { color: colors.gray }]}>{subtitle}</Text>}
      </View>
      <Feather name="chevron-right" size={20} color={colors.gray} />
    </TouchableOpacity>
  )

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primary, padding: spacing.xl }]}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          }}
          style={[styles.profileImage, { borderRadius: 50, borderWidth: 3, borderColor: colors.white }]}
        />
        <Text style={[styles.name, { color: colors.white, marginTop: spacing.md }]}>John Doe</Text>
        <Text style={[styles.email, { color: colors.white + "CC" }]}>john.doe@example.com</Text>

        <TouchableOpacity
          style={[
            styles.editButton,
            {
              backgroundColor: colors.white,
              borderRadius: borderRadius.md,
              paddingVertical: spacing.xs,
              paddingHorizontal: spacing.md,
              marginTop: spacing.md,
            },
          ]}
        >
          <Text style={[styles.editButtonText, { color: colors.primary }]}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.menuSection, { padding: spacing.md }]}>
        <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: spacing.sm }]}>Account Settings</Text>

        {renderMenuItem("map-pin", "My Addresses", "Manage your delivery addresses")}
        {renderMenuItem("credit-card", "Payment Methods", "Add or remove payment methods")}
        {renderMenuItem("bell", "Notifications", "Manage your notification preferences")}
        {renderMenuItem("shield", "Privacy & Security", "Control your privacy settings")}
      </View>

      <View style={[styles.menuSection, { padding: spacing.md }]}>
        <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: spacing.sm }]}>Support</Text>

        {renderMenuItem("help-circle", "Help Center", "Get help with your orders")}
        {renderMenuItem("message-circle", "Contact Us", "Reach out to our support team")}
        {renderMenuItem("info", "About Us", "Learn more about our mission")}
        {renderMenuItem("log-out", "Log Out", null)}
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
  },
  editButton: {
    alignItems: "center",
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: "500",
  },
  menuSection: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContent: {
    flex: 1,
    marginLeft: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  menuSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },
})
