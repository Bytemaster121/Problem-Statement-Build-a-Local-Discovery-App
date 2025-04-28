Overview Local Discovery App helps users find organic and local vendors—fruit & vegetable stands, dairy providers, tiffin services—around their housing society. It features a clean, mobile-first UI, static (mocked) data, and core flows for browsing, searching, and favoriting vendors.

📂 Project Structure LocalDiscoveryApp/ ├── assets/ # Images & icons ├── components/ # Reusable UI components │ ├── VendorCard.js │ ├── ProductCard.js │ ├── SearchBar.js │ └── CategoryFilter.js ├── context/ # ThemeContext for light/dark mode │ └── ThemeContext.js ├── data/ # Static vendor data │ └── vendors.js ├── navigation/ # React Navigation setup │ └── AppNavigator.js ├── screens/ # App screens │ ├── HomeScreen.js │ ├── VendorDetailScreen.js │ ├── FavoritesScreen.js │ ├── ProfileScreen.js │ └── SearchScreen.js ├── App.js # Root entry, wraps NavigationContainer ├── package.json # Dependencies & scripts └── tsconfig.json # TypeScript config

Tech Stack Expo (SDK 52) React Native React Navigation (native-stack) Context API for theme FlatList, ScrollView, TouchableOpacity Static JSON data (no backend)

Features Implementation Home Screen: Scrollable vendor list with name, category, distance, description. Vendor Detail: Image, name, rating, description, contact info, working hours, product grid. Search & Filter: Live search by name/description/category/products; category filter. Favorites: Add/remove vendors to favorites; empty-state UI. Profile: User info, account settings menu, support links. Pull to Refresh on Home list.

Challenges and Solutions faced in implementing EXPO with react native

Future Improvements Features that could be added with more time Performance optimizations Backend integration possibilities screenshots WhatsApp Image 2025-04-27 at 13 05 12_80b5518c WhatsApp Image 2025-04-27 at 13 05 12_0e26bbaa WhatsApp Image 2025-04-27 at 13 05 11_240b787f WhatsApp Image 2025-04-27 at 13 05 11_228b4bb6 WhatsApp Image 2025-04-27 at 13 05 12_d3138866 WhatsApp Image 2025-04-27 at 13 05 11_1886eca6 WhatsApp Image 2025-04-27 at 13 05 12_80b5518c WhatsApp Image 2025-04-27 at 13 05 12_0e26bbaa

![WhatsApp Image 2025-04-07 at 19 27 11_1db7ef72](https://github.com/user-attachments/assets/60df7173-77aa-4be0-b4fe-701db6eb2b7b)
![WhatsApp Image 2025-04-27 at 13 05 11_240b787f](https://github.com/user-attachments/assets/55b3748e-cc50-43db-9e00-a27a279ebd78)
![WhatsApp Image 2025-04-27 at 13 05 11_228b4bb6](https://github.com/user-attachments/assets/7b6f45bd-4636-4d07-9494-3f0f02abce71)
![WhatsApp Image 2025-04-27 at 13 05 12_d3138866](https://github.com/user-attachments/assets/ed4a7a64-2acd-4b11-af1e-c861cd9f35e0)
![WhatsApp Image 2025-04-27 at 13 05 11_1886eca6](https://github.com/user-attachments/assets/82353b2d-ceb0-46da-920a-bd62132e50ea)
![WhatsApp Image 2025-04-27 at 13 05 12_80b5518c](https://github.com/user-attachments/assets/bf7f5ae1-7505-423c-a889-b918b98f5f2d)
![WhatsApp Image 2025-04-27 at 13 05 12_0e26bbaa](https://github.com/user-attachments/assets/f5b1e197-9f94-4ee1-9748-2b5e35d429f4)
![WhatsApp Image 2025-04-27 at 13 05 11_228b4bb6](https://github.com/user-attachments/assets/1ccae5ef-de40-443d-a486-9c3b7b428ea7)
