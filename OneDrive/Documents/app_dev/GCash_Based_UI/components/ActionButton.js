import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const ActionButton = ({ icon, label, onPress }) => {
  return (
    <Button
      mode="contained"
      icon={icon}
      onPress={onPress}
      style={styles.button}
      labelStyle={styles.label}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
  },
});

export default ActionButton;