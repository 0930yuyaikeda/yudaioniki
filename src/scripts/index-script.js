'use strict';
// scroll events
window.addEventListener('scroll', () => {
    // setting let
    // setting window scroll
    let scrollPosition = window.scrollY;

    // get element
    let mainMessageTitle = document.getElementById("main_message_title");
    let mainMessage1 = document.getElementById("main_message1");
    let mainMessage2 = document.getElementById("main_message2");
    let mainMessage3 = document.getElementById("main_message3");
    let mainMessage4 = document.getElementById("main_message4");
    let mainMessage5 = document.getElementById("main_message5");
    let mainMessage6 = document.getElementById("main_message6");
    let mainMessage7 = document.getElementById("main_message7");
    let mainMessage8 = document.getElementById("main_message8");
    let mainMessage9 = document.getElementById("main_message9");
    let mainMessage10 = document.getElementById("main_message10");
    let mainMessage11 = document.getElementById("main_message11");
    let mainMessage12 = document.getElementById("main_message12");
    let mainMessage13 = document.getElementById("main_message13");
    let mainMessage14 = document.getElementById("main_message14");
    let mainMessage15 = document.getElementById("main_message15");
    let mainMessage16 = document.getElementById("main_message16");
    let profileImg = document.getElementById("profile_img");
    let profileString = document.getElementById("profile_string");
    let speakerService = document.getElementById("speaker_service");
    let communityService = document.getElementById("community_service");
    let sessionService = document.getElementById("session_service");
    let englishService = document.getElementById("english_service");
    let tourService = document.getElementById("tour_service");
    let otherService = document.getElementById("other_service");
    let serviceImg = document.getElementById("service_img");
    let serviceImgSrc1 = document.getElementById("service_img_src1");
    let serviceImgSrc2 = document.getElementById("service_img_src2");
    let serviceImgSrc3 = document.getElementById("service_img_src3");
    let serviceImgSrc4 = document.getElementById("service_img_src4");
    let serviceImgSrc5 = document.getElementById("service_img_src5");
    let serviceImgSrc6 = document.getElementById("service_img_src6");

    // window size
    let windowHight = window.outerHeight;

    // get element offset top
    let mainMessageTitleTop = (mainMessageTitle.offsetTop) - ( windowHight);
    let mainMessageTop1 = (mainMessage1.offsetTop) - ( windowHight);
    let mainMessageTop2 = (mainMessage2.offsetTop) - ( windowHight);
    let mainMessageTop3 = (mainMessage3.offsetTop) - ( windowHight);
    let mainMessageTop4 = (mainMessage4.offsetTop) - ( windowHight);
    let mainMessageTop5 = (mainMessage5.offsetTop) - ( windowHight);
    let mainMessageTop6 = (mainMessage6.offsetTop) - ( windowHight);
    let mainMessageTop7 = (mainMessage7.offsetTop) - ( windowHight);
    let mainMessageTop8 = (mainMessage8.offsetTop) - ( windowHight);
    let mainMessageTop9 = (mainMessage9.offsetTop) - ( windowHight);
    let mainMessageTop10 = (mainMessage10.offsetTop) - ( windowHight);
    let mainMessageTop11 = (mainMessage11.offsetTop) - ( windowHight);
    let mainMessageTop12 = (mainMessage12.offsetTop) - ( windowHight);
    let mainMessageTop13 = (mainMessage13.offsetTop) - ( windowHight);
    let mainMessageTop14 = (mainMessage14.offsetTop) - ( windowHight);
    let mainMessageTop15 = (mainMessage15.offsetTop) - ( windowHight);
    let mainMessageTop16 = (mainMessage16.offsetTop) - ( windowHight);
    let profileImgTop = (profileImg.offsetTop) - ( windowHight);
    let profileStringTop = (profileString.offsetTop) - ( windowHight);

    // setting class
    const animateFadeIn = "animate__fadeIn";
    const animateFadeInRight = "animate__fadeInRight";
    const opacity0 = "opacity-0";

    // scroll events
    if ( scrollPosition > mainMessageTitleTop ){
        mainMessageTitle.classList.remove(opacity0);
        mainMessageTitle.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop1 ){
        mainMessage1.classList.remove(opacity0);
        mainMessage1.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop2 ){
        mainMessage2.classList.remove(opacity0);
        mainMessage2.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop3 ){
        mainMessage3.classList.remove(opacity0);
        mainMessage3.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop4 ){
        mainMessage4.classList.remove(opacity0);
        mainMessage4.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop5 ){
        mainMessage5.classList.remove(opacity0);
        mainMessage5.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop6 ){
        mainMessage6.classList.remove(opacity0);
        mainMessage6.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop7 ){
        mainMessage7.classList.remove(opacity0);
        mainMessage7.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop8 ){
        mainMessage8.classList.remove(opacity0);
        mainMessage8.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop9 ){
        mainMessage9.classList.remove(opacity0);
        mainMessage9.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop10 ){
        mainMessage10.classList.remove(opacity0);
        mainMessage10.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop11 ){
        mainMessage11.classList.remove(opacity0);
        mainMessage11.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop12 ){
        mainMessage12.classList.remove(opacity0);
        mainMessage12.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop13 ){
        mainMessage13.classList.remove(opacity0);
        mainMessage13.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop14 ){
        mainMessage14.classList.remove(opacity0);
        mainMessage14.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop15 ){
        mainMessage15.classList.remove(opacity0);
        mainMessage15.classList.add(animateFadeIn);
    }

    if ( scrollPosition > mainMessageTop16 ){
        mainMessage16.classList.remove(opacity0);
        mainMessage16.classList.add(animateFadeIn);
    }

    if ( scrollPosition > profileImgTop ){
        profileImg.classList.remove(opacity0);
        profileImg.classList.add(animateFadeIn);
    }

    if ( scrollPosition > profileStringTop ){
        profileString.classList.remove(opacity0);
        profileString.classList.add(animateFadeIn);
    }

    // change image
    speakerService.addEventListener("mouseover", (event) => {
        serviceImg.classList.remove(animateFadeInRight, "animate__animated");
        serviceImg.src = serviceImgSrc1.textContent;
        void serviceImg.offsetHeight;
        serviceImg.classList.add("animate__animated", animateFadeInRight);
    });

    communityService.addEventListener("mouseover", (event) => {
        serviceImg.classList.remove(animateFadeInRight, "animate__animated");
        serviceImg.src = serviceImgSrc2.textContent;
        void serviceImg.offsetHeight;
        serviceImg.classList.add("animate__animated", animateFadeInRight);
    });

    sessionService.addEventListener("mouseover", (event) => {
        serviceImg.classList.remove(animateFadeInRight, "animate__animated");
        serviceImg.src = serviceImgSrc3.textContent;
        void serviceImg.offsetHeight;
        serviceImg.classList.add("animate__animated", animateFadeInRight);
    });

    englishService.addEventListener("mouseover", (event) => {
        serviceImg.classList.remove(animateFadeInRight, "animate__animated");
        serviceImg.src = serviceImgSrc4.textContent;
        void serviceImg.offsetHeight;
        serviceImg.classList.add("animate__animated", animateFadeInRight);
    });

    tourService.addEventListener("mouseover", (event) => {
        serviceImg.classList.remove(animateFadeInRight, "animate__animated");
        serviceImg.src = serviceImgSrc5.textContent;
        void serviceImg.offsetHeight;
        serviceImg.classList.add("animate__animated", animateFadeInRight);
    });

    otherService.addEventListener("mouseover", (event) => {
        serviceImg.classList.remove(animateFadeInRight, "animate__animated");
        serviceImg.src = serviceImgSrc6.textContent;
        void serviceImg.offsetHeight;
        serviceImg.classList.add("animate__animated", animateFadeInRight);
    });
});

// Using VFX-JS
// https://amagi.dev/vfx-js/
import { VFX } from "https://esm.sh/@vfx-js/core@0.6.0";
const vfx = new VFX();

const lerp = (a, b, t) => a * (1 - t) + b * t;

const shaderH = `
precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform sampler2D src;
uniform float scroll;

float inside(vec2 uv) {
    return step(abs(uv.x - 0.5), 0.5) * step(abs(uv.y - 0.5), 0.5);
}
vec4 readTex(vec2 uv) {
    return texture2D(src, uv) * inside(uv);
}

void main() {
    vec2 uv = (gl_FragCoord.xy - offset) / resolution;

    float d = scroll;

    // Shift by x position
    d *= abs(
        sin(floor(gl_FragCoord.x / 17.) * 7. + time * 2.) +
        sin(floor(gl_FragCoord.x / 19.) * 19. - time * 3.)
    );

    vec4 cr = readTex(uv + vec2(0, d));
    vec4 cg = readTex(uv + vec2(0, d * 2.));
    vec4 cb = readTex(uv + vec2(0, d * 3.));

    gl_FragColor = vec4(
        cr.r, cg.g, cb.b, (cr.a + cg.a + cb.a)
    );
}
`;

let scroll = 0;

window.setTimeout(function(){

    for (const e of document.
    querySelectorAll('h1')) {
        vfx.add(e, {
            shader: shaderH, 
            overflow: 500, 
            uniforms: {
        scroll: () => {
            const diff = window.scrollY - scroll;
            scroll = lerp(scroll, window.scrollY, 0.03);
            return diff / window.innerHeight;
        }
        }});
    }
}, 3500);


