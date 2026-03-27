import { styles } from "../styles/styles";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { DateInput } from "../components/dateInput";
import { UserCheck } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { CreateNewPerson, GetPerson, UpdatePerson } from "../servers/crud";

export function AddEditScreen(id) {
    const [person, setPerson] = useState();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [birthDate, setBirthDate] = useState(new Date().toISOString())
    const navigation = useNavigation()

    useEffect(() => {
        async function GetSpecificPerson() {
            const provisoryPerson = await GetPerson(id.route.params)
            setPerson(provisoryPerson)

            setName(provisoryPerson.firstName)
            setLastName(provisoryPerson.lastName)
            setEmail(provisoryPerson.email)
            setPhone(provisoryPerson.phone)
            setBirthDate(provisoryPerson.birthDate)
        }

        if (id.route.params) {
            GetSpecificPerson(id)
            console.log(id)
        }
    }, [id])

    async function SavePerson() {
        console.log("salvando pessoa")
        if (person) {
            console.log("tem pessoa")
            await UpdatePerson({name, lastName, email, phone, birthDate}, id.route.params)
            navigation.navigate("HomeScreen")
        } else {
            console.log("não tem pessoa")
            await CreateNewPerson({name, lastName, email, phone, birthDate})
            navigation.navigate("HomeScreen")
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={styles.pageTitle}>{person ? "Edição de cadastro" : "Cadastro de pessoa"}</Text>
            </View>

            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.label}>Nome: </Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Sobrenome: </Text>
                    <TextInput
                        value={lastName}
                        onChangeText={setLastName}
                        style={styles.input}
                    />
                </View>

                <View>
                    <Text style={styles.label}>E-mail: </Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Telefone: </Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        style={styles.input}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Data de nascimento: </Text>
                    <DateInput
                        value={birthDate}
                        onChange={setBirthDate}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={SavePerson}>
                    <Text style={styles.buttonText}>Salvar</Text>
                    <UserCheck size={16} strokeWidth={3} />
                </TouchableOpacity>
            </View>
        </View>
    )
}