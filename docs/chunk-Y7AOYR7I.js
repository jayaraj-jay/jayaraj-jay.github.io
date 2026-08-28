import{a as r}from"./chunk-L3UYHT7M.js";import"./chunk-WSRQPLLG.js";var o="oitFinalSimpleBlendPixelShader",t=`var uFrontColor: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var fragCoord: vec2i=vec2i(fragmentInputs.position.xy);var frontColor: vec4f=textureLoad(uFrontColor,fragCoord,0);fragmentOutputs.color=frontColor;}
`;r.ShadersStoreWGSL[o]||(r.ShadersStoreWGSL[o]=t);var n={name:o,shader:t};export{n as oitFinalSimpleBlendPixelShaderWGSL};
