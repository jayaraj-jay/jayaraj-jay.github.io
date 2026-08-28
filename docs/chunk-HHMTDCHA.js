import{a as w}from"./chunk-TPWOKQVZ.js";import{a as N}from"./chunk-OVAS5R52.js";import{a as D}from"./chunk-VC7AOFEK.js";import{a as M}from"./chunk-ZTCEZ5U3.js";import{a as p}from"./chunk-C5AI2TBB.js";import{a as v}from"./chunk-NUIUNSV6.js";import{a as V}from"./chunk-PCGJZOHJ.js";import{a as h}from"./chunk-3O5R4FAK.js";import{a as u}from"./chunk-Q46HA5EA.js";import{a as x}from"./chunk-R33FLU7O.js";import{a as m}from"./chunk-RQSTML4A.js";import{a as l,b as f}from"./chunk-ZZH7MXOS.js";import{a as d}from"./chunk-H27XTJZE.js";import{a as c}from"./chunk-DFR44CAS.js";import{a as s}from"./chunk-6U7JQFO4.js";import{a as S}from"./chunk-JKWOWIVX.js";import{a as e}from"./chunk-L3UYHT7M.js";var o="shadowMapVertexDeclaration",U=`#include<sceneVertexDeclaration>
#include<meshVertexDeclaration>
`;e.IncludesShadersStore[o]||(e.IncludesShadersStore[o]=U);var b={name:o,shader:U};var a="shadowMapUboDeclaration",T=`layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;e.IncludesShadersStore[a]||(e.IncludesShadersStore[a]=T);var A={name:a,shader:T};var t="shadowMapVertexExtraDeclaration",I=`#if SM_NORMALBIAS==1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=I);var g={name:t,shader:I};var i="shadowMapVertexNormalBias",W=`#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);float sinNLSM=sqrt(1.0-ndlSM*ndlSM);float normalBiasSM=biasAndScaleSM.y*sinNLSM;worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;e.IncludesShadersStore[i]||(e.IncludesShadersStore[i]=W);var E={name:i,shader:W};var n="shadowMapVertexShader",L=`attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#endif
#include<helperFunctions>
#include<__decl__shadowMapVertex>
#ifdef ALPHATEXTURE
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normWorldSM=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vec3 vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vec3 vNormalW=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
gl_Position=viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
}`;e.ShadersStore[n]||(e.ShadersStore[n]=L);var P=[d,l,u,x,h,D,N,b,p,M,A,g,c,v,V,m,s,f,E,w,S];for(let r of P)e.IncludesShadersStore[r.name]||(e.IncludesShadersStore[r.name]=r.shader);var pe={name:n,shader:L};export{pe as a};
