import React from "react";
import { SafeAreaView, View, ScrollView, ImageBackground, Text, Image, TouchableOpacity, FlatList } from "react-native";

export default (props) => {
    
    
    return (
        <SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#141313",
					paddingTop: 22,
					paddingBottom: 1,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#141414",
						borderTopLeftRadius: 4,
						borderTopRightRadius: 4,
						paddingVertical: 16,
						paddingHorizontal: 2,
						marginBottom: 30,
					}}>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 90,
							paddingVertical: 3,
							paddingLeft: 61,
							paddingRight: 2,
							marginRight: 41,
						}}
						>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 27,
								height: 27,
								marginBottom: 30,
							}}
						/>
						<ImageBackground 
							source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
							resizeMode = {'stretch'}
							style = {{
								width: 23,
								height: 23,
								paddingHorizontal: 5,
							}}
							>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									height: 12,
									marginTop: 6,
								}}
							/>
						</ImageBackground>
					</ImageBackground>
					<Text 
						style = {{
							color: "#FFFFFF",
							fontSize: 22,
							flex: 1,
						}}>
						{"RonaldinhoSoccer"}
					</Text>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						paddingTop: 8,
						paddingBottom: 22,
						paddingHorizontal: 8,
						marginBottom: 9,
						marginHorizontal: 10,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 37,
							height: 25,
							marginRight: 34,
						}}
					/>
					<View 
						style = {{
							width: 119,
							alignSelf: "flex-start",
						}}>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 24,
							}}>
							{"Pagamento"}
						</Text>
						<Text 
							style = {{
								position: "absolute",
								bottom: -12,
								right: -41,
								color: "#808080",
								fontSize: 12,
							}}>
							{"Saldo e formas de recebimento"}
						</Text>
					</View>
					<View 
						style = {{
							flex: 1,
						}}>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 6,
							height: 10,
							marginTop: 10,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						paddingVertical: 5,
						paddingHorizontal: 10,
						marginBottom: 23,
						marginHorizontal: 10,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 33,
							height: 31,
							marginRight: 32,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 24,
								marginBottom: 4,
								marginHorizontal: 7,
							}}>
							{"Ajuda"}
						</Text>
						<Text 
							style = {{
								color: "#808080",
								fontSize: 12,
							}}>
							{"Central de suporte"}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 6,
							height: 10,
						}}
					/>
				</View>
				<View 
					style = {{
						marginBottom: 10,
						marginHorizontal: 11,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							paddingTop: 4,
							paddingBottom: 18,
							paddingHorizontal: 9,
						}}>
						<View 
							style = {{
								width: 33,
								alignSelf: "flex-start",
								marginRight: 29,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									height: 23,
									marginBottom: 6,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									height: 1,
									marginHorizontal: 13,
								}}
							/>
						</View>
						<Text 
							style = {{
								color: "#808080",
								fontSize: 12,
								marginTop: 21,
							}}>
							{"Gerencie suas notificações"}
						</Text>
						<View 
							style = {{
								flex: 1,
							}}>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 6,
								height: 10,
								marginTop: 14,
							}}
						/>
					</View>
					<Text 
						style = {{
							position: "absolute",
							top: -2,
							left: 83,
							color: "#FFFFFF",
							fontSize: 24,
						}}>
						{"Notificações"}
					</Text>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						paddingVertical: 8,
						paddingHorizontal: 9,
						marginBottom: 11,
						marginHorizontal: 10,
					}}>
					<View 
						style = {{
							width: 26,
							marginRight: 35,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 26,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								position: "absolute",
								top: -3,
								right: -3,
								width: 20,
								height: 20,
							}}
						/>
					</View>
					<View 
						style = {{
							width: 253,
							marginRight: 28,
						}}>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 24,
								marginBottom: 1,
								marginHorizontal: 9,
							}}>
							{"Alterar dados"}
						</Text>
						<Text 
							style = {{
								color: "#808080",
								fontSize: 12,
								width: 253,
							}}>
							{"Altere seus dados como email, senhas, telefone e outras..."}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 6,
							height: 10,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						paddingVertical: 2,
						paddingHorizontal: 6,
						marginBottom: 252,
						marginHorizontal: 10,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 37,
							height: 37,
							marginRight: 27,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							marginRight: 4,
						}}>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 24,
								marginBottom: 2,
								marginHorizontal: 8,
							}}>
							{"Tema"}
						</Text>
						<Text 
							style = {{
								color: "#808080",
								fontSize: 12,
							}}>
							{"Altere o tema do aplicativo"}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 6,
							height: 10,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#D9D9D9",
						borderRadius: 4,
						paddingHorizontal: 8,
					}}>
					<View 
						style = {{
							width: 78,
							backgroundColor: "#D9D9D9",
							borderRadius: 10,
							paddingVertical: 15,
						}}>
						<View 
							style = {{
								marginBottom: 11,
								marginHorizontal: 23,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									height: 21,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									bottom: -3,
									right: -3,
									width: 6,
									height: 5,
								}}
							/>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginHorizontal: 10,
							}}>
							{"Explorar\n"}
						</Text>
					</View>
					<View 
						style = {{
							width: 78,
							backgroundColor: "#D9D9D9",
							borderRadius: 10,
							paddingVertical: 15,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 26,
								marginBottom: 6,
								marginHorizontal: 24,
							}}
						/>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginHorizontal: 10,
							}}>
							{"Favorito"}
						</Text>
					</View>
					<View 
						style = {{
							width: 78,
							backgroundColor: "#D9D9D9",
							borderRadius: 10,
							paddingVertical: 15,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
								marginHorizontal: 23,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 14,
									height: 26,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 14,
									height: 26,
								}}
							/>
						</View>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 16,
								marginHorizontal: 10,
							}}>
							{"Reserva"}
						</Text>
					</View>
					<View 
						style = {{
							width: 78,
							backgroundColor: "#D9D9D9",
							borderRadius: 10,
							paddingBottom: 15,
						}}>
						<View 
							style = {{
								marginBottom: 2,
								marginHorizontal: 4,
							}}>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 12,
								marginBottom: 7,
								marginHorizontal: 32,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 9,
								marginBottom: 6,
								marginHorizontal: 26,
							}}
						/>
						<Text 
							style = {{
								color: "#FE0000",
								fontSize: 16,
								marginHorizontal: 20,
							}}>
							{"Perfil\n"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
