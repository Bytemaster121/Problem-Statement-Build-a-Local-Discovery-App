"use client"
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useTheme } from "../context/ThemeContext"

const SearchBar = ({ value, onChangeText, onSubmit, placeholder = "Search..." }) => {
  const { colors, spacing, borderRadius } = useTheme()

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.lightGray,
          borderRadius: borderRadius.md,
          paddingHorizontal: spacing.md,
          marginHorizontal: spacing.md,
          marginVertical: spacing.sm,
        },
      ]}
    >
      <Feather name="search" size={20} color={colors.gray} />
      <TextInput
        style={[styles.input, { color: colors.text, marginLeft: spacing.sm }]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="search"
      />
      {value ? (
        <TouchableOpacity onPress={() => onChangeText("")}>
          <Feather name="x" size={20} color={colors.gray} />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: "100%",
  },
})

export default SearchBar
