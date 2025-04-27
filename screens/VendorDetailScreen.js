"use client"
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useTheme } from "../context/ThemeContext"
import ProductCard from "../components/ProductCard"

export default function VendorDetailScreen({ route }) {
  const { vendor } = route.params
  const { colors, spacing, borderRadius } = useTheme()

  const renderInfoItem = (icon, label, value) => (
    <View style={[styles.infoItem, { marginBottom: spacing.sm }]}>
      <Feather name={icon} size={18} color={colors.primary} style={{ marginRight: spacing.sm }} />
      <View>
        <Text style={[styles.infoLabel, { color: colors.gray }]}>{label}</Text>
        <Text style={[styles.infoValue, { color: colors.text }]}>{value}</Text>
      </View>
    </View>
  )

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Image source={{ uri: vendor.image }} style={styles.coverImage} />

      <View style={[styles.header, { padding: spacing.md }]}>
        <View style={styles.headerContent}>
          <Text style={[styles.vendorName, { color: colors.text }]}>{vendor.name}</Text>
          <View style={styles.ratingContainer}>
            <Feather name="star" size={16} color="#FFD700" />
            <Text style={[styles.rating, { marginLeft: spacing.xs }]}>{vendor.rating}</Text>
            <Text style={[styles.reviews, { color: colors.gray, marginLeft: spacing.xs }]}>
              ({vendor.reviews} reviews)
            </Text>
          </View>

          <View
            style={[
              styles.categoryBadge,
              {
                backgroundColor: colors.primary + "20",
                borderRadius: borderRadius.sm,
                marginTop: spacing.xs,
              },
            ]}
          >
            <Text style={[styles.category, { color: colors.primary }]}>{vendor.category}</Text>
          </View>

          <Text style={[styles.description, { color: colors.gray, marginTop: spacing.sm }]}>{vendor.description}</Text>
        </View>
      </View>

      <View style={[styles.section, { padding: spacing.md }]}>
        <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: spacing.md }]}>Contact Information</Text>

        {renderInfoItem("phone", "Phone", vendor.contact)}
        {renderInfoItem("map-pin", "Address", vendor.address)}
        {renderInfoItem("clock", "Working Hours", vendor.workingHours)}
      </View>

      <View style={[styles.section, { padding: spacing.md }]}>
        <Text style={[styles.sectionTitle, { color: colors.text, marginBottom: spacing.md }]}>Available Products</Text>

        <FlatList
          data={vendor.products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          numColumns={2}
          columnWrapperStyle={styles.productRow}
          scrollEnabled={false}
        />
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: "100%",
    height: 200,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  headerContent: {
    flex: 1,
  },
  vendorName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
  },
  reviews: {
    fontSize: 14,
  },
  categoryBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  category: {
    fontSize: 12,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  infoLabel: {
    fontSize: 12,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  productRow: {
    justifyContent: "space-between",
  },
})
