import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: "hidden",
        borderRadius:8 ,
    },

    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 200,
    },
    imageLogo: {
        flex: 1,
        width: "65%",
        resizeMode:"contain"
    },
    dividerContainer: {
        alignItems: "center",
        marginVertical:10
    },
    divider: {
        alignItems: "center",
        height: 1,
        width:"80%",
        backgroundColor: "#01A6B3",
    },
    carBrand: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 18,
        fontStyle:"italic",
    },
    carName: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        textAlign:"center"
    },
    image: {
        flex: 1,
        marginTop: 10,
        width: "100%",
        height: "100%",
    },
    priceLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom:10,
        marginTop:10
    },
    priceLabel: {
        color: "#fff",
        fontSize:22,
    }
});