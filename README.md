# beautify-qrcode

This project is derived from QRBTF
# QRBTF

URL: [qrbtf.com](https://qrbtf.com)

Chinese Introduction: [How to Create a Beautiful QR Code](https://mp.weixin.qq.com/s/_Oy9I9FqPXhfwN9IUhf6_g)

## Documentation

Online debugging [qrbtf.com](https://qrbtf.com)

### Usage

```javascript
// Include via script
<script src="./dist/beautifyQrcode.js"></script>;

const {
    encodeData,
    renderer25D,
    rendererRect,
    rendererRound,
    rendererRandRound,
    rendererDSJ,
    rendererRandRect,
    rendererImage,
    rendererResImage,
} = window.beautifyQrcode;
```
#### Using npm
```shell
npm i beautify-qrcode
```
```javascript
import {
    encodeData,
    renderer25D,
    rendererRect,
    rendererRound,
    rendererRandRound,
    rendererDSJ,
    rendererRandRect,
    rendererImage,
    rendererResImage,
} from 'beautify-qrcode';
/**
 * Generate QR code data
 * @param {Object} options
 * @param {String} options.text QR code content
 * @param {Number} [options.width]  SVG width, default 100%
 * @param {Number} [options.height] SVG height, default 100%
 * @param {Number} [options.correctLevel] Error correction level 1=>7% 0=>15% 3=>25% 2=>30%
 * @param {Boolean} [options.isSpace] Reserve space when generating content, default true
 */
const qrcode = encodeData({
    text: QRBTF_URL,
    correctLevel: 0,
});
/**
 * A1
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  Information point style 0=>Rectangle 1=>Circle, 2=>Random
 * @param {Number} [options.size] Information point scaling
 * @param {String} [options.opacity] Information point opacity
 * @param {String} [options.posType] Position point style 0=>Rectangle 1=>Circle 2=>Planet
 * @param {String} [options.otherColor] Information point color
 * @param {String} [options.posColor] Position point color
 * @return {String} SVG image
 */
const A1 = rendererRect(qrcode);
/**
 * A2
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  Information point style 0=>Rectangle 1=>Circle, 2=>Random
 * @param {Number} [options.size] Information point scaling
 * @param {String} [options.opacity] Information point opacity
 * @param {String} [options.posType] Position point style 0=>Rectangle 1=>Circle 2=>Planet
 * @param {String} [options.otherColor] Information point color
 * @param {String} [options.posColor] Position point color
 * @return {String} SVG image
 */
const A2 = rendererRound(qrcode);
/**
 * A3
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  Information point style 0=>Rectangle 1=>Circle, 2=>Random
 * @param {Number} [options.size] Information point scaling
 * @param {String} [options.opacity] Information point opacity
 * @param {String} [options.posType] Position point style 0=>Rectangle 1=>Circle 2=>Planet
 * @param {String} [options.otherColor] Information point color
 * @param {String} [options.posColor] Position point color
 * @return {String} SVG image
 */
const A3 = rendererRandRound(qrcode);
/**
 * sp1
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.width1]  x width
 * @param {Number} [options.width2]  Information point scaling
 * @param {Number} [options.width3]  Position point width
 * @param {String} [options.posType] Position point style 0=>Rectangle 1=>DSJ
 * @return {String} SVG image
 */
const sp1 = rendererDSJ(qrcode);
/**
 * sp2
 * @param {*} qrcode
 * @return {String} SVG image
 */
const sp2 = rendererRandRect(qrcode);
/**
 * B1
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.height]  Prism height
 * @param {Number} [options.height2] Position point prism height
 * @param {String} [options.upColor]  Top side color
 * @param {String} [options.leftColor] Left side color
 * @param {String} [options.rightColor] Right side color
 * @return {String} SVG image
 */
const B1 = renderer25D(qrcode);
/**
 * C1
 * @param {*} qrcode
 * @param {*} options
 * @param {String} [options.backgroudImage] Background image
 * @param {Number} [options.type] Information point style 0=>Rectangle 1=>Circle
 * @param {Number} [options.size] Information point scaling
 * @param {Number} [options.opacity] Information point opacity
 * @param {String} [options.otherColorDark] Information point dark color
 * @param {String} [options.otherColorLight] Information point light color
 * @param {Number} [options.posType]  // Position point style 0=>'Rectangle' 1=>'Circle' 2=>'Planet'
 * @param {String} [options.posColor]  // Position point color
 * @return {String} SVG image
 */
const C1 = rendererImage(qrcode, {
    backgroudImage: Rem,
});
/**
 * C2
 * @param {*} qrcode
 * @param {*} options
 * @param {String} options.backgroudImage Background image
 * @param {Number} options.contrast Contrast
 * @param {Number} options.exposure Exposure
 * @param {Number} options.alignType Small position point style 0=>'None' 1=>'White' 2=>'Black and White'
 * @param {Number} options.timingType Clock style 0=>'None' 1=>'White' 2=>'Black and White'
 * @param {String} options.otherColor Information point color
 * @param {String} options.posColor Position point color
 * @return {Promise<String>}  SVG image
 */
rendererResImage(qrcode, { backgroudImage: defaultResImage }).then((res) => {
    const C2 = res;
});

/**
 * SP_3
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.otherColor] Circle color
 * @param {String} [

options.posColor] Position point color
 */
const SP_3 = rendererCircle(qrcode);

/**
 * A_a1
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.type]  Connection direction 0=>Left and Right 1=>Up and Down 2=>Vertical and Horizontal 3=>Loop 4=>Upper Left to Lower Right 5=>Upper Right to Lower Left 6=>Cross
 * @param {String} [options.size] Connection thickness
 * @param {String} [options.opacity] Connection opacity
 * @param {String} [options.posType] Position point style 0=>Rectangle 1=>Circle 2=>Planet 3=>Rounded Rectangle
 * @param {String} [options.otherColor] Connection color
 * @param {String} [options.posColor] Position point color
 */
const A_a1 = rendererLine(qrcode);

/**
 * A_a2
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.type]  Connection direction 0=>Left and Right 1=>Up and Down 2=>Vertical and Horizontal 3=>Loop 4=>Upper Left to Lower Right 5=>Upper Right to Lower Left 7=>Cross
 * @param {String} [options.size] Connection thickness
 * @param {String} [options.opacity] Connection opacity
 * @param {String} [options.posType] Position point style 0=>Rectangle 1=>Circle 2=>Planet 3=>Rounded Rectangle
 * @param {String} [options.otherColor] Connection color
 * @param {String} [options.posColor] Position point color
 */
const A_a2 = rendererLine2(qrcode);

/**
 * A_b1
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  Information point style 0=>Rectangle 1=>Circle
 * @param {Number} [options.size] Interference function 0=>A 1=>B
 * @param {String} [options.opacity] Information point opacity
 * @param {String} [options.posType] Position point style 0=>Rectangle 1=>Circle 2=>Planet 3=>Rounded Rectangle
 * @param {String} [options.otherColor] Information point color
 * @param {String} [options.otherColor2] Information point color 2
 * @param {String} [options.posColor] Position point color
 */
const A_b1 = rendererFuncA(qrcode);
/**
 * A_b2
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  Information point style 0=>Rectangle 1=>Circle
 * @param {Number} [options.size] Interference function 1=>A 2=>B
 * @param {String} [options.opacity] Information point opacity
 * @param {String} [options.posType] Position point style 0=>Rectangle 1=>Circle 2=>Planet 3=>Rounded Rectangle
 * @param {String} [options.otherColor] Information point color
 * @param {String} [options.otherColor2] Information point color 2
 * @param {String} [options.posColor] Position point color
 */
const A_b2 = rendererFuncB(qrcode);
```

## WeChat Mini Program

-   rendererResImage may require adaptation for WeChat Mini Program's canvas.
-   WeChat Mini Program images need to be converted to base64 SVG for proper display.
-   rendererImage backgroudImage is the [xlink:href=] of SVG image, using WeChat Mini Program's temporary path can also be displayed.
-   Cax is not suitable for displaying some QR codes.
-   I haven't found a way to convert SVG to PNG or JPG for saving to the user's local device when using WeChat Mini Program. I use the Sharp library to perform the conversion on the server.

```html
    <image src="{{qrcode}}" mode="widthFix"></image>
```
```javascript
import { Base64 } from 'js-base64';
const base64Svg = rendererRect(qrcode, options);
const qrcode= `data:image/svg+xml;base64,` + Base64.encode(base64Svg);
```

I hope this helps!

```

## 支持 QRBTF

#### Paypal

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.me/ciaochaos)
