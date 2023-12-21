import { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Pessoa extends Component {
    render() {
        return (
            <View style={styles.areaPessoa}>
                <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
                <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
                <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
            </View>
        );
    }
}

export default Pessoa;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    areaPessoa: {
        backgroundColor: '#222',
        height: 200,
        paddingVertical: 20
    },
    textoPessoa: {
        color: "#fff",
        fontSize: 20
    }
});