import { StyleSheet, Text, View } from "react-native";


export default function Balance({ balance, expenses }) {
    return (
        <View style={style.container}>
            <View style={style.item}>
                <Text style={style.itemTitle}>Saldo</Text>
                <View style={style.content}>
                    <Text style={style.currencySimbol}>R$</Text>
                    <Text style={style.balance}>{balance}</Text>
                </View>
            </View>
            
            <View style={style.item}>
                <Text style={style.itemTitle}>Despesas</Text>
                <View style={style.content}>
                    <Text style={style.currencySimbol}>R$</Text>
                    <Text style={style.balance}>-{expenses}</Text>
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginStart: 14,
        marginEnd: 14,
        marginTop: -20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 22,
        paddingBottom: 22,
    },
    itemTitle: {
        fontSize: 20,
        color: 'gray',
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    currencySimbol: {
        color: 'gray',
        marginRight: 5,
    },
    balance: {
        fontSize: 32,
        color: 'green',
    },
    expense: {
        color: 'read',
    },
})