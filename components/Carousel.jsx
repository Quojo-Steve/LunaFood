import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";

const Carousel = () => {
  const carouselData = [
    {
      id: "01",
      name: "Chicken Teriyaki",
      discount: "25",
      image: require("../assets/images/teriyaki.png"),
    },
    {
      id: "02",
      name: "Fried Rice",
      discount: "35",
      image: require("../assets/images/image5.png"),
    },
    {
      id: "03",
      name: "Plain Rice",
      discount: "20",
      image: require("../assets/images/teriyaki.png"),
    },
  ];

  const [parentWidth, setParentWidth] = useState(0); // Store the available width from parent
  const flatListRef = useRef(null);
  let scrollIndex = 0;

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scrollIndex = (scrollIndex + 1) % carouselData.length;
      flatListRef.current?.scrollToOffset({
        offset: scrollIndex * parentWidth, // Scroll based on dynamic width
        animated: true,
      });
    }, 5000); // Auto scroll every 3 seconds

    return () => clearInterval(interval);
  }, [parentWidth]);

  // Get the parent layout width
  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setParentWidth(width); // Set available width excluding padding
  };

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.itemContainer, { width: parentWidth }]}>
        <View>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text>Discount {item.discount}%</Text>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
    );
  };

  return (
    <View onLayout={onLayout}>
      <FlatList
        ref={flatListRef}
        data={carouselData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E5E7EB",
    padding: 16,
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 16,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  orderButton: {
    backgroundColor: "#eb6f19",
    width: 128,
    marginTop: 16,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  orderText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 128,
    height: 128,
  },
  flatList: {
    flexGrow: 0, // Prevent extra space below FlatList
  },
});
