"use client"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useTheme } from "../context/ThemeContext"

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const { colors, spacing, borderRadius } = useTheme()

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingHorizontal: spacing.md }]}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryItem,
              {
                backgroundColor: selectedCategory === category.id ? colors.primary : colors.lightGray,
                borderRadius: borderRadius.md,
                marginRight: spacing.md,
                paddingVertical: spacing.sm,
                paddingHorizontal: spacing.md,
              },
            ]}
            onPress={() => onSelectCategory(category.id)}
          >
            <Feather
              name={category.icon}
              size={16}
              color={selectedCategory === category.id ? colors.white : colors.text}
              style={{ marginRight: spacing.xs }}
            />
            <Text
              style={[
                styles.categoryText,
                {
                  color: selectedCategory === category.id ? colors.white : colors.text,
                },
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  scrollContent: {
    paddingVertical: 5,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
  },
})

export default CategoryFilter
