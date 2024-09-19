import { Image, StyleSheet, FlatList, View, Dimensions } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const carts = [
  { id: '1', name: 'Coffsee Cart', description: 'Best coffee in town', price: '50 QAR' },
  { id: '2', name: 'Ice Cream Cart', description: 'Delicious ice cream', price: '40 QAR' },
  { id: '3', name: 'Cupcake Cart', description: 'Tasty cupcakes', price: '30 QAR' },
  { id: '4', name: 'Burger Cart', description: 'Juicy burgers', price: '60 QAR' },
  { id: '5', name: 'Coffee Cart', description: 'Best coffee in town', price: '50 QAR' },
  { id: '6', name: 'Ice Cream Cart', description: 'Delicious ice cream', price: '40 QAR' },
  { id: '7', name: 'Cupcake Cart', description: 'Tasty cupcakes', price: '30 QAR' },
  { id: '8', name: 'Burger Cart', description: 'Juicy burgers', price: '60 QAR' },
  { id: '9', name: 'Ice Cream Cart', description: 'Delicious ice cream', price: '40 QAR' },
  { id: '10', name: 'Cupcake Cart', description: 'Tasty cupcakes', price: '30 QAR' },
  { id: '11', name: 'Burgfer Cart', description: 'Juicy burgers', price: '60 QAR' },
];

const windowWidth = Dimensions.get('window').width;

export default function ExplorePage() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.blackText}>Explore Carts</ThemedText>
      </ThemedView>

      <FlatList
        data={carts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.cartContainer}>
            <ThemedText type="subtitle" style={styles.blackText}>{item.name}</ThemedText>
            <ThemedText style={styles.blackText}>{item.description}</ThemedText>
            <ThemedText type="defaultSemiBold" style={[styles.cartPrice, styles.blackText]}>{item.price}</ThemedText>
          </View>
        )}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  cartContainer: {
    width: (windowWidth / 2) - 45,
    height: (windowWidth / 2) - 45,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 0,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cartPrice: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  blackText: {
    color: '#000', // Set text color to black
  },
});