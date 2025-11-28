import React from "react";
import { 
  View, Text, StyleSheet, ScrollView, 
  TouchableOpacity, TextInput 
} from "react-native";

import { DrawerActions } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";

export default function ContatosEmergencia({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <MaterialCommunityIcons name="menu" size={RFValue(28)} color="#7B4DFA"/>
        </TouchableOpacity>
        
        <Feather name="phone" size={RFValue(26)} color="#7B4DFA" />
        <Text style={styles.headerTitle}>Contatos de Emergência</Text>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll}>

          <View style={styles.card}>
            <View style={{alignSelf: 'center'}}><MaterialCommunityIcons name="alert" size={RFValue(34)} color="#FF3B30"/></View>

            <Text style={styles.cardTitleRed}>Alerta de Emergência</Text>
            <Text style={styles.cardText}>
              Envie SMS automático para todos os seus contatos cadastrados
            </Text>

            <TouchableOpacity style={styles.alertButton}>
              <MaterialCommunityIcons 
                name="chat-outline" 
                size={RFValue(22)} 
                color="#fff" 
              />
              <Text style={styles.alertButtonText}>ALERTAR AGORA</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitlePurple}>Seus Contatos de Emergência</Text>
            <Text style={styles.cardText}>
              Cadastre pessoas de confiança para receber alertas automáticos
            </Text>

            <View style={styles.divider} />

            <View style={{ alignItems: "center", marginTop: 10 }}>
              <MaterialCommunityIcons name="chat-alert-outline" size={RFValue(34)} color="#444"/>
              <Text style={styles.emptyTitle}>Nenhum contato cadastrado</Text>
              <Text style={styles.emptyText}>
                Adicione contatos de confiança para emergências
              </Text>
            </View>

            <TouchableOpacity style={styles.addButton}>
              <MaterialCommunityIcons 
                name="plus" 
                size={RFValue(20)} 
                color="#fff" 
              />
              <Text style={styles.addButtonText}>Adicionar Primeiro Contato</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitlePurple}>Mensagem de Emergência</Text>
            <Text style={styles.cardText}>
              Personalize a mensagem que será enviada automaticamente
            </Text>

            <TextInput 
              style={styles.input}
              multiline
              placeholder="
              EMERGÊNCIA - Esta é uma mensagem automática do Projeto Amparo. 
              Preciso de ajuda urgente. Entre em contato comigo ou ligue para a polícia (190)."
              placeholderTextColor="#999"
            />

            <Text style={styles.counter}>Caracteres: 154/160</Text>

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Salvar Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>🔒 Informações de Segurança</Text>

            <Text style={styles.infoItem}>• Cadastre apenas pessoas de confiança</Text>
            <Text style={styles.infoItem}>• Mantenha os contatos atualizados</Text>
            <Text style={styles.infoItem}>• Teste o sistema periodicamente</Text>
            <Text style={styles.infoItem}>• A mensagem será enviada automaticamente</Text>
            <Text style={styles.infoItem}>• Em caso de falha, ligue diretamente</Text>
            <Text style={styles.infoItem}>• Não compartilhe contatos com o agressor</Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  header: {
    width: "100%",
    minHeight: 100,
    maxHeight: 120,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#fff",
    elevation: 4,
    borderBottomLeftRadius: 40
  },
  headerTitle: {
    fontSize: RFValue(18),
    fontWeight: "900",
    color: "#7B4DFA",
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    maxWidth: "100%",
    minWidth: '90%',
    alignSelf: 'center',
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000"
  },
  cardTitleRed: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#FF3B30",
    marginTop: 10,
    textAlign: "center",
  },
  cardTitlePurple: {
    fontSize: RFValue(17),
    fontWeight: '700',
    color: "#7B4DFA",
    textAlign: "center"
  },
  cardSubtitlePurple: {
    fontSize: RFValue(13),
    color: "#7B4DFA",
    fontWeight: '700',
    textAlign: "center",
  },
  cardText: {
    fontSize: RFValue(12),
    color: "#222",
    fontWeight: '500',
    textAlign: "center",
    marginTop: 5,
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "#DDD",
    alignSelf: "center",
    marginVertical: 12,
  },
  emptyTitle: {
    fontSize: RFValue(14),
    marginTop: 8,
    fontWeight: "800",
  },
  emptyText: {
    fontSize: RFValue(12),
    textAlign: "center",
    color: "#222",
    fontWeight: "500",
    width: "80%",
  },
  alertButton: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    borderRadius: 12,
  },
  alertButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(14),
  },
  addButton: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#7B4DFA",
    paddingVertical: 12,
    borderRadius: 15,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: RFValue(13),
  },
  input: {
    minWidth: 300,
    height: 120,
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    padding: 12,
    fontSize: RFValue(12),
    marginTop: 10,
    textAlignVertical: "top",
  },
  counter: {
    marginTop: 6,
    fontSize: RFValue(11),
    color: "#444",
  },
  saveButton: {
    marginTop: 12,
    backgroundColor: "#7B4DFA",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  infoCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    borderColor: '#eee',
    borderWidth: 1,
    elevation: 2,
  },
  infoTitle: {
    fontSize: RFValue(16),
    color: "#7B4DFA",
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 12,
  },
  infoItem: {
    fontSize: RFValue(13),
    color: "#7B4DFA",
    fontWeight: '700',
    marginBottom: 6
  },
});