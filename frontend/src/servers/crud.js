import axios from "axios"

export async function GetPeople() {
    const response = await axios.get(`${process.env.EXPO_PUBLIC_URL}/people`)
    console.log("pessoas: " + response.data)
    console.log(`${process.env.EXPO_PUBLIC_URL}/people`)
    return(response.data)
}

export async function DeletePerson(id) {
    try {
        const response = await axios.delete(`${process.env.EXPO_PUBLIC_URL}/people/${id}`)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export async function CreateNewPerson(person) {
    try {
        const formattedDate = person.birthDate ? new Date(birthDate).toISOString().split("T")[0] : null;

        const response = await axios.post(`${process.env.EXPO_PUBLIC_URL}/people`, {
            firstName: person.name, lastName: person.lastName, email: person.email, phone: person.phone, birthDate: formattedDate
        })
        console.log(response.data);
    } catch (error) {
        console.log(error)
    }
}

export async function UpdatePerson(person, id) {
    try {
        const dateOfBirth = person.birthDate.toString()
        const response = await axios.put(`${process.env.EXPO_PUBLIC_URL}/people/${id}`, {
            firstName: person.name, lastName: person.lastName, email: person.email, phone: person.phone, birthDate: dateOfBirth
        })
        console.log(response.data);
    } catch (error) {
        console.log(error)
    }
}