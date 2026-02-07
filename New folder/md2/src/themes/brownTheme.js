// Brown Theme Configuration
export const brownTheme = {
  // Primary Colors - Rich Browns
  primary: '#8B4513',      // SaddleBrown (main accent)
  primaryDark: '#5D2906',  // Darker brown
  primaryLight: '#A0522D', // Sienna
  
  // Secondary Colors - Cream/Beige
  secondary: '#F5DEB3',    // Wheat
  secondaryDark: '#DEB887', // BurlyWood
  secondaryLight: '#FFE5B4', // PeachPuff
  
  // Background Colors
  background: '#5D4037',   // Darker Brown
  backgroundLight: '#8D6E63', // Lighter brown
  backgroundOverlay: 'rgba(139, 69, 19, 0.8)', // Brown overlay
  
  // Text Colors
  textPrimary: '#FFFFFF',      // White
  textSecondary: '#F5DEB3',    // Wheat
  textDark: '#3E2723',         // Very dark brown
  textLight: '#D7CCC8',        // Light brown
  
  // Accent Colors
  accent: '#D2691E',       // Chocolate
  accentLight: '#FFA07A',  // Light Salmon (for highlights)
  accentDark: '#8B0000',   // Dark Red
  
  // Status Colors
  success: '#8BC34A',      // Green
  warning: '#FFC107',      // Amber
  error: '#F44336',        // Red
  info: '#2196F3',         // Blue
  
  // Shadows
  shadowColor: '#3E2723',
  shadowOpacity: 0.3,
  
  // Animation Configurations
  animations: {
    duration: {
      fast: 200,
      medium: 400,
      slow: 800,
      verySlow: 1500
    },
    easing: 'ease-in-out'
  }
};

// Animation Presets
export const animationPresets = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  slideUp: {
    from: { translateY: 100, opacity: 0 },
    to: { translateY: 0, opacity: 1 }
  },
  scaleIn: {
    from: { scale: 0.8, opacity: 0 },
    to: { scale: 1, opacity: 1 }
  },
  slideFromRight: {
    from: { translateX: 100, opacity: 0 },
    to: { translateX: 0, opacity: 1 }
  }
};

export default brownTheme;