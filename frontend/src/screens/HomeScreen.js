import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/styles'
import { useEffect, useState } from 'react'
import { Plus, Search } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { CardPersonal } from '../components/cardPersonal';
import { GetPeople } from '../servers/crud';

export function HomeScreen() {
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasFailed, setHasFailed] = useState(false);
    const [filteredPeople, setFilteredPeople] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigation = useNavigation()

    async function Get() {
        try {
            const people = await GetPeople();
            console.log(people)
            setPeople(people)
            setFilteredPeople(people)
        } catch (error) {
            setHasFailed(true)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        Get()
    }, [])

    useEffect(() => {
        setFilteredPeople(
            people.filter((p) =>
                p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || p.lastName.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.pageTitle}>Pessoas</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddEditScreen")}><Plus size={18} color={"#fff"} /></TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar pessoas"
                    placeholderTextColor="#aaa"
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                />
                <Search color="#28033d" size={20} />
            </View>

            {
                isLoading ?
                    <ActivityIndicator />
                    :
                    (!hasFailed && filteredPeople.length == 0) ?
                        <Text style={styles.errorMessage}>Não há pessoas que se encaixem em sua busca</Text>
                        :
                        hasFailed &&
                        <Text style={styles.errorMessage}>Erro ao chamar API</Text>

            }
            {(filteredPeople && filteredPeople.length > 0) &&
                <FlatList
                    data={filteredPeople}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <CardPersonal
                            item={item}
                            navigation={navigation}
                            Refresh={() => Get()}
                        />
                    }
                    style={styles.cardScrollView}
                    contentContainerStyle={styles.cardContainer}
                />
            }
        </View>
    )
} 