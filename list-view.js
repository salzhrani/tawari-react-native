import React from 'react-native';
import Strings from './localization';
import {Icon} from 'react-native-icons';
import styles from './styles';

const {ListView, View, Text, TouchableHighlight} = React;

const info = { e: [
	{name: Strings["KSA Emergency"],
	desc: Strings["General emergency number"],
	icon:"fontawesome|globe",
	num: "112"},
	{name: Strings["Civil Defense"],
	desc: Strings["Fire / Rescue"],
	icon:"fontawesome|fire",
	num: "998"},
	{name: Strings["Ambulance"],
	desc: Strings["Medical emergencies"],
	icon:"fontawesome|ambulance",
	num: "997"},
	{name: Strings["Police"],
	desc: Strings["Crimes / Robbery"],
	icon: "fontawesome|shield",
	num: "999"},
	{name: Strings["Traffic Police"],
	desc: Strings["Traffic accidents"],
	icon: "fontawesome|car",
	num: "993"},
	{name: Strings["NAJM"],
	desc: Strings["Accidents without injuries"],
	icon: "fontawesome|star",
	num: "920000560"},
	{name: Strings["Highway Patrol"],
	desc: Strings["Highway emergencies"],
	icon: "fontawesome|cab",
	num: "996"},
	{name: Strings["Coast Guards"],
	desc: Strings["Navy relief"],
	icon: "fontawesome|ship",
	num: "994"},
	{name: Strings["Natural Disasters"],
	desc: Strings["Inquiring and reporting"],
	icon: "fontawesome|cloud",
	num: "966"}],
	r: [
	{name: Strings["General Investigation Dep."],
	desc: Strings["Terrorism / Breach of national security"],
	icon: 'fontawesome|bomb',
	num: "990"},
	{name: Strings["Administrative Investigation Dep."],
	desc: Strings["Bribes / Corruption"],
	icon: 'fontawesome|eye',
	num: "980"},
	{name: Strings["Drug Enforcement"],
	desc: Strings["Drug distribution / Addiction"],
	icon: 'fontawesome|toggle-off',
	num: "995"},
	{name: Strings["Al Haia'ah (Virtue Committee)"],
	desc: Strings["Promotion of Virtue & the Prevention of Vices"],
	icon: "fontawesome|moon-o",
	num: "920000980"},
	{name: Strings["General Directorate of Passports"],
	desc: Strings["Passports Issuing, Regulation of Travelling"],
	icon: "fontawesome|book",
	num: "992"},
	{name: Strings["Trade Control"],
	desc: Strings["Trade control violations"],
	icon: "fontawesome|money",
	num: "8001241616"},
	{name: Strings["Food & Drug Authority"],
	desc: Strings["Expired food and drugs"],
	icon: "fontawesome|cutlery",
	num: "012038222"},
	{name: Strings["Human Rights"],
	desc: Strings["Human rights abuses"],
	icon: "fontawesome|users",

	num: "012102223"},
	{name: Strings["Municipality"],
	desc: Strings["Road repair / Littering / Sanitation"],
	icon: "fontawesome|building",

	num: "940"},
	{name: Strings["Wildlife Preservation"],
	desc: Strings["Illegal hunting / Reservation violation"],
	icon: "fontawesome|paw",
	num: "014414333"},
	],
	i: [
	{name: Strings["Water"],
	desc: Strings["Water service"],
	icon: "fontawesome|tint",
	num: "939"},
	{name: Strings["Electricity"],
	desc: Strings["Electricity service"],
	icon: "fontawesome|bolt",
	num: "933"},
	{name: Strings["Landline"],
	desc: Strings["STC landline service"],
	icon: "fontawesome|phone",
	num: "907"},
	{name: Strings["Al Jawal"],
	desc: Strings["STC cellphone service"],
	icon: "fontawesome|mobile-phone",
	num: "902"},
	{name: Strings["Mobily"],
	desc: Strings["Mobily cellphone service"],
	icon: "fontawesome|mobile-phone",
	num: "0560101100"},
	{name: Strings["Zain"],
	desc: Strings["Zain cellphone service"],
	icon: "fontawesome|mobile-phone",
	num: "0590000959"},
	{name: Strings["STC DSL"],
	desc: Strings["STC DSL service"],
	icon: "fontawesome|server",
	num: "906"},
	{name: Strings["GO"],
	desc: Strings["GO Internet service"],
	icon: "fontawesome|server",
	num: "920017175"},
	]
};
const sources = {};



export default (type, cb) => {
	if (!sources[type]) {
		sources[type] = new ListView.DataSource({
			rowHasChanged: (row1, row2) => {
				console.log(row1, row2);
			},
		});
		sources[type] = sources[type].cloneWithRows(info[type])
	}
	const renderItem = (item) => {
		const curItem = {...item};
		return ( <TouchableHighlight underlayColor={'#883300'} onPress={()=>{ cb(curItem.num) }}>
					<View style={styles.container}>
					<Icon name={curItem.icon} color={'#883300'} size={32} style={styles.thumbnail} />
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{curItem.name}</Text>
						<Text style={{color: '#666', fontSize: 16}}>{curItem.desc}</Text>
					</View>
					</View>
				</TouchableHighlight> );
	}
	return React.createClass({
		render: ()=> {
			return <ListView dataSource={sources[type]} renderRow={renderItem} />;
		}
	});
}
