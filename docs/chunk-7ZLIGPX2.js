import{a as e}from"./chunk-L3UYHT7M.js";var i="volumetricLightScatteringPassPixelShader",r=`#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;
#endif
#if defined(ALPHATEST)
uniform sampler2D diffuseSampler;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#if defined(ALPHATEST)
vec4 diffuseColor=texture2D(diffuseSampler,vUV);if (diffuseColor.a<0.4)
discard;
#endif
gl_FragColor=vec4(0.0,0.0,0.0,1.0);}
`;e.ShadersStore[i]||(e.ShadersStore[i]=r);var f={name:i,shader:r};export{f as a};
