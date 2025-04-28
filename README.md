### 🛍️ Local Discovery App
### 📖 Overview
->>Local Discovery App helps users find organic and local vendors—such as fruit & vegetable stands, dairy providers, tiffin services—around their housing society.
It features a clean, mobile-first UI, static (mocked) data, and core user flows for browsing, searching, and favoriting vendors.
## 📂 Project Structure
-LocalDiscoveryApp/
├── assets/                  # Images & icons
├── components/               # Reusable UI components
│   ├── VendorCard.js
│   ├── ProductCard.js
│   ├── SearchBar.js
│   └── CategoryFilter.js
├── context/                  # ThemeContext for light/dark mode
│   └── ThemeContext.js
├── data/                     # Static vendor data
│   └── vendors.js
├── navigation/               # React Navigation setup
│   └── AppNavigator.js
├── screens/                  # App screens
│   ├── HomeScreen.js
│   ├── VendorDetailScreen.js
│   ├── FavoritesScreen.js
│   ├── ProfileScreen.js
│   └── SearchScreen.js
├── App.js                     # Root entry point
├── package.json               # Project dependencies and scripts
└── tsconfig.json              # TypeScript configuration
## ⚙️ Tech Stack
Expo (SDK 52)
React Native
React Navigation (native-stack)
Context API for theme management
FlatList, ScrollView, TouchableOpacity for UI
Static JSON Data (no backend integration)
## ✨ Features
Home Screen: Scrollable list of vendors with their name, category, distance, and short description.
Vendor Detail Page: Displays vendor's image, name, rating, description, contact information, working hours, and available products.
Search & Filter: Live search functionality by name, description, category, or products.
Category filter to refine vendor listings.
Favorites:Add vendors to a favorites list.
Manage favorites with the ability to remove them.
Empty state UI when no favorites are saved.
Profile Screen:Displays user information and account settings menu.
Sections for addresses, payment methods, privacy settings, and support.
Pull to Refresh: Pull down on the Home Screen to refresh the vendor list (simulated with static data).
.

## 🚧 Challenges and Solutions
Challenge: Setting up React Native navigation and linking it smoothly with Expo and Context API.
Ensuring smooth pull-to-refresh without real-time backend.
Solutions: Used React Navigation (native-stack) for a lightweight, efficient navigation system.
Employed static mock JSON data and optimized state updates using React's useCallback and useFocusEffect hooks.


## 🚀 Future Improvements
🔥 Backend Integration: Connect with Firebase or any custom backend to fetch real-time vendor data.

🌍 Maps Integration: Display vendors on a map (Google Maps / Mapbox).

📈 Performance Optimizations: Implement lazy loading for images.

Use pagination/infinite scrolling for large vendor lists.

🔒 User Authentication: Add login/signup using Firebase Authentication.

🔔 Push Notifications: Send users updates about new vendors or offers.

## 📦 How to Run the Project
-git clone https://github.com/Bytemaster121/Problem-Statement-Build-a-Local-Discovery-App.git
cd localdiscoveryAPP
-npm install
-npx expo start
-Open the app: Press a to open Android emulator, or Scan the QR code in Expo Go app (Android/iOS)

## EXPO LINK FOR TESTING ->exp://192.168.29.238:8081


![WhatsApp Image 2025-04-07 at 19 27 11_1db7ef72](https://github.com/user-attachments/assets/60df7173-77aa-4be0-b4fe-701db6eb2b7b)
![WhatsApp Image 2025-04-27 at 13 05 11_240b787f](https://github.com/user-attachments/assets/55b3748e-cc50-43db-9e00-a27a279ebd78)
![WhatsApp Image 2025-04-27 at 13 05 11_228b4bb6](https://github.com/user-attachments/assets/7b6f45bd-4636-4d07-9494-3f0f02abce71)
![WhatsApp Image 2025-04-27 at 13 05 12_d3138866](https://github.com/user-attachments/assets/ed4a7a64-2acd-4b11-af1e-c861cd9f35e0)
![WhatsApp Image 2025-04-27 at 13 05 11_1886eca6](https://github.com/user-attachments/assets/82353b2d-ceb0-46da-920a-bd62132e50ea)
![WhatsApp Image 2025-04-27 at 13 05 12_80b5518c](https://github.com/user-attachments/assets/bf7f5ae1-7505-423c-a889-b918b98f5f2d)
![WhatsApp Image 2025-04-27 at 13 05 12_0e26bbaa](https://github.com/user-attachments/assets/f5b1e197-9f94-4ee1-9748-2b5e35d429f4)
![WhatsApp Image 2025-04-27 at 13 05 11_228b4bb6](https://github.com/user-attachments/assets/1ccae5ef-de40-443d-a486-9c3b7b428ea7)
