import React from 'react-native';
import {Icon} from 'react-native-icons';

const {View, TouchableWithoutFeedback, Text} = React;
import {spring, Motion} from 'react-motion/native';

export default class Component extends React.Component {
	constructor(props) {
		super(props);
		const styles = [];
		for (var i = 0; i < props.items.length; i++) {
			styles[i] = i === 0 ? 1.2 : 1;
		}
		this.state = {styles};
	}
	handlePress(idx){
		if (this.props.indexChanged) {
			this.props.indexChanged(idx);
		}
		this.setState((prevState)=> {
			return {...prevState, styles: prevState.styles.map((style, i) => (i === idx ? 1.20 : 1))};
		});
	}
	render() {
		return (<View style={{backgroundColor: '#00ff00', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
					{this.props.items.map((item, idx) => {
						return (<TouchableWithoutFeedback onPress={this.handlePress.bind(this, idx)}>
									<View style={{flex: 1, height: 88, backgroundColor: '#75939A', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around'}}>
									<Motion style={{x: spring(this.state.styles[idx], [180, 12])}}>
										{(values)=> {
											return (<View>
														<Icon name={item.icon} color={'#fff'} size={28} style={{alignSelf: 'center', width: 28, height: 28, bottom: 24, transform: [{scale: values.x}], opacity: (values.x - 0.2)}} />
														<Text style={{textAlign: 'center', transform: [{scale: values.x}], bottom: 14, color: '#fff', fontSize: 12, opacity: (values.x - 0.2)}}>{item.title}</Text>
													</View>);
										}}
									</Motion>
									</View>
								</TouchableWithoutFeedback>);
					})}
				</View>);
	}
}
