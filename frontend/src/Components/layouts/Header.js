// CVPetshop/frontend/src/Components/layouts/Header.js
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.navContainer}>
          <View style={styles.navLogo}>
            <Image 
              source={require('./techlogo.png')} 
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.shopName}>TechNest</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#D7E5F2',
    shadowColor: '#0C4A6E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    position: 'relative',
    top: 0,
    zIndex: 1000,
  },
  navContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F7FBFF',
    borderWidth: 1,
    borderColor: '#BAE6FD',
    padding: 4,
  },
  shopName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
});

export default Header;