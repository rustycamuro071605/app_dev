import { StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

const Header = ({ username }) => {
  return (
    <Appbar.Header style={styles.header}>
      <Avatar.Image size={40} source={{ uri: 'https://via.placeholder.com/150' }} />
      <Appbar.Content title={`Hello, ${username}`} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;