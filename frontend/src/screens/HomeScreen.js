import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/styles'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { format } from "date-fns";
import { Pencil, Plus, Trash } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {
    const [people, setPeople] = useState([]);
    const navigation = useNavigation()

    async function GetPeople() {
        const response = await axios.get(`${process.env.EXPO_PUBLIC_URL}/people`)
        console.log("pessoas: " + response.data)
        console.log(`${process.env.EXPO_PUBLIC_URL}/people`)
        setPeople(response.data)
    }

    useEffect(() => {
        GetPeople();
    }, [])

    async function DeletePerson(id) {
        try {
            const response = await axios.delete(`${process.env.EXPO_PUBLIC_URL}/people/${id}`)
            console.log(response)
            GetPeople()
        } catch (error) {
            console.log(error)
        }
    }

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
                        <View style={styles.personCard}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{item.firstName} {item.lastName}</Text>
                                <View style={styles.iconsContainer}>
                                    <TouchableOpacity onPress={() => navigation.navigate("AddEditScreen", item.id.toString())}>
                                        <Pencil size={16} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => DeletePerson(item.id.toString())}>
                                        <Trash size={16} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text><Text style={styles.subtopic}>E-mail: </Text>{item.email}</Text>
                            <Text><Text style={styles.subtopic}>Telefone: </Text>{item.phone}</Text>
                            <Text><Text style={styles.subtopic}>Data de nascimento: </Text>{format(new Date(item.birthDate), "dd/MM/yyyy")}</Text>
                        </View>
                    }
                    style={styles.cardScrollView}
                    contentContainerStyle={styles.cardContainer}
                />
            }
        </View>
    )
} 