import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Header from '../Compo/Header';
import DeliverTo from '../Compo/DeliverTo';
import Categery from '../Compo/Categery';
import Carousel from '../Compo/Carousel';
import Services from '../Compo/Services';
import Recomend from '../Compo/Recomend';
import Brand from '../Compo/Brand';

const Homescreen = () => {
    return (
        <ScrollView>

            <Header />
            <DeliverTo />
            <Categery />
            <Carousel />
            < Services />
            <Recomend />
            <Brand />

        </ScrollView>
    )
}

export default Homescreen