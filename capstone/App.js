import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';

export default function App() {
  const [connected, setConnected] = useState(false);
  const [image, setImage] = useState(null);
  
  const pickImage = async () => {
    // Request permission to access media library
    const permissionResult = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!permissionResult.canceled) {
      setImage(permissionResult.assets[0].uri);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.rootContainer}>
        {/* Main Card Container */}
        <View style={styles.mainCardContainer}>
          {/* Header with title */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>User Profile</Text>
          </View>
          
          {/* Profile Frame */}
          <View style={styles.profileFrame}>
            {/* Profile Image */}
            <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
              <Image 
                source={image ? { uri: image } : require('./assets/icon.png')} 
                style={styles.profileImage} 
              />
              <Text style={styles.changePhotoText}>Tap to change photo</Text>
            </TouchableOpacity>
            
            {/* User Information */}
            <View style={styles.infoContainer}>
              <Text style={styles.nameText}>Rusty Carson</Text>
              <Text style={styles.roleText}>Passionate Professional</Text>
              <Text style={styles.bioText}>I'm passionate about everything I do, bringing dedication and enthusiasm to every project and challenge.</Text>
            </View>
          </View>
          
          {!connected && (
            <TouchableOpacity 
              style={styles.connectIndicator}
              onPress={() => setConnected(true)}
            >
              <Text style={styles.connectIndicatorText}>Tap to Connect</Text>
            </TouchableOpacity>
          )}
        </View>
        
        {/* Detailed User Information Frame - Shown after connecting */}
        {connected && (
          <View style={styles.detailedInfoContainer}>
            <View style={styles.detailedInfoFrame}>
              <Text style={styles.detailedInfoTitle}>Personal Information</Text>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Name:</Text>
                <Text style={styles.detailValue}>Rusty Carson</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Role:</Text>
                <Text style={styles.detailValue}>Passionate Professional</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Bio:</Text>
                <Text style={styles.detailValue}>I'm passionate about everything I do, bringing dedication and enthusiasm to every project and challenge.</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Email:</Text>
                <Text style={styles.detailValue}>rustycarson@gmail.com</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Location:</Text>
                <Text style={styles.detailValue}>Sumpong, Malaybalay City, Philippines</Text>
              </View>
              
              {/* Core Competencies Section */}
              <Text style={styles.sectionTitle}>Core Competencies</Text>
              <View style={styles.competencyItem}>
                <Text style={styles.competencyIcon}>🖥️</Text>
                <Text style={styles.competencyText}>Computer System Servicing</Text>
              </View>
              <View style={styles.competencyItem}>
                <Text style={styles.competencyIcon}>🎨</Text>
                <Text style={styles.competencyText}>UI/UX Designer</Text>
              </View>
              <View style={styles.competencyItem}>
                <Text style={styles.competencyIcon}>💻</Text>
                <Text style={styles.competencyText}>Software Engineer</Text>
              </View>
              <TouchableOpacity 
                style={styles.disconnectButton}
                onPress={() => setConnected(false)}
              >
                <Text style={styles.disconnectButtonText}>Disconnect</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  rootContainer: {
    flex: 1,
    backgroundColor: '#e0f2fe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCardContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 16,
    padding: 24,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
  },

  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0369a1',
  },
  profileFrame: {
    backgroundColor: '#bae6fd',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#7dd3fc',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#3b82f6',
  },
  changePhotoText: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  infoContainer: {
    marginBottom: 24,
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0ea5e9',
    textAlign: 'center',
    marginBottom: 8,
  },
  roleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0284c7',
    textAlign: 'center',
    marginBottom: 12,
  },
  bioText: {
    fontSize: 16,
    color: '#0f172a',
    textAlign: 'center',
    lineHeight: 22,
  },
  connectIndicator: {
    backgroundColor: '#bae6fd',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#0ea5e9',
  },
  connectIndicatorText: {
    color: '#1d4ed8',
    fontSize: 14,
    fontWeight: '500',
  },
  detailedInfoContainer: {
    marginTop: 20,
    width: '90%',
    maxWidth: 400,
  },
  detailedInfoFrame: {
    backgroundColor: '#f0f9ff',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
  },
  detailedInfoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0369a1',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 8,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0284c7',
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    color: '#0f172a',
    flex: 2,
    textAlign: 'right',
  },
  disconnectButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  disconnectButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0369a1',
    marginTop: 16,
    marginBottom: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  competencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#bae6fd',
    borderRadius: 8,
  },
  competencyIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 30,
  },
  competencyText: {
    fontSize: 16,
    color: '#334155',
    flex: 1,
  },
});