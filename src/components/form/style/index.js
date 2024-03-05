import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 30,
    },
    containerTitle:{
        marginBottom:10,
        padding:10,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#2068a3'
    },
    form:{
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        padding:10,
    },
    contentInput:{
        marginBottom: 16,
        justifyContent: 'center',
    }, 
    input:{
        borderWidth: 1,
        borderRadius:8,
        padding: 10,
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2068a3'
    }, 
    button:{
        width: '100%',
        height: 50,
        backgroundColor: '#2068a3',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    
    },
    buttonText:{
        fontSize: 20,
        color: '#fff'
    }, 
    titleScroll:{
        color: '#2068a3',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 16,
    }, 
    list:{
        flex: 1,
        padding:10,
    },

})

export default styles;