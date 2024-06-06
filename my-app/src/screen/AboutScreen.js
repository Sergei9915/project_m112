import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.textH1}>Інтернет магазин «M112»</Text> здійснює
        роздрібну та оптову торгівлю комплектуючими для мобільних телефонів! На
        сторінках нашого сайту Ви знайдете найзатребуваніші деталі для Ваших
        мобільних пристроїв.
      </Text>
      <View>
        <Text style={styles.textH3}>Умови гарантії:</Text>
        <Text style={styles.textGuarantee}>
          Якщо придбаний товар Вам не підійшов або виявився бракованим (перед
          відправкою все ретельно перевіряється), ми гарантуємо обмін,
          повернення або зарахування на баланс грошових коштів (здійснюється
          згідно вартості продукції на момент звернення за гарантії). На всі
          представлені деталі стільникових телефонів, з моменту покупки діє
          гарантія, термін якої може бути різний (залежно від типу запчастини та
          компанії - виробника). Детальну інформацію уточнюйте у менеджера.
        </Text>
      </View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },

  text: {
    marginBottom: 150,
    marginTop: 50,
    fontSize: 16,
  },

  textH1: {
    fontWeight: "800",
  },

  textH3: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  textGuarantee: {
    fontSize: 16,
  },
});
