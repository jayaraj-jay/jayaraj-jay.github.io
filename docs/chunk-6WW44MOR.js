import{a as e}from"./chunk-L3UYHT7M.js";var r="fresnelFunction",o=`#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}
#endif
`;e.IncludesShadersStore[r]||(e.IncludesShadersStore[r]=o);var t={name:r,shader:o};export{t as a};
