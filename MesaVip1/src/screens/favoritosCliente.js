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
					paddingTop: 53,
					paddingBottom: 1,
				}}>
				<Text 
					style = {{
						color: "#FFFFFF",
						fontSize: 30,
						marginBottom: 21,
						marginHorizontal: 127,
					}}>
					{"Favoritos"}
				</Text>
				<View 
					style = {{
						marginBottom: 23,
						marginHorizontal: 19,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#141414",
							borderRadius: 4,
							paddingVertical: 1,
							paddingHorizontal: 8,
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
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 18,
								flex: 1,
							}}>
							{"Outback Steakhouse, Osasco"}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							bottom: 25,
							right: -2,
							width: 25,
							height: 23,
						}}
					/>
				</View>
				<View 
					style = {{
						marginBottom: 490,
						marginHorizontal: 19,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#141414",
							borderRadius: 4,
							paddingVertical: 3,
							paddingHorizontal: 10,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								borderRadius: 4,
								width: 67,
								height: 67,
								marginRight: 18,
							}}
						/>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 18,
								flex: 1,
							}}>
							{"Habib’s Tamboré, Barueri"}
						</Text>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							position: "absolute",
							top: 24,
							right: -2,
							width: 25,
							height: 23,
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
						}}>
						<View 
							style = {{
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
									color: "#FE0000",
									fontSize: 16,
									marginHorizontal: 10,
								}}>
								{"Favorito"}
							</Text>
						</View>
						<View 
							style = {{
								position: "absolute",
								top: -1,
								left: 4,
								width: 69,
								height: 11,
							}}>
						</View>
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
