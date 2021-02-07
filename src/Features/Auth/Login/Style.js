import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ED1D25'
    },
    wrapper: {
        
    },
    wrapperLogo: {
        alignItems: 'center',
    },
    logo: {
        height: 200,
        width: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: 100
    },
    control: {
        marginTop: 50,
        paddingLeft: 20,
        paddingRight: 20
    },
    form: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    textBoxIcon: {
        marginRight: 10,
        color: '#FFFFFF',
    },
    inputLabel: {
        color: '#212121',
    },
    whiteText: {
        color: '#FFFFFF',
    }
});

export default styles;