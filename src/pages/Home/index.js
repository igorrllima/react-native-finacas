import { FlatList, StyleSheet, Text, View } from "react-native";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Movements from "../../components/Movements";

let loggedUser = [{
    id: 1,
    nomeUsuario: 'Igor Lima',
    balance: '12.500,00',
    expenses: '1.700,00',
}]

const list = [
    {
        id: 1,
        label: 'Boleto do alugel',
        value: '1.800,00',
        date: '03/04/2023',
        type: 0
    },{
        id: 2,
        label: 'Steam',
        value: '300,00',
        date: '01/04/2023',
        type: 0
    },{
        id: 3,
        label: 'Salário',
        value: '10.000,00',
        date: '03/04/2023',
        type: 1
    }
]

export default function Home() {
    return (
        <View>
            <Text>Teste</Text>
            <Header nomeUsuario={loggedUser[0].nomeUsuario} />
            <Balance balance={loggedUser[0].balance} expenses={loggedUser[0].expenses} />

            <FlatList
                data={list}
                keyExtractor={(item)=>String(item.id)}
                renderItem={ ({item}) => <Movements data= {item}/>}
                showVertucalScrollIndicator={false}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {

    },
    texto: {
        fontSize: 30,
    },
    lista:{
        backgroundColor: '#dadada',
    }
})