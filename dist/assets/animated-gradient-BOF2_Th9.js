import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{Nt as t,Ot as n,kt as r}from"./vendor-core-NosTaDvW.js";import{c as i}from"./vendor-framer-CiD7ubuY.js";var a=e(t(),1);function o(...e){return n(r(e))}var s=i(),c=class extends a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){return this.state.hasError?this.props.fallback:this.props.children}};function l({className:e}){return(0,s.jsx)(`div`,{className:o(`bg-gradient-to-r from-emerald-900 to-black`,e)})}var u={Checks:0,Stripes:1,Edge:2},d={Aurora:{color1:`#0a001a`,color2:`#1a0b2e`,color3:`#f20089`,rotation:-45,proportion:60,scale:.6,speed:15,distortion:40,swirl:80,swirlIterations:10,softness:100,offset:200,shape:`Edge`,shapeSize:50},Oceanic:{color1:`#000814`,color2:`#001d3d`,color3:`#00b4d8`,rotation:0,proportion:70,scale:.4,speed:10,distortion:15,swirl:50,swirlIterations:12,softness:80,offset:150,shape:`Checks`,shapeSize:30},Amber:{color1:`#140c00`,color2:`#4a2500`,color3:`#f57c00`,rotation:120,proportion:80,scale:.8,speed:20,distortion:25,swirl:60,swirlIterations:8,softness:90,offset:500,shape:`Stripes`,shapeSize:40},Toxic:{color1:`#050d05`,color2:`#0a240a`,color3:`#39ff14`,rotation:-90,proportion:55,scale:.5,speed:25,distortion:60,swirl:100,swirlIterations:15,softness:70,offset:-100,shape:`Edge`,shapeSize:20},Ghost:{color1:`#0a0a0a`,color2:`#1c1c1c`,color3:`#a3a3a3`,rotation:45,proportion:50,scale:.3,speed:8,distortion:10,swirl:30,swirlIterations:5,softness:100,offset:0,shape:`Checks`,shapeSize:60}};function f({config:e={preset:`Aurora`},noise:t,radius:n=`0px`,style:r,className:i}){let f=(0,a.useRef)(null),m=(0,a.useRef)(null),g=(0,a.useRef)(void 0),_=(0,a.useRef)(0),[v,y]=(0,a.useState)(!1),[b,x]=(0,a.useState)(!1);(0,a.useEffect)(()=>(y(!0),()=>y(!1)),[]);let S=(0,a.useMemo)(()=>{if(e.preset===`custom`)return{color1:e.color1,color2:e.color2,color3:e.color3,rotation:e.rotation??0,proportion:e.proportion??35,scale:e.scale??1,speed:e.speed??25,distortion:e.distortion??12,swirl:e.swirl??80,swirlIterations:e.swirlIterations??10,softness:e.softness??100,offset:e.offset??0,shape:e.shape??`Checks`,shapeSize:e.shapeSize??10};let t=d[e.preset]||d.Aurora;return{...t,speed:e.speed??t.speed}},[e]);return(0,a.useEffect)(()=>{if(b)return;let e=f.current,t=m.current;if(!(!e||!t||!v))try{let n=e.getContext(`webgl2`,{premultipliedAlpha:!0,alpha:!0,antialias:!0});if(!n){x(!0);return}let r=n.createShader(n.VERTEX_SHADER);if(n.shaderSource(r,`#version 300 es
    in vec4 a_position;
    void main() {
      gl_Position = a_position;
    }`),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS)){n.deleteShader(r),x(!0);return}let i=n.createShader(n.FRAGMENT_SHADER);if(n.shaderSource(i,h),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS)){n.deleteShader(r),n.deleteShader(i),x(!0);return}let a=n.createProgram();if(n.attachShader(a,r),n.attachShader(a,i),n.linkProgram(a),!n.getProgramParameter(a,n.LINK_STATUS)){n.deleteProgram(a),n.deleteShader(r),n.deleteShader(i),x(!0);return}n.useProgram(a);let o=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),n.STATIC_DRAW);let s=n.getAttribLocation(a,`a_position`);n.enableVertexAttribArray(s),n.vertexAttribPointer(s,2,n.FLOAT,!1,0,0);let c={u_time:n.getUniformLocation(a,`u_time`),u_resolution:n.getUniformLocation(a,`u_resolution`),u_pixelRatio:n.getUniformLocation(a,`u_pixelRatio`),u_scale:n.getUniformLocation(a,`u_scale`),u_rotation:n.getUniformLocation(a,`u_rotation`),u_color1:n.getUniformLocation(a,`u_color1`),u_color2:n.getUniformLocation(a,`u_color2`),u_color3:n.getUniformLocation(a,`u_color3`),u_proportion:n.getUniformLocation(a,`u_proportion`),u_softness:n.getUniformLocation(a,`u_softness`),u_shape:n.getUniformLocation(a,`u_shape`),u_shapeScale:n.getUniformLocation(a,`u_shapeScale`),u_distortion:n.getUniformLocation(a,`u_distortion`),u_swirl:n.getUniformLocation(a,`u_swirl`),u_swirlIterations:n.getUniformLocation(a,`u_swirlIterations`)},l=()=>{let r=t.clientWidth,i=t.clientHeight,a=window.devicePixelRatio||1;e.width=r*a,e.height=i*a,e.style.width=`${r}px`,e.style.height=`${i}px`,n.viewport(0,0,e.width,e.height)};l();let d=new ResizeObserver(l);d.observe(t),_.current=performance.now();let f=t=>{let r=(t-_.current)/1e3,i=S.speed/100*5;n.uniform1f(c.u_time,r*i+S.offset*.01),n.uniform2f(c.u_resolution,e.width,e.height),n.uniform1f(c.u_pixelRatio,window.devicePixelRatio||1),n.uniform1f(c.u_scale,S.scale),n.uniform1f(c.u_rotation,S.rotation*Math.PI/180);let a=p(S.color1),o=p(S.color2),s=p(S.color3);n.uniform4f(c.u_color1,a[0],a[1],a[2],a[3]),n.uniform4f(c.u_color2,o[0],o[1],o[2],o[3]),n.uniform4f(c.u_color3,s[0],s[1],s[2],s[3]),n.uniform1f(c.u_proportion,S.proportion/100),n.uniform1f(c.u_softness,S.softness/100),n.uniform1f(c.u_shape,u[S.shape]),n.uniform1f(c.u_shapeScale,S.shapeSize/100),n.uniform1f(c.u_distortion,S.distortion/50),n.uniform1f(c.u_swirl,S.swirl/100),n.uniform1f(c.u_swirlIterations,S.swirl===0?0:S.swirlIterations),n.drawArrays(n.TRIANGLES,0,6),g.current=requestAnimationFrame(f)};return g.current=requestAnimationFrame(f),()=>{g.current!==void 0&&cancelAnimationFrame(g.current),d.disconnect(),n.deleteProgram(a),n.deleteShader(r),n.deleteShader(i),n.deleteBuffer(o)}}catch{x(!0);return}},[b,v,S]),b?(0,s.jsx)(l,{className:o(`absolute inset-0 overflow-hidden`,i)}):(0,s.jsx)(c,{fallback:(0,s.jsx)(l,{className:o(`absolute inset-0 overflow-hidden`,i)}),children:(0,s.jsxs)(`div`,{ref:m,className:o(`absolute inset-0 overflow-hidden`,i),style:{borderRadius:n,...r},children:[(0,s.jsx)(`canvas`,{ref:f,style:{display:`block`,width:`100%`,height:`100%`}}),t&&t.opacity>0&&(0,s.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMCCgkGBAVJOAVJAAAASklEQVQ4y2NgGAWjYBSMglEwCgY/YGRgZBQUYmJiZGQEkYwMjIyMgoKCjIyMIJKBgRFIMjIyAklGRkYGRkFBYEcwMDIyMjAOUQAA1I4HwVwZAkYAAAAASUVORK5CYII=")`,backgroundSize:(t.scale??1)*200,backgroundRepeat:`repeat`,opacity:t.opacity/2,pointerEvents:`none`}})]})})}function p(e){let t=0,n=0,r=0,i=1;if(e.startsWith(`rgba(`)){let a=e.slice(5,-1).split(`,`);t=parseInt(a[0]??`0`)/255,n=parseInt(a[1]??`0`)/255,r=parseInt(a[2]??`0`)/255,i=parseFloat(a[3]??`1`)}else if(e.startsWith(`rgb(`)){let i=e.slice(4,-1).split(`,`);t=parseInt(i[0]??`0`)/255,n=parseInt(i[1]??`0`)/255,r=parseInt(i[2]??`0`)/255}else if(e.startsWith(`hsla(`)||e.startsWith(`hsl(`)){let a=e.startsWith(`hsla(`),o=e.slice(a?5:4,-1).split(`,`),s=parseFloat(o[0]??`0`)/360,c=parseFloat(o[1]??`0`)/100,l=parseFloat(o[2]??`0`)/100;i=a?parseFloat(o[3]??`1`):1,[t,n,r]=m(s,c,l)}else if(e.startsWith(`#`)){let a=e.slice(1);a.length===3?(t=parseInt(a.charAt(0)+a.charAt(0),16)/255,n=parseInt(a.charAt(1)+a.charAt(1),16)/255,r=parseInt(a.charAt(2)+a.charAt(2),16)/255):a.length>=6&&(t=parseInt(a.slice(0,2),16)/255,n=parseInt(a.slice(2,4),16)/255,r=parseInt(a.slice(4,6),16)/255,a.length===8&&(i=parseInt(a.slice(6,8),16)/255))}return[t,n,r,i]}function m(e,t,n){let r,i,a;if(t===0)r=i=a=n;else{let o=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;r=o(c,s,e+1/3),i=o(c,s,e),a=o(c,s,e-1/3)}return[r,i,a]}var h=`#version 300 es
precision highp float;

uniform float u_time;
uniform float u_pixelRatio;
uniform vec2 u_resolution;

uniform float u_scale;
uniform float u_rotation;
uniform vec4 u_color1;
uniform vec4 u_color2;
uniform vec4 u_color3;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;

out vec4 fragColor;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
    vec3 color1 = c1.rgb * c1.a;
    vec3 color2 = c2.rgb * c2.a;
    vec3 color3 = c3.rgb * c3.a;

    float r1 = smoothstep(.0 + .35 * edgesWidth, .7 - .35 * edgesWidth + .5 * edge_blur, mixer);
    float r2 = smoothstep(.3 + .35 * edgesWidth, 1. - .35 * edgesWidth + edge_blur, mixer);

    vec3 blended_color_2 = mix(color1, color2, r1);
    float blended_opacity_2 = mix(c1.a, c2.a, r1);

    vec3 c = mix(blended_color_2, color3, r2);
    float o = mix(blended_opacity_2, c3.a, r2);
    return vec4(c, o);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    float t = .5 * u_time;

    float noise_scale = .0005 + .006 * u_scale;

    uv -= .5;
    uv *= (noise_scale * u_resolution);
    uv = rotate(uv, u_rotation * .5 * PI);
    uv /= u_pixelRatio;
    uv += .5;

    float n1 = noise(uv * 1. + t);
    float n2 = noise(uv * 2. - t);
    float angle = n1 * TWO_PI;
    uv.x += 4. * u_distortion * n2 * cos(angle);
    uv.y += 4. * u_distortion * n2 * sin(angle);

    float iterations_number = ceil(clamp(u_swirlIterations, 1., 30.));
    for (float i = 1.; i <= iterations_number; i++) {
        uv.x += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1.5 * uv.y);
        uv.y += clamp(u_swirl, 0., 2.) / i * cos(t + i * 1. * uv.x);
    }

    float proportion = clamp(u_proportion, 0., 1.);

    float shape = 0.;
    float mixer = 0.;
    if (u_shape < .5) {
      vec2 checks_shape_uv = uv * (.5 + 3.5 * u_shapeScale);
      shape = .5 + .5 * sin(checks_shape_uv.x) * cos(checks_shape_uv.y);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else if (u_shape < 1.5) {
      vec2 stripes_shape_uv = uv * (.25 + 3. * u_shapeScale);
      float f = fract(stripes_shape_uv.y);
      shape = smoothstep(.0, .55, f) * smoothstep(1., .45, f);
      mixer = shape + .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
    } else {
      float sh = 1. - uv.y;
      sh -= .5;
      sh /= (noise_scale * u_resolution.y);
      sh += .5;
      float shape_scaling = .2 * (1. - u_shapeScale);
      shape = smoothstep(.45 - shape_scaling, .55 + shape_scaling, sh + .3 * (proportion - .5));
      mixer = shape;
    }

    vec4 color_mix = blend_colors(u_color1, u_color2, u_color3, mixer, 1. - clamp(u_softness, 0., 1.), .01 + .01 * u_scale);

    fragColor = vec4(color_mix.rgb, color_mix.a);
}
`;export{f as AnimatedGradient,f as default};