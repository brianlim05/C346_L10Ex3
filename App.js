
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList, Image,Button} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function App() {

    //Exercise 3
    const datasource = [
        {data:[
                {key: 'Pikachu', pic:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_173-2x.png'},
                {key: 'Zapdos',  pic:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_202-2x.png'},
            ],
            title: "Electric", bgcolor:"yellow", icon:"bolt"},
        {data:[
                {key: 'Blastoise', pic:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_200-2x.png'},
                {key: 'Psyduck', pic:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_175-2x.png'},
            ],
            title:"Water", bgcolor:"blue", icon:"water"},
        {data:[
                {key: 'Charizard', pic:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_199-2x.png'},
                {key: 'Ninetales', pic:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_186-2x.png'},
            ],
            title:"Fire", bgcolor:"red", icon:"fire"},
    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}>
                <Text style={styles.textStyle}>{item.key}</Text>
                <Image source={{ uri: item.pic }} style={styles.image} />
            </TouchableOpacity>
        );
    };


    return (

        <View style={{marginTop: 40}}>
            <Button title="Add Pokemon" onPress={() => {}} />
            <SectionList contentContainerStyle={{padding:10}}
                         sections={datasource}
                         renderItem={renderItem}
                         renderSectionHeader={({section:{title, bgcolor,icon}}) => (
                             <Text style={[styles.headerText, {backgroundColor:bgcolor}]}>
                                 <FontAwesome6 name={icon} size={20} /> {title}
                             </Text>
                         )}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        flexDirection: 'row',
        height:300,
        backgroundColor: 'lightblue',

    },
    textStyle: {
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginLeft:70,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image:{
        width:250,
        height:250,
        resizeMode:'contain',
        alignSelf: 'center',
        marginLeft:20,
    },
});
