import * as React from 'react';
import { View, Button, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { styles } from "../styles/style";

const RegistrationPage = ({navigation, route}) => {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <View style={styles.header}>
            <Text style={styles.logo}>Logo</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button}>
                <Image style={styles.image} source={require("../find.png")} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image style={styles.image} source={require("../people.png")} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image style={styles.image} source={require("../cog.png")} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.burger}>
                <Text style={styles.burgerText}>☰</Text>
              </TouchableOpacity>
            </View>
          </View> */}
          
          <View style={styles.createAccount}>
            <Text style={styles.title}>СОЗДАНИЕ УЧЕТНОЙ ЗАПИСИ</Text>
            <Text style={styles.account}>У Вас уже есть аккаунт?</Text>
            <TouchableOpacity
             style={styles.accountButton}
             onPress={() => navigation.navigate('Enter')}
            >
              <Text style={styles.accountButtonText}>ВОЙТИ</Text>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Имя" />
              <TextInput style={styles.input} placeholder="Фамилия" />
              <TextInput style={styles.input} placeholder="Электронная почта" />
              <TextInput style={styles.input} placeholder="Логин" />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
              />
              <TouchableOpacity style={styles.accountCreateButton}>
                <Text style={styles.accountCreateButtonText}>Создать аккаунт</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.accountButton}>
                <Text style={styles.accountSMS}>Создать аккаунт по СМС</Text>
              </TouchableOpacity>
            </View>
          </View>
    
          {/* <View style={styles.footer}>
            <View style={styles.footerMenu}>
              <Text style={styles.logo}>Logo</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Image style={styles.image} source={require("../find.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Image style={styles.image} source={require("../people.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Image style={styles.image} source={require("../cog.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.burger}>
                  <Text style={styles.burgerText}>☰</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.footerSupport}>
              <Text style={styles.footerSupportTitle}>Поддержка:</Text>
              <View>
                <View style={styles.footerSupportList}>
                  <Text style={styles.footerSupportItem}>Помощь по программе</Text>
                  <TouchableOpacity style={styles.burger}>
                    <Text style={styles.footerSupportItem}>+7 (777) 777-77-77</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.footerSupportList}>
                  <Text style={styles.footerSupportItem}>FAQ</Text>
                  <TouchableOpacity style={styles.burger}>
                    <Text style={styles.footerSupportItem}>
                      xakaton.2024@gmail.ru
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View> */}
        </View>
      </ScrollView>
    );      
};

export default RegistrationPage;