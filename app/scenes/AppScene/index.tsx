/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Alert,
  Button,
  Picker,
  Switch,
  ActivityIndicator,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View>
    <Text style={{color: 'red'}}>{title}</Text>
  </View>
);

@observer
class AppScene extends React.Component {
  @observable selectedText: any;
  @observable isEnabled: boolean = false;
  changeText = (text: string) => {
    Alert.alert(text);
  };

  assignSelectedText = (text: string) => {
    Alert.alert(text);
  };

  toggleSwitch = () => {
    const stringValue = this.isEnabled ? 'true' : 'false';
    Alert.alert(stringValue);
    this.isEnabled = !this.isEnabled;
  };

  renderItem = ({item}) => {
    return <Item title={item.title} />;
  };

  render() {
    return (
      <ScrollView horizontal={true}>
        <View style={styles.sectionContainer}>
          <Text>Raja</Text>
          <Button
            color="red"
            onPress={() => {
              Alert.alert('raja');
            }}
            title="Press me"
          />
          <ActivityIndicator size="large" color="green" />
          <Picker
            style={{height: 140, width: 150}}
            onValueChange={text => {
              this.assignSelectedText(text);
            }}>
            <Picker.Item label="raja" value="raja" />
            <Picker.Item label="the" value="the" />
            <Picker.Item label="king" value="king" />
          </Picker>
          <Switch
            trackColor={{false: 'red', true: 'green'}}
            thumbColor={this.isEnabled ? 'red' : 'black'}
            ios_backgroundColor="red"
            onValueChange={this.toggleSwitch}
            value={this.isEnabled}
          />
          <FlatList data={DATA} renderItem={this.renderItem} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.red,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  rajaTheKingColor: {
    backgroundColor: 'darkgreen',
    color: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default AppScene;
