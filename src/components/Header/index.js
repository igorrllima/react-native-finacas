import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Feather} from '@expo/vector-icons';


export default function Header({nomeUsuario}) {
    return (
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.userName}>{nomeUsuario}</Text>
                <TouchableOpacity style={style.buttonUser}>
                    <Feather name="user" size={27} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        backgroundColor: '#0000ff',
        paddingTop: 10,
        paddingBottom: 44,
        paddingStart: 16,
        paddingEnd: 16,
        flexDirection: "row",
    },
    content: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
    },
    buttonUser: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
})