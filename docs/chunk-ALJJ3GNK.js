import{a as v}from"./chunk-KQG2W6WI.js";import{a as p}from"./chunk-73IQ5QRE.js";import{a as u}from"./chunk-NUIUNSV6.js";import{a as V}from"./chunk-PCGJZOHJ.js";import{a as m}from"./chunk-Q46HA5EA.js";import{a as s}from"./chunk-R33FLU7O.js";import{a as n}from"./chunk-PFCTJBMZ.js";import{a as d}from"./chunk-RQSTML4A.js";import{a as i,b as c}from"./chunk-ZZH7MXOS.js";import{a as r}from"./chunk-H27XTJZE.js";import{a}from"./chunk-DFR44CAS.js";import{a as l}from"./chunk-6U7JQFO4.js";import{a as f}from"./chunk-JKWOWIVX.js";import{a as e}from"./chunk-L3UYHT7M.js";var o="outlineVertexShader",x=`attribute vec3 position;attribute vec3 normal;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
uniform float offset;
#include<instancesDeclaration>
uniform mat4 viewProjection;
#ifdef ALPHATEST
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;vec3 normalUpdated=normal;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
vec3 offsetPosition=positionUpdated+(normalUpdated*offset);
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(offsetPosition,1.0);gl_Position=viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
}
`;e.ShadersStore[o]||(e.ShadersStore[o]=x);var h=[r,i,m,s,a,n,p,u,V,d,l,c,f,v];for(let t of h)e.IncludesShadersStore[t.name]||(e.IncludesShadersStore[t.name]=t.shader);var j={name:o,shader:x};export{j as a};
