import { View , Text} from 'react-native';
import {s} from './RecipiesList.style';
import { useEffect } from 'react';
import { useFetchRecipies } from '../../api/recipies/useFetchRecipies';

export default function RecipiesList() {

    const { getAllRecipies } = useFetchRecipies();
    
    useEffect(() => {
        getAllRecipies();
    }, []);
    return (
      <View style={s}>
        <Text>RecipiesList</Text>
      </View>
    );
};