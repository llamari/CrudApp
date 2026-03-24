import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/styles'
import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { CardPersonal } from '../components/cardPersonal';
import { GetPeople } from '../servers/crud';

export function HomeScreen() {
    const [people, setPeople] = useState([]);
    const navigation = useNavigation()

    async function Get() {
        const people = await GetPeople();
        console.log(people)
        setPeople(people)
    }

    useEffect(() => {
        Get()
    }, [])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.pageTitle}>Pessoas</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddEditScreen")}><Plus size={18} color={"#fff"} /></TouchableOpacity>
            </View>
            {(people && people.length > 0) &&
                <FlatList
                    data={people}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <CardPersonal
                            item={item}
                            navigation={navigation}
                            Refresh={Get}
                        />
                    }
                    style={styles.cardScrollView}
                    contentContainerStyle={styles.cardContainer}
                />
            }
        </View>
    )
} 