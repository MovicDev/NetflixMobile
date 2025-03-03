import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pros = ({title,image1,image2,image3,image4}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
            {title}
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <Image source={image1} style={styles.image} />
            <Image source={image2} style={styles.image} />
            <Image source={image3} style={styles.image} />
            <Image source={image4} style={styles.image} />
          </ScrollView>
    </View>
  )
}

export default Pros

const styles = StyleSheet.create({

  title: {
    color: "#fff",
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  scrollView: {
    paddingVertical: 10,
  },
  image: {
    marginRight: 10,
  },
})