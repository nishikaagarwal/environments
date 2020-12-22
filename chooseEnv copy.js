import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, CheckBox,  TouchableOpacity, SafeAreaView} from "react-native";
import Constants from 'expo-constants';

const Data = [
    {
      id: 1,
      first_name: 'Photography',
    },
    {
      id: 2,
      first_name: 'Art',
    },
    {
      id: 3,
      first_name: 'Theatre',
    },
    {
      id: 4,
      first_name: 'Singing',
    },
    {
      id: 5,
      first_name: 'Dance',
    },
    
  ];
import { Card } from 'react-native-paper';

export default class chooseEnv extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          selectedItem: null,
          renderData:Data
        };
    }
    
    onPressHandler(id) {
        let renderData=[...this.state.renderData];
        for(let data of renderData){
          if(data.id==id){
            data.selected=(data.selected==null)?true:!data.selected;
            break;
          }
        }
        this.setState({renderData});
      }

      /*onClick = () => {
        const { data } = this.state;
        const listSelected = data.filter(data.selected == true);
        console.log('listSelected:', listSelected);
        let contentAlert = '';
        listSelected.forEach(e=>{
          contentAlert = contentAlert + e.original_title + '\n';
        })
        Alert.alert(contentAlert)
      }*/

      
    render() {
        return (
            <View style={styles.container}>
             
              <View style={styles.userNameStack}>
                <Text style={styles.userName}>User name</Text>
                <Text style={styles.manipal}>Manipal</Text>
              </View>
            
            <Text style={styles.loremIpsum}>CHOOSE YOUR INTERESTS</Text>
           
          <View>
           <FlatList
             //horizontal={true}
             data={this.state.renderData}
             keyExtractor={item => item.id.toString()}
             showsHorizontalScrollIndicator={false}
             renderItem={({ item }) => (
               <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
                 <Card
                   style={
                     item.selected==true
                       ? {
                           padding: 10,
                           borderRadius: 5,
                           backgroundColor: '#F3F8FF',
                         }
                       : {
                           padding: 10,
                           borderRadius: 5,
                           backgroundColor: '#E1E2E4',
                         }
                   }>
                   <Text>{item.first_name}</Text>
                 </Card>
               </TouchableOpacity>
             )}
           />
           </View>
           
          <TouchableOpacity style={[styles.SUButton, this.props.style, styles.materialButtonPrimary]}
            onPress={() => {this.onClick(); }}>
          <Text style={styles.SUButtonText}>Select</Text>
          </TouchableOpacity>
         
         </View>
        
        );
      }
    }

    
      
      const styles = StyleSheet.create({
        container: {
          flex: 1
        },
    
        userName: {
          top: 0,
          left: 0,
          position: "absolute",
          fontFamily: "roboto-regular",
          color: "#121212",
          height: 28,
          width: 102,
          fontSize: 20
        },
        manipal: {
          top: 26,
          left: 0,
          position: "absolute",
          fontFamily: "roboto-regular",
          color: "rgba(125,124,124,1)",
          height: 16,
          width: 62
        },
        userNameStack: {
          width: 102,
          height: 42,
          marginLeft: 14
        },
        
     
        loremIpsum: {
          fontFamily: "roboto-500",
          color: "#121212",
          height: 19,
          width: 174,
          marginTop: -81,
          marginLeft: 102
        },
        materialButtonPrimary: {
          height: 50,
          width: 258,
          backgroundColor: "rgba(0,106,255,1)",
          borderRadius: 30,
          overflow: "visible",
          marginTop: 61,
          alignSelf: 'center'
      
        },
        SUButton: {
          backgroundColor: "#2196F3",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 2,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowOpacity: 0.35,
          shadowRadius: 5,
          elevation: 2,
          minWidth: 88,
          paddingLeft: 16,
          paddingRight: 16
        },
        SUButtonText: {
          color: "#fff",
          fontSize: 14
        }
       
      });
      
      