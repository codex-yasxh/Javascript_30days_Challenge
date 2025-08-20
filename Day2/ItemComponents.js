import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemComponents = () => {
  const ImageItems = [
    {
      id: "1",
      image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_640.jpg",
      name: "Pizza",
    },
    {
      id: "2",
      image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_640.jpg",
      name: "Burger",
    },
    {
      id: "3",
      image: "https://cdn.pixabay.com/photo/2017/06/02/18/24/spaghetti-2361480_640.jpg",
      name: "Pasta",
    },
    {
      id: "4",
      image: "https://cdn.pixabay.com/photo/2017/01/06/19/15/french-fries-1959997_640.jpg",
      name: "Fries",
    },
    {
      id: "5",
      image: "https://cdn.pixabay.com/photo/2017/09/02/13/29/sushi-2709064_640.jpg",
      name: "Sushi",
    },
    {
      id: "6",
      image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/ice-cream-1869598_640.jpg",
      name: "Ice Cream",
    },
    {
      id: "7",
      image: "https://cdn.pixabay.com/photo/2017/08/10/01/23/tacos-2619962_640.jpg",
      name: "Tacos",
    },
    {
      id: "8",
      image: "https://cdn.pixabay.com/photo/2016/03/05/19/06/coffee-1239220_640.jpg",
      name: "Coffee",
    },
  ];

  return (
    <View>
      <Text style={styles.title}>Eat What Makes You Happy!</Text>

      <FlatList
        data={ImageItems}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.image}
              imageStyle={{ borderRadius: 60 }}
            />
            <Text style={styles.label}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

export default ItemComponents

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    textAlign: 'center',
  },
  card: {
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    textAlign: 'center',
  }
});
