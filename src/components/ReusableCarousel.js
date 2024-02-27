import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
import colors from '../../colors';

const ReusableCarousel = ({ data, autoChangeInterval = 5000, carouselHeight }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => (
    <View style={[styles.carouselItem, { height: carouselHeight }]}>
      <Image
        source={item.imageUrl}
        style={styles.carouselImage}
        resizeMode="contain"
      />
    </View>
  );

  const screenWidth = Dimensions.get('window').width;

  const changeImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  useEffect(() => {
    const timer = setInterval(changeImage, autoChangeInterval);

    return () => {
      clearInterval(timer);
    };
  }, [activeIndex]);

  return (
    <>
      <View style={{ height: carouselHeight }}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          loop={true}
          onSnapToItem={(index) => setActiveIndex(index)}
          firstItem={activeIndex}
        />
      </View>
      {data?.length > 0 && (
        <Pagination activeDotIndex={activeIndex} dotsLength={data.length} dotColor={colors.white} inactiveDotColor={colors.white} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
});

export default ReusableCarousel;
