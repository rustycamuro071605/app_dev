import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const ServiceCard = ({ title, icon }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    marginTop: 8,
    fontSize: 14,
  },
});

export default ServiceCard;