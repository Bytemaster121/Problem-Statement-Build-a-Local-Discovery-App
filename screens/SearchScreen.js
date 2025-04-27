"use client"

import { useState, useEffect } from "react"
import { View, FlatList, StyleSheet, Text } from "react-native"
import { vendors } from "../data/vendors"
import VendorCard from "../components/VendorCard"
import SearchBar from "../components/SearchBar"
import { useTheme } from "../context/ThemeContext"

export default function SearchScreen({ navigation }) {
  const { colors, spacing } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const filteredResults = vendors.filter(
      (vendor) =>
        vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.products.some((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase())),
    )

    setSearchResults(filteredResults)
  }, [searchQuery])

  const handleVendorPress = (vendor) => {
    navigation.navigate("VendorDetail", { vendor })
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search vendors, products, categories..."
      />

      {searchQuery.trim() !== "" && searchResults.length === 0 ? (
        <View style={[styles.emptyState, { padding: spacing.xl }]}>
          <Text style={[styles.emptyStateText, { color: colors.gray }]}>No results found for "{searchQuery}"</Text>
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VendorCard vendor={item} onPress={() => handleVendorPress(item)} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            isSearching && searchResults.length > 0 ? (
              <Text style={[styles.resultsText, { color: colors.gray, marginBottom: spacing.md }]}>
                {searchResults.length} {searchResults.length === 1 ? "result" : "results"} found
              </Text>
            ) : null
          }
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStateText: {
    fontSize: 16,
    textAlign: "center",
  },
  resultsText: {
    fontSize: 14,
  },
})
