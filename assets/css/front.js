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
        "backgroundPosition": "center",
        "minHeight": 100 * vh,
        "minWidth": 100 * vw,
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "home divcontent h1": {
        "marginTop": 100
    },
    "a": {
        "marginBottom": 100
    },
    "home divcontent:nth-child(2)": {
        "backgroundImage": "url(../img/sunset.jpg)"
    },
    "home divcontent:nth-child(3)": {
        "backgroundImage": "url(../img/flag.jpg)"
    },
    "home divcontent:nth-child(4)": {
        "backgroundImage": "url(../img/city.jpg)"
    },
    "home divcontent:nth-child(5)": {
        "backgroundImage": "url(../img/crane.jpg)"
    },
    "home divcontent:nth-child(6)": {
        "backgroundImage": "url(../img/water.jpg)"
    },
    "home divcontent:nth-child(7)": {
        "backgroundImage": "url(../img/plane.jpg)"
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
        "marginBottom": 100,
        "marginLeft": 20,
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "borderRadius": 3
    },
    "home content textbox h3": {
        "color": "#000"
    },
    "home content textbox p:first-child": {
        "marginTop": 0
    },
    "home content textbox p:last-child": {
        "marginBottom": 0
    },
    "home content textbox pending": {
        "textAlign": "center"
    },
    "home content textbox iframemap": {
        "height": 450,
        "width": "100%"
    },
    "home content textbox divcollage": {
        "display": "flex",
        "justifyContent": "center",
        "flexFlow": "wrap",
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0
    },
    "home content textbox collage img": {
        "width": 180,
        "border": "5px solid #fff",
        "boxShadow": "0px 0px 30px #aaa",
        "transform": "rotate(5deg)"
    },
    "home content textbox collage img:nth-child(2)": {
        "transform": "rotate(-8deg)"
    },
    "home content textbox collage img:nth-child(3)": {
        "transform": "rotate(-3deg)"
    },
    "home content textbox collage img:nth-child(4)": {
        "transform": "rotate(-7deg)"
    },
    "home content textbox iframevideo": {
        "height": 337,
        "width": "100%"
    }
});