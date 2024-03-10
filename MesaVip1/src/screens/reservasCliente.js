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
					paddingTop: 52,
					paddingBottom: 1,
				}}>
				<Text 
					style = {{
						color: "#FFFFFF",
						fontSize: 30,
						marginBottom: 72,
						marginHorizontal: 119,
					}}>
					{"Reservadas"}
				</Text>
				<Text 
					style = {{
						color: "#FFFFFF",
						fontSize: 24,
						marginBottom: 22,
						marginHorizontal: 28,
					}}>
					{"Agendadas:"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#141414",
						borderRadius: 4,
						paddingVertical: 1,
						paddingHorizontal: 8,
						marginBottom: 66,
						marginHorizontal: 18,
					}}>
					<ImageBackground 
						source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
						resizeMode = {'stretch'}
						style = {{
							width: 70,
							marginRight: 16,
						}}
						>
					</ImageBackground>
					<View 
						style = {{
							flex: 1,
						}}>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 18,
								marginBottom: 5,
							}}>
							{"Outback Steakhouse"}
						</Text>
						<Text 
							style = {{
								color: "#9D9494",
								fontSize: 15,
							}}>
							{"Domingo, 31/12/23 ás 13:30"}
						</Text>
					</View>
				</View>
				<Text 
					style = {{
						color: "#FFFFFF",
						fontSize: 24,
						marginBottom: 29,
						marginHorizontal: 29,
					}}>
					{"Onde já esteve"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#141414",
						borderRadius: 4,
						paddingVertical: 2,
						paddingHorizontal: 15,
						marginBottom: 16,
						marginHorizontal: 18,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 67,
							height: 67,
							marginRight: 12,
						}}
					/>
					<View 
						style = {{
							flex: 1,
						}}>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 18,
								marginBottom: 7,
								marginHorizontal: 1,
							}}>
							{"Manai Gastronomia"}
						</Text>
						<Text 
							style = {{
								color: "#9D9494",
								fontSize: 15,
							}}>
							{"Terça, 15/08/23 ás 18:30"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#141414",
						borderRadius: 4,
						paddingVertical: 3,
						paddingHorizontal: 10,
						marginBottom: 209,
						marginHorizontal: 18,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 4,
							width: 67,
							height: 67,
							marginRight: 17,
						}}
					/>
					<View 
						style = {{
							flex: 1,
						}}>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 18,
								marginBottom: 8,
								marginHorizontal: 1,
							}}>
							{"Habib’s"}
						</Text>
						<Text 
							style = {{
								color: "#9D9494",
								fontSize: 15,
							}}>
							{"Segunda, 30/10/23 ás 18:30"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#D9D9D9",
						borderRadius: 4,
						paddingHorizontal: 10,
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
							paddingBottom: 15,
						}}>
						<View 
							style = {{
								marginBottom: 4,
								marginHorizontal: 4,
							}}>
						</View>
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
								color: "#FE0000",
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
							paddingVertical: 13,
						}}>
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
								color: "#000000",
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
