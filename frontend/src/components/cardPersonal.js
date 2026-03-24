import { Text, TouchableOpacity, View } from 'react-native'
import { format } from "date-fns";
import { DeletePerson } from '../servers/crud';
import { styles } from '../styles/styles';
import { Pencil, Trash } from 'lucide-react-native';

export function CardPersonal({item, navigation, Refresh}) {
    return (
        <View style={styles.personCard}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.firstName} {item.lastName}</Text>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("AddEditScreen", item.id.toString())}>
                        <Pencil size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        DeletePerson(item.id.toString());
                        Refresh()
                    }}>
                        <Trash size={16} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text><Text style={styles.subtopic}>E-mail: </Text>{item.email}</Text>
            <Text><Text style={styles.subtopic}>Telefone: </Text>{item.phone}</Text>
            <Text><Text style={styles.subtopic}>Data de nascimento: </Text>{format(new Date(item.birthDate), "dd/MM/yyyy")}</Text>
        </View>
    )
}