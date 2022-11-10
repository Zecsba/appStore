import { StyleSheet } from 'react-native'
import colors from '../../constants/themes/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    containerList: {
        flex: 1,
        backgroundColor: "fff",
    },
    footer: {
        borderTopColor: colors.primary,
        bordetTopWidth: 1,
        paddingVertical: 10,
        marginBottom: 5,
        marginHorizontal: 10
    },
    buttonConfirm: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"
    },
    disabledButtonConfirm: {
        backgroundColor: colors.gray,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"
    }
    ,
    textButtonConfirm: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalTitle: {
        fontFamily: "Lato-Regular",
        fontSize: 14
    },
    total: {
        fontFamily: "Lato-Regular",
        fontSize: 14
    },
}) 