"use client"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useTheme } from "../context/ThemeContext"

const VendorCard = ({ vendor, onPress }) => {
  const { colors, spacing, borderRadius } = useTheme()

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderRadius: borderRadius.md,
          marginBottom: spacing.md,
        },
      ]}
      onPress={onPress}
    >
      <Image source={{ uri: vendor.image }} style={[styles.image, { borderRadius: borderRadius.md }]} />
      <View style={[styles.content, { padding: spacing.md }]}>
        <View style={styles.header}>
          <Text style={[styles.name, { color: colors.text }]}>{vendor.name}</Text>
          <View style={styles.ratingContainer}>
            <Feather name="star" size={16} color="#FFD700" />
            <Text style={[styles.rating, { marginLeft: spacing.xs }]}>{vendor.rating}</Text>
          </View>
        </View>
        <View style={styles.categoryRow}>
          <View
            style={[styles.categoryBadge, { backgroundColor: colors.primary + "20", borderRadius: borderRadius.sm }]}
          >
            <Text style={[styles.category, { color: colors.primary }]}>{vendor.category}</Text>
          </View>
          <View style={styles.distanceContainer}>
            <Feather name="map-pin" size={14} color={colors.gray} />
            <Text style={[styles.distance, { color: colors.gray, marginLeft: spacing.xs }]}>{vendor.distance}</Text>
          </View>
        </View>
        <Text style={[styles.description, { color: colors.gray, marginTop: spacing.xs }]} numberOfLines={2}>
          {vendor.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  category: {
    fontSize: 12,
    fontWeight: "500",
  },
  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  distance: {
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
})

export default VendorCard
