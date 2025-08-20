import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Categories = () => {

    const items = [
        {
            id : "1",
            name : "Ratings 4.0+"
        },
        {
            id : "2",
            name : "Offers"
        },
        {
            id : "3",
            name : "Cuisines"
        },
        {
            id : "4",
            name : "Free Delivery"
        },
        {
            id : "5",
            name : "Offers @99"
        },
        {
            id : "6",
            name : "Offers @199"
        },

    ]

  return (
    <View styles={styles.CategoryList}>
      <FlatList 
      horizontal={true}
      data={items}
      keyExtractor={(item)=>item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <Pressable style={styles.CategoryBtn}>
            <Text>{item.name}</Text>
        </Pressable>
      )}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    CategoryBtn : {
        padding : 4,
        borderRadius : 4,
        borderColor : '#000000',
        marginHorizontal : 4,
        backgroundColor : '#dfd4d4ff'
    },

})