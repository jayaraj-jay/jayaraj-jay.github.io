import{a as n}from"./chunk-665C4WVF.js";import{a as o}from"./chunk-ATQGJLZO.js";import{a as s}from"./chunk-3O5R4FAK.js";import{a as e}from"./chunk-L3UYHT7M.js";var i="imageProcessingPixelShader",t=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 result=texture2D(textureSampler,vUV);result.rgb=max(result.rgb,vec3(0.));
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result.rgb=toLinearSpace(result.rgb);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
gl_FragColor=result;}`;e.ShadersStore[i]||(e.ShadersStore[i]=t);var a=[n,s,o];for(let r of a)e.IncludesShadersStore[r.name]||(e.IncludesShadersStore[r.name]=r.shader);var u={name:i,shader:t};export{u as a};
