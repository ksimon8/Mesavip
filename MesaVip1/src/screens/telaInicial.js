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
					backgroundColor: "#141414",
					paddingTop: 41,
					paddingBottom: -101,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 42,
						marginHorizontal: 27,
					}}>
					<View 
						style = {{
							width: 300,
							backgroundColor: "#D9D9D980",
							borderRadius: 30,
							paddingHorizontal: 15,
							marginRight: 11,
						}}>
						<View 
							style = {{
								width: 12,
								height: 11,
								marginTop: 15,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									height: 11,
								}}
							/>
							<View 
								style = {{
									position: "absolute",
									bottom: -1,
									right: -1,
									width: 3,
									height: 3,
									borderColor: "#000000",
									borderWidth: 2,
								}}>
							</View>
						</View>
					</View>
					<View 
						style = {{
							width: 10,
							marginRight: 1,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 1,
								marginBottom: 5,
							}}
						/>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 6,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 5,
									height: 1,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 1,
									height: 7,
								}}
							/>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 1,
							}}
						/>
					</View>
					<View 
						style = {{
							width: 10,
						}}>
						<View 
							style = {{
								marginBottom: 8,
								marginHorizontal: 1,
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									height: 1,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									bottom: -3,
									left: 0,
									width: 1,
									height: 7,
								}}
							/>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								height: 1,
								marginBottom: 9,
							}}
						/>
						<View 
							style = {{
							}}>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									height: 1,
								}}
							/>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									position: "absolute",
									top: -4,
									left: 0,
									width: 1,
									height: 7,
								}}
							/>
						</View>
					</View>
				</View>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						borderRadius: 30,
						height: 340,
						marginBottom: 16,
						marginHorizontal: 31,
					}}
				/>
				<Text 
					style = {{
						color: "#FFFFFF",
						fontSize: 24,
						marginBottom: 21,
						marginHorizontal: 38,
					}}>
					{"Outback Steakhouse, Osasco"}
				</Text>
				<Text 
					style = {{
						color: "#FFFFFF",
						fontSize: 18,
						marginBottom: 44,
						marginHorizontal: 60,
						width: 270,
					}}>
					{"Av. dos Autonomistas, 1400 -\n Vila Yara, Osasco - SP, 06020-010"}
				</Text>
				<View 
					style = {{
						marginHorizontal: 35,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 30,
							height: 340,
						}}
					/>
					<View 
						style = {{
							position: "absolute",
							bottom: 102,
							right: -35,
							width: 390,
							height: 80,
							backgroundColor: "#D9D9D9",
							borderRadius: 4,
							paddingHorizontal: 10,
						}}>
						<View 
							style = {{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
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
										marginHorizontal: 2,
									}}>
								</View>
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
										color: "#FE0000",
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
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}
