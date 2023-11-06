import { View, Text, Dimensions, StyleSheet, Image, ImageBackground } from 'react-native';
import React, { useRef, useState } from 'react';
import CarouselSlider, { Pagination } from 'react-native-snap-carousel';
import { CarouselData } from '../Data/CarouselData';


const sliderWidth = Dimensions.get('screen').width;

const Carousel = () => {
    const CarouselRef = useRef();
    const [activeSlide, setActiveSlide] = useState(0);

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <View style={{height:250, width:392}} >
                <Image source={item.image} style={styles.imgStyle} />
                </View>
            </View>
        );
    }


    return (

        <View style={styles.paginationcont}>
            <CarouselSlider
                ref={CarouselRef}
                data={CarouselData}
                renderItem={renderItem}
                sliderWidth={sliderWidth}
                itemWidth={500}
                onSnapToItem={index => setActiveSlide(index)}
            />

            <Pagination
                dotsLength={CarouselData.length}
                activeDotIndex={activeSlide}
                containerStyle={{ position: 'absolute', bottom: 0, marginLeft: 90 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,

                }}
                inactiveDotStyle={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,

                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                dotColor="green"
                inactiveDotColor="#ffffff"
                

            />

        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({
    imgStyle: {
        height: '100%',
        width: '100%',
        ImageBackground: 'cover',


    },
    slide: {

    },
    paginationcont: {
        position: 'relative'

    }
})