"use client"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { useTheme } from "../context/ThemeContext"

const ProductCard = ({ product }) => {
  const { colors, spacing, borderRadius } = useTheme()

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderRadius: borderRadius.md,
          margin: spacing.xs,
          padding: spacing.sm,
          borderWidth: 1,
          borderColor: colors.lightGray,
        },
      ]}
    >
      <Image source={{ uri: product.image }} style={[styles.image, { borderRadius: borderRadius.sm }]} />
      <View style={[styles.content, { marginTop: spacing.sm }]}>
        <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={[styles.price, { color: colors.primary, marginTop: spacing.xs }]}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
})

export default ProductCard
