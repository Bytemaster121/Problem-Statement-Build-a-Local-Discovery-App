"use client"

import { useState, useCallback } from "react"
import { View, FlatList, StyleSheet, RefreshControl } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { vendors, categories } from "../data/vendors"
import VendorCard from "../components/VendorCard"
import CategoryFilter from "../components/CategoryFilter"
import SearchBar from "../components/SearchBar"
import { useTheme } from "../context/ThemeContext"

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("1") // Default to 'All'
  const [filteredVendors, setFilteredVendors] = useState(vendors)
  const [refreshing, setRefreshing] = useState(false)

  const filterVendors = useCallback(() => {
    let result = vendors

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "1") {
      // '1' is 'All'
      const categoryName = categories.find((cat) => cat.id === selectedCategory)?.name
      result = result.filter((vendor) => vendor.category === categoryName)
    }

    setFilteredVendors(result)
  }, [searchQuery, selectedCategory])

  useFocusEffect(
    useCallback(() => {
      filterVendors()
    }, [filterVendors]),
  )

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    // Simulate a refresh
    setTimeout(() => {
      filterVendors()
      setRefreshing(false)
    }, 1000)
  }, [filterVendors])

  const handleVendorPress = (vendor) => {
    navigation.navigate("VendorDetail", { vendor })
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmit={filterVendors}
        placeholder="Search for vendors, products..."
      />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => setSelectedCategory(id)}
      />

      <FlatList
        data={filteredVendors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VendorCard vendor={item} onPress={() => handleVendorPress(item)} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[colors.primary]} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})
