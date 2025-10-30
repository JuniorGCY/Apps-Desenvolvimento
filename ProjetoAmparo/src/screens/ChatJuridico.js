import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../styles/colors";
import { DrawerActions } from "@react-navigation/native";

// Conteúdos detalhados
import ModalContent1 from "./ModalContent1";
import ModalContent2 from './ModalContent2';
import ModalContent3 from './ModalContent3';
import ModalContent4 from './ModalContent4';
import ModalContent5 from './ModalContent5';
import ModalContent6 from "./ModalContent6";
import ModalContent7 from "./ModalContent7";
import ModalContent8 from "./ModalContent8";

export default function ChatJuridico({ navigation }) {
    const [inputValue, setInputValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);
    const [showMenu, setShowMenu] = useState(true); // Controla se deve exibir o menu ou o conteúdo específico

    // Função para exibir o conteúdo ao clicar no tema
    const handleOpenContent = (content) => {
        setShowMenu(false); // Esconde o menu
        setSelectedContent(content); // Define o conteúdo selecionado
        setInputValue(''); // Limpa o campo de entrada
    };

    // Função para voltar ao menu principal
    const handleBackToMenu = () => {
        setShowMenu(true); // Mostra o menu novamente
        setSelectedContent(null); // Limpa o conteúdo exibido
    };

    const temas = [
        { id: 1, titulo: "Direitos das Vítimas" },
        { id: 2, titulo: "Boletim de Ocorrência" },
        { id: 3, titulo: "Medidas Protetivas" },
        { id: 4, titulo: "Denúncias" },
        { id: 5, titulo: "Feminicídio" },
        { id: 6, titulo: "Rede de Apoio" },
        { id: 7, titulo: "Sigilo e Proteção" },
        { id: 8, titulo: "Atendimento Online" }
    ];

    const renderContent = () => {
        switch (selectedContent) {
            case "content1":
                return <ModalContent1 />;
            case "content2":
                return <ModalContent2 />;
            case "content3":
                return <ModalContent3 />;
            case "content4":
                return <ModalContent4 />;
            case "content5":
                return <ModalContent5 />;
            case "content6":
                return <ModalContent6 />;
            case "content7":
                return <ModalContent7 />;
            case "content8":
                return <ModalContent8 />;
            default:
                return null;
        }
    };

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={{ alignItems: 'center' }}>

            <View style={styles.header}>
                <TouchableOpacity style={{ marginStart: 20, marginEnd: 20 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <MaterialCommunityIcons name="menu" size={30} color='#AF28FF' />
                </TouchableOpacity>

                <MaterialCommunityIcons name="scale-balance" size={30} color='#AF28FF' />
                <Text style={{ fontSize: 25, color: colors.primary, fontWeight: 'bold', marginStart: 15, textAlign: 'center' }}>Chat Jurídico</Text>
            </View>

            <View style={styles.body}>
                {showMenu ? (
                    <>
                        <View style={{ backgroundColor: colors.primary, borderTopLeftRadius: 5, borderTopRightRadius: 5, alignItems: 'center', padding: 5 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="chat" size={25} color="#fff" />
                                <Text style={{ color: colors.background, fontWeight: '500', marginHorizontal: 10 }}>Assistente Jurídica</Text>
                            </View>
                        </View>

                        <View style={styles.balaoText}>
                            <Text style={{ color: '#000', fontSize: 13 }}>
                                Olá! Sou a assistente jurídica do Projeto Amparo. Posso ajudar você com informações sobre seus direitos legais,
                                medidas protetivas, boletins de ocorrência e questões relacionadas à violência contra a mulher.
                                Como posso ajudar você hoje?
                            </Text>
                            <Text style={{ color: '#666666', marginTop: 5 }}>10:37</Text>
                        </View>

                        <View style={styles.balaoText}>
                            <Text style={{ color: '#000', fontSize: 14, textAlign: 'right', fontWeight: '500' }}>
                                Temas Comuns:
                            </Text>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
                                {temas.map((temas) => (
                                    <TouchableOpacity key={temas.id} onPress={() => handleOpenContent(`content${temas.id}`)}>
                                        <View style={styles.buttonTexts}>
                                            <Text>{temas.titulo}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </>
                ) : (
                    <View style={styles.balaoText}>
                        {renderContent()}
                        <TouchableOpacity onPress={handleBackToMenu}>
                            <View style={styles.buttonTexts}>
                                <Text style={{ color: colors.primary }}>Voltar ao Menu Principal</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}

            </View>

            <View style={styles.footer}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                    <MaterialCommunityIcons name="alert" size={30} color="#FF4B4B" />
                    <Text style={{ marginTop: 5, marginBottom: 5, fontSize: 13, fontWeight: '900', color: '#c90000ff', textAlign: 'left' }}>
                        Aviso Legal
                    </Text>
                </View>

                <Text style={{ fontSize: 14, fontWeight: '500', color: colors.danger }}>
                    As informações fornecidas têm caráter orientativo e não substituem a consulta com um advogado.
                    Para casos específicos, procure sempre orientação jurídica profissional através da Defensoria Pública
                    ou advogado especializado em direitos da mulher.
                </Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#FFEDF9',
    },
    header: {
        width: '100%',
        height: 100,
        paddingStart: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.background,
        borderBottomLeftRadius: 50,
        borderWidth: 0.3,
        borderColor: '#000',
        elevation: 3
    },
    body: {
        width: 390,
        height: 'auto',
        marginTop: 20,
        borderColor: '#000',
        borderBottomWidth: 0.5,
        borderRadius: 20,
        elevation: 5,
        backgroundColor: colors.background
    },
    balaoText: {
        width: '90%',
        padding: 5,
        marginStart: 10,
        backgroundColor: '#ffff',
        marginTop: 30,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#c4c4c4ff'
    },
    footer: {
        width: '90%',
        height: 150,
        marginTop: 30,
        padding: 10,
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: '#FFDC7D',
        elevation: 3
    },
    buttonTexts: {
        flex: 1,
        width: '100%',
        height: 'auto',
        marginTop: 5,
        padding: 6,
        backgroundColor: colors.background,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    }
});
