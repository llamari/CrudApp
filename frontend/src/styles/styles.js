import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        minHeight: "100%",
        minWidth: "100%",
        backgroundColor: "#d6bae6",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'
    },
    header: {
        width: "80%",
        marginHorizontal: 10,
        marginVertical: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    pageTitle: {
        fontSize: 20,
        fontWeight: 700,
        color: "#28033d",
    },
    button: {
        width: 22,
        height: 22,
        backgroundColor: "#4f1073",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    cardScrollView: {
        display: 'flex',
        width: "100%",
        flexDirection: "column",
    },
    cardContainer: {
        display: 'flex',
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center"
    },
    personCard: {
        width: "80%",
        minHeight: 60,
        borderRadius: 10,
        backgroundColor: "#e8d8f2",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-evenly",
        marginBottom: 20,
        alignSelf: "center",
        padding: 5
    },
    titleContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4
    },
    title: {
        fontWeight: 700,
        fontSize: 16,
        color: "#28033d",
        marginBottom: 3
    },
    subtopic: {
        fontWeight: 700,
        color: "#4f1073"
    },

    //add and edit page
    createContainer: {
        width: "100%"
    },
    formContainer: {
        backgroundColor: "#e8d8f2",
        width: "80%",
        alignSelf: "center",
        borderRadius: 10,
        padding: 10,
        flexDirection: "column",
        alignItems: "stretch",
        gap: 8
    },
    label: {
        fontWeight: 700,
        color: "#4f1073"
    },
    input: {
        backgroundColor: "#f4e6fc",
        height: 23,
        borderRadius: 5,
        marginTop: 4
    },
    buttonContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    saveButton: {
        backgroundColor: "#4f1073",
        color: "#f4e6fc",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        width: "30%",
        height: 30,
        marginTop: 10,
        borderRadius: 7
    },
    buttonText: {
        color: "#f4e6fc",
        fontWeight: 600,
        fontSize: 16
    }
})