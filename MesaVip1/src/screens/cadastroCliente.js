import React from "react";
import { SafeAreaView, View, ScrollView, ImageBackground, Text, Image, TouchableOpacity, FlatList } from "react-native";

export default (props) => {


	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView
				style={{
					flex: 1,
					backgroundColor: "#000000",
				}}>
				<ImageBackground
					source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
					resizeMode={'stretch'}
					style={{
						paddingTop: 300,
						paddingBottom: 42,
						marginTop: 31,
					}}
				>
					<View
						style={{
							backgroundColor: "#5A5252",
							borderRadius: 8,
							paddingVertical: 16,
							paddingHorizontal: 19,
							marginBottom: 7,
							marginHorizontal: 42,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
							shadowOffset: {
								width: 0,
								height: 4
							},
							shadowRadius: 4,
							elevation: 4,
						}}>
						<Text
							style={{
								color: "#FFFFFF",
								fontSize: 16,
							}}>
							{"RonaldinhoSoccer"}
						</Text>
					</View>
					<View
						style={{
							backgroundColor: "#5A5252",
							borderRadius: 8,
							paddingVertical: 16,
							paddingHorizontal: 19,
							marginBottom: 7,
							marginHorizontal: 41,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
							shadowOffset: {
								width: 0,
								height: 4
							},
							shadowRadius: 4,
							elevation: 4,
						}}>
						<Text
							style={{
								color: "#FFFFFF",
								fontSize: 16,
							}}>
							{"ronaldo@gmail.com"}
						</Text>
					</View>
					<View
						style={{
							backgroundColor: "#5A5252",
							borderRadius: 8,
							paddingVertical: 15,
							paddingHorizontal: 18,
							marginBottom: 31,
							marginHorizontal: 41,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
							shadowOffset: {
								width: 0,
								height: 4
							},
							shadowRadius: 4,
							elevation: 4,
						}}>
						<Text
							style={{
								color: "#FFFFFF",
								fontSize: 16,
							}}>
							{"**************"}
						</Text>
					</View>
					<View
						style={{
							alignItems: "center",
							backgroundColor: "#FE0000",
							borderRadius: 8,
							paddingVertical: 15,
							marginBottom: 21,
							marginHorizontal: 41,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
							shadowOffset: {
								width: 0,
								height: 4
							},
							shadowRadius: 4,
							elevation: 4,
						}}>
						<Text
							style={{
								color: "#FFFFFF",
								fontSize: 16,
							}}>
							{"Cadastrar"}
						</Text>
					</View>
					<Text
						style={{
							color: "#FFFFFF",
							fontSize: 16,
							marginHorizontal: 77,
						}}>
						{"Já possui uma conta? Faça Login"}
					</Text>
				</ImageBackground>
			</ScrollView>
		</SafeAreaView>
	)
}
