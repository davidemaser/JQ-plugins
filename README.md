# JQ PLUGINS
## jQuery plugins

A repository of assorted jQuery plugins I've created. Take a look at the annotations in each plugin
to check usage.

### dmFilters
A plugin that lets you apply different css filters to page elements. Filters can be applied to an element or bound to an event handler.
#### Options 

- Mode : Can be either 'style', 'click', or 'hover'. The style option applies the filters to a page element on load. The click option binds the style to the click handler of the parent item. The hover option binds the style to the mouseover handler of the parent item. The default mode is 'style'.

- Transition : This is the transition delay applied to the parent element. It can be numeric in the format 0.5. Do not add the s.

- Blur : Applies a Gaussian blur to the element. The value of ‘radius’ defines the value of the standard deviation to the Gaussian function, or how many pixels on the screen blend into each other, so a larger value will create more blur. If no parameter is provided, then a value 0 is used. The parameter is specified as a CSS length, but does not accept percentage values.

- Brightness : Applies a linear multiplier to the element, making it appear more or less bright. A value of 0% will create an image that is completely black. A value of 100% leaves the input unchanged. Other values are linear multipliers on the effect. Values of an amount over 100% are allowed, providing brighter results. If the "amount" parameter is missing, a value of 100% is used. It can be numeric without the percentage symbol.

- Contrast : Adjusts the contrast of the element. A value of 0% will create an image that is completely black. A value of 100% leaves the input unchanged. Values of amount over 100% are allowed, providing results with less contrast. It can be numeric without the percentage symbol.

- Drop Shadow : Applies a drop shadow effect to the element. A drop shadow is effectively a blurred, offset version of the input elements alpha mask drawn in a particular color, composited below the image. The function accepts a parameter of type (defined in CSS3 Backgrounds), with the exception that the ‘inset’ keyword is not allowed.

> This function is similar to the more established box-shadow property; the difference is that with filters, some browsers provide hardware acceleration for better performance.

> Use the value 16px 16px 10px rgba(0,0,0,1)

- Gray Scale : Converts the element to grayscale. The value of “amount” defines the proportion of the conversion. A value of 100% is completely grayscale. A value of 0% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. If the “amount” parameter is missing, a value of 100% is used. Negative values are not allowed.

- Hue Rotate : Applies a hue rotation on the element. The value of “angle” defines the number of degrees around the color circle the input samples will be adjusted. A value of 0deg leaves the input unchanged. If the “angle” parameter is missing, a value of 0deg is used. Maximum value is 360deg. It can be numeric without the DEG.

- Invert : Inverts the samples in the element. The value of “amount” defines the proportion of the conversion. A value of 100% is completely inverted. A value of 0% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. If the “amount” parameter is missing, a value of 100% is used. Negative values are not allowed.

- Opacity : Applies transparency to the element. The value of “amount” defines the proportion of the conversion. A value of 0% is completely transparent. A value of 100% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. This is equivalent to multiplying the input image samples by amount. If the “amount” parameter is missing, a value of 100% is used. This function is similar to the more established opacity property; the difference is that with filters, some browsers provide hardware acceleration for better performance. Negative values are not allowed.

- Saturate : Saturates the element. The value of “amount” defines the proportion of the conversion. A value of 0% is completely un-saturated. A value of 100% leaves the input unchanged. Other values are linear multipliers on the effect. Values of amount over 100% are allowed, providing super-saturated results. If the “amount” parameter is missing, a value of 100% is used. Negative values are not allowed.

- Sepia : Converts the element to sepia. The value of “amount” defines the proportion of the conversion. A value of 100% is completely sepia. A value of 0 leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. If the “amount” parameter is missing, a value of 100% is used. Negative values are not allowed.

#### Calling The Function
``````javascript
$("element").filterize({
    blur:2,
    brightness:2,
    sepia:1
 });
 
