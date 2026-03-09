import { Ionicons } from '@expo/vector-icons';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Divider
} from 'react-native-paper';

const { width } = Dimensions.get('window');

const GcashHome = () => {
  const balance = '₱25,000.00';
  const userName = 'Juan Dela Cruz';

  const quickActions = [
    { id: 1, name: 'Send Money', icon: 'cash-outline', color: '#4CAF50' },
    { id: 2, name: 'Pay Bills', icon: 'document-text-outline', color: '#2196F3' },
    { id: 3, name: 'Buy Load', icon: 'phone-portrait-outline', color: '#FF9800' },
    { id: 4, name: 'Bank Transfer', icon: 'business-outline', color: '#9C27B0' },
  ];

  const services = [
    { id: 1, name: 'Scan QR', icon: 'qr-code-outline', color: '#00BCD4' },
    { id: 2, name: 'GLife', icon: 'game-controller-outline', color: '#E91E63' },
    { id: 3, name: 'GInvest', icon: 'trending-up-outline', color: '#4CAF50' },
    { id: 4, name: 'GInsure', icon: 'shield-checkmark-outline', color: '#FF5722' },
    { id: 5, name: 'GCredit', icon: 'card-outline', color: '#795548' },
    { id: 6, name: 'GGives', icon: 'gift-outline', color: '#FFC107' },
    { id: 7, name: 'GSave', icon: 'wallet-outline', color: '#607D8B' },
    { id: 8, name: 'More', icon: 'ellipsis-horizontal-outline', color: '#9E9E9E' },
  ];

  const recentTransactions = [
    { id: 1, name: 'Maria Santos', amount: '-₱500.00', time: '2 hours ago', type: 'sent' },
    { id: 2, name: 'Load Purchase', amount: '-₱100.00', time: '5 hours ago', type: 'load' },
    { id: 3, name: 'John Doe', amount: '+₱1,000.00', time: '1 day ago', type: 'received' },
    { id: 4, name: 'MERALCO', amount: '-₱2,500.00', time: '2 days ago', type: 'bills' },
  ];

  const QuickActionCard = ({ action }) => (
    <Card style={[styles.quickActionCard, { borderLeftColor: action.color }]}>
      <Card.Content style={styles.quickActionContent}>
        <Ionicons name={action.icon} size={24} color={action.color} />
        <Text style={styles.quickActionText}>{action.name}</Text>
      </Card.Content>
    </Card>
  );

  const ServiceCard = ({ service }) => (
    <View style={styles.serviceCard}>
      <View style={[styles.serviceIconContainer, { backgroundColor: service.color }]}>
        <Ionicons name={service.icon} size={24} color="white" />
      </View>
      <Text style={styles.serviceText}>{service.name}</Text>
    </View>
  );

  const TransactionItem = ({ transaction }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View style={[
          styles.transactionIcon,
          { backgroundColor: transaction.type === 'sent' ? '#FF5252' : 
                             transaction.type === 'received' ? '#4CAF50' : 
                             transaction.type === 'load' ? '#FF9800' : '#2196F3' }
        ]}>
          <Ionicons 
            name={transaction.type === 'sent' ? 'arrow-up-outline' : 
                  transaction.type === 'received' ? 'arrow-down-outline' : 
                  transaction.type === 'load' ? 'phone-portrait-outline' : 'document-text-outline'} 
            size={16} 
            color="white" 
          />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionName}>{transaction.name}</Text>
          <Text style={styles.transactionTime}>{transaction.time}</Text>
        </View>
      </View>
      <Text style={[
        styles.transactionAmount,
        { color: transaction.amount.startsWith('+') ? '#4CAF50' : '#FF5252' }
      ]}>
        {transaction.amount}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <View style={styles.headerContent}>
          <Avatar.Text size={40} label="JD" style={styles.avatar} />
          <View style={styles.headerText}>
            <Text style={styles.greeting}>Good morning!</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
          <Ionicons name="notifications-outline" size={24} color="#0066CC" />
        </View>
      </Appbar.Header>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Balance Card */}
        <Card style={styles.balanceCard}>
          <Card.Content>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>{balance}</Text>
            <View style={styles.balanceActions}>
              <Button 
                mode="contained" 
                style={styles.cashInButton}
                onPress={() => console.log('Cash In pressed')}
              >
                Cash In
              </Button>
              <Button 
                mode="outlined" 
                style={styles.cashOutButton}
                onPress={() => console.log('Cash Out pressed')}
              >
                Cash Out
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action) => (
              <QuickActionCard key={action.id} action={action} />
            ))}
          </View>
        </View>

        {/* Services Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.servicesGrid}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <Button mode="text" onPress={() => console.log('See all pressed')}>
              See all
            </Button>
          </View>
          <Card style={styles.transactionsCard}>
            <Card.Content>
              {recentTransactions.map((transaction, index) => (
                <View key={transaction.id}>
                  <TransactionItem transaction={transaction} />
                  {index < recentTransactions.length - 1 && (
                    <Divider style={styles.divider} />
                  )}
                </View>
              ))}
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 16,
  },
  avatar: {
    backgroundColor: '#0066CC',
  },
  headerText: {
    flex: 1,
    marginLeft: 12,
  },
  greeting: {
    fontSize: 12,
    color: '#666',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  balanceCard: {
    backgroundColor: '#0066CC',
    borderRadius: 12,
    marginTop: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  balanceLabel: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  balanceActions: {
    flexDirection: 'row',
    gap: 12,
  },
  cashInButton: {
    flex: 1,
    backgroundColor: 'white',
  },
  cashOutButton: {
    flex: 1,
    borderColor: 'white',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionCard: {
    width: (width - 44) / 2,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  quickActionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  quickActionText: {
    marginLeft: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  serviceCard: {
    width: (width - 60) / 4,
    alignItems: 'center',
  },
  serviceIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  transactionsCard: {
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  transactionTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  divider: {
    marginVertical: 8,
  },
});

export default GcashHome;
