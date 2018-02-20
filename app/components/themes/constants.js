//responsive size define for bootstrap
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { StatusBar, Platform } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const Constants = {
    Navbar_Height : 45,
    Statusbar_Height : STATUSBAR_HEIGHT,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    Marin: responsiveWidth(1),
  	Font: responsiveFontSize(0.1),
}

export default Constants;
