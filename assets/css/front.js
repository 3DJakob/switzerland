import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "home divcontent": {
        "backgroundImage": "url(../img/mountains.jpg)",
        "backgroundSize": "cover",
        "minHeight": 100 * vh,
        "minWidth": 100 * vw,
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "home divcontent :first-child": {
        "marginTop": 40
    },
    "home divcontent:nth-child(2)": {
        "backgroundImage": "url(../img/map.png)"
    },
    "home content h1": {
        "color": "#fff"
    },
    "home content h3": {
        "color": "#fff"
    },
    "home content a": {
        "color": "#fff",
        "fontSize": "30pt"
    },
    "home content divtextbox": {
        "maxWidth": 600,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "borderRadius": 3
    },
    "home content textbox p:first-child": {
        "marginTop": 0
    },
    "home content textbox p:last-child": {
        "marginBottom": 0
    }
});