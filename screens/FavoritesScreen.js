"use client"

import { useState } from "react"
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native"
import { useTheme } from "../context/ThemeContext"
import { vendors } from "../data/vendors"
import VendorCard from "../components/VendorCard"

export default function FavoritesScreen({ navigation }) {
  const { colors, spacing } = useTheme()
  // In a real app, this would be stored in a persistent storage
  const [favorites, setFavorites] = useState([vendors[0], vendors[2]])

  const handleVendorPress = (vendor) => {
    navigation.navigate("VendorDetail", { vendor })
  }

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((vendor) => vendor.id !== id))
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text, margin: spacing.md }]}>Your Favorite Vendors</Text>

      {favorites.length === 0 ? (
        <View style={[styles.emptyState, { padding: spacing.xl }]}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1496115965628-7b0d7749eca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            }}
            style={styles.emptyStateImage}
          />
          <Text style={[styles.emptyStateTitle, { color: colors.text, marginTop: spacing.lg }]}>No favorites yet</Text>
          <Text style={[styles.emptyStateText, { color: colors.gray, marginTop: spacing.sm }]}>
            Start exploring and add vendors to your favorites
          </Text>
          <Button title="Explore Vendors" onPress={() => navigation.navigate("Home")} color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VendorCard vendor={item} onPress={() => handleVendorPress(item)} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStateImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyStateText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
})
