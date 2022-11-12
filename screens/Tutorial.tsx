import {Modal, StyleSheet, Text, View} from "react-native";
import CoolText from "../components/CoolText";
import CoolButton from "../components/CoolButton";
import {navigateBack} from "../utils/navigation";


function Red(props: any) {
	
	return <Text style={{color: 'red'}}>{props.children} </Text>
}

export default function Tutorial() {
	return (
		<Modal animationType={'slide'}>
			<View style={styles.container}>
				<CoolText style={styles.header}> Tutorial </CoolText>
				<CoolText style={{paddingHorizontal: 40, fontSize: 25, textAlign: 'justify'}}>
					You need to connect <Red>4</Red> disks and have them on the same line / column / diagonal in order
					to win the game. 🚀{'\n\n'}
					In each turn you can click on a cell to place a disk there. {'\n\n'}
					You have <Red>15</Red> seconds to make each move, so make your move before the times
					runs out .⏰ {'\n\n'}
					Have fun and good luck!</CoolText>
				<CoolButton text="Back" style={styles.backButton}
				            onPress={() => navigateBack()}/>
			</View>
		</Modal>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: 'center',
	},
	header: {
		paddingBottom: 20,
		alignSelf: 'center',
		fontSize: 40,
	},
	backButton: {
		width: 200,
		position: "relative",
		top: -20
	}
})