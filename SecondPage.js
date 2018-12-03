/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    SectionList,
    TouchableOpacity
} from 'react-native';

import sectionData from "./sectionData";
import{StackNavigator} from 'react-navigation'

var navigation = null;
type Props = {};
export default class demoList extends Component<Props> {


    constructor(props) {
        super(props);
        navigation = this.props.navigation;
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged:(s1,s2) => s1 !== s2,
        })

        this.state = {
            dataSource: ds.cloneWithRowsAndSections(sectionData)
        }
    }
    static navigationOptions = ({navigation}) => ({
        headerTitle: `通讯录`,
    });
    componentDidMount(){
        this.getNet();
    }

    getNet(){
        fetch('http://212.64.25.41:8080/listview/sectionData.json')//请求地址
            .then((response) => {
                if (response.ok){
                    return response.json();
                }
            })//取数据
            .then((responseData) => {//处理数据
                //通过setState()方法重新渲染界面
                let ds = new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2,
                    sectionHeaderHasChanged:(s1,s2) => s1 !== s2,
                })
                this.setState({
                    dataSource: ds.cloneWithRowsAndSections(responseData)
                })
            })
            .catch((error) => {
                console.warn(error);
            }).done();
    }



    render() {
      const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderSectionHeader={this._renderSectionHeader}
                />
            </View>
        );
    }

    _renderRow(rowData) {
        return (
            <TouchableOpacity onPress={
                ()=>{
                    //跳转页面
                    navigation.navigate('Second',{icon:rowData.icon,name:rowData.name,type:rowData.type})
                }
            }>
            <View style={{borderBottomWidth: 1, flexDirection: 'row'}}>
                <View style={{width: 35, height: 35, margin: 10}}>
                    <Image
                        style={{width: '100%', height: '100%'}}
                        source={{uri:rowData.icon}}
                    />
                </View>
                <View>
                    <Text style={styles.listNameStyle}>{rowData.name}</Text>
                    <Text style={styles.listTextStyle}>{rowData.type}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
    _renderSectionHeader(sectionData,sectionID){
        return(
            <View style={{backgroundColor:'lightgray'}}>
                <Text style={{fontSize:20,paddingLeft:15}}>{sectionID}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    listTextStyle: {
        fontSize: 14,
        paddingTop: 3,
        paddingBottom: 5,
    },
    listNameStyle: {
        fontSize: 20,
    }
});
