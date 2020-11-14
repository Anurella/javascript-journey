<template>
  <div class="wrapper">
    <header class="flex__sb">
       <div class="logo__header flex__sb">
         <a href="/" class="logo flex__c" aria-label="Vzy Icons">
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666666 0H32.6667L16.6667 32L0.666666 0ZM23.0667 0L16.6675 12.8V4.8H11.0667L13.4679 0H23.0667Z" fill="black"/>
          </svg>
        </a>
        <button 
                  @click="toggle_theme()"
                  class="header__btn btn__scheme" aria-label="Theme Mode">
                <svg fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="7" r="6" fill="#fff" stroke="#000" stroke-linecap="round" 
                          stroke-linejoin="round" class="inner"/>
                </svg>
              </button>
       </div>
        <div class="sidebar__header flex__sb">
            <p class="customise"> Customise </p>
            <div class="checkout flex__sb">
              <p> Checkout </p>
              <button class="btn__back" @click="hidePro()"> 
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fill-rule="evenodd">
                      <rect width="24" height="24"/>
                      <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M18,6 L6,18 M6,6 L18,18"/>
                    </g>
                </svg>
              </button>
            </div>
        </div>
    </header>
    <main class="main flex">
        <div class="content">
          <section class="top">
            <h1> Vzy Icons </h1>
            <p> 500+ Premium SVG icons for professional websites and apps. <br/>
                Select and customise in outline, solid and duotone styles.<br/> 
            </p>
          </section>
          <section class="middle grid">
           <div class="search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" fill-rule="evenodd" 
                   stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9.5 17a7.5 7.5 0 1 0 0-15 
                   7.5 7.5 0 0 0 0 15zm12.007 4.507l-6.694-6.694"/>
              </svg>
              <input class="search__input" type="text" role="searchbox" autocomplete="on"
                   aria-label="All icons" placeholder='Search by keywords like "add" or "love"'>
            </div>
            <nav class="type__nav flex__sa">
              <button
                v-for="tab in tabs"
                :key="tab"
                @click="selected = tab;"
                :class="['nav', { active: selected === tab}]">
                {{ tab }}
              </button>
              <!-- <button class="nav"> Duotone </button> -->
              <button class="nav"> Brands </button>
            </nav>
          </section>
          <section class="icons">
          <component
            :listIcons="listIcons"
            :is="selected"
            class="collection"
            :lineJoin="lineJoin"
            :iconSize="iconSize"
            :strokeWidth="strokeWidth"
            :strokeColor="strokeColor"
          ></component>
        </section>
        </div>
       <aside class="sidebar">
          <div class="sidebar__content cont">
             <div class="controls">
                  <div class="range">
                     <div class="range__label flex__sb">
                        <span class="">Size</span>
                        <span class="range__label-val"><span class="curVal">{{iconSize}}</span> px</span>
                     </div>
                     <div class="range__slider">
                        <input type="range" min="1" max="5" step="1" v-model="iconInputSize" @input="changeSize"   class="range__slider-input slider__size">
                     </div>
                  </div>
                  <div class="range">
                     <div class="range__label flex__sb">
                        <span class="">Thickness</span>
                        <span class="range__label--val"><span class="curVal">{{strokeWidth}}</span> px</span>
                     </div>
                     <div class="range__slider">
                        <input type="range" min="0.5" max="4" step="0.5" v-model="strokeWidth" class="range__slider-input slider__width">
                     </div>
                   </div>
                  <div class="color">
                      <div><span class="">Color</span></div>
                      <div class="color__input flex">
                        <div class="hex flex__c">#</div>
                            <label for="iconsColor"></label>
                            <input  v-on:keyup="colorChange"
                                    class="color__icon" type="text" name="iconsColor" aria-label="Icons' color given in any valid format" v-model="strokeColor" >
                            <div class="color__swatch flex__c"><div class="color__swatch--item"></div></div>
                      </div>
                  </div>
                  <div class="corners">
                    <div><span class="">Corners</span></div>
                    <div class="flex corners__but">
                      <button @click="selectLineJoin('round')" :class="{ active: lineJoin == 'round' }"> <span><svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 13H1.46552V6.24C1.46552 3.32394 3.84304 0.96 6.77586 0.96H14.5V0H6.77586C3.3098 0 0.5 2.79374 0.5 6.24V13ZM8 8.93699C8.7028 8.7561 9.2561 8.2028 9.43699 7.5H14.5V6.5H9.43699C9.21497 5.63739 8.43192 5 7.5 5C6.39543 5 5.5 5.89543 5.5 7C5.5 7.93192 6.13739 8.71497 7 8.93699V13H8V8.93699Z" fill="black"/>
                              </svg>
                              </span> Curve </button>
                      <button  :class="{ active: lineJoin == 'arcs' }"
            @click="selectLineJoin('arcs')"> <span><svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 13V1H14.5V0H0.5V13H1.5ZM8 8.93699C8.7028 8.7561 9.2561 8.2028 9.43699 7.5H14.5V6.5H9.43699C9.21497 5.63739 8.43192 5 7.5 5C6.39543 5 5.5 5.89543 5.5 7C5.5 7.93192 6.13739 8.71497 7 8.93699V13H8V8.93699Z" fill="black"/>
                                </svg>
                               </span> Sharp </button>
                    </div>
                  </div>
                  <div class="download">
                     <button class="btn">Download All</button>
                  </div>
             </div>
             <div class="bottom">
                 <button class="btn--border" @click="showPro()"> Get Vzy Icons Pro </button>
             </div>
          </div>
          <div class="flex pro">
            <div class="pro__details">
               <p> Download my growing library of professional handcrafted icons for your next project + full access to customize them here.</p>
               <ul class="mgt">
                 <li> 500+ SVG icons </li>
                 <li> 24px Grid </li>
                 <li> iOS 14 Ready </li>
                 <li> Sketch and Figma files </li>
                 <li> Outline, Solid, and Duotone </li>
                 <li> Free Updates </li>
               </ul>
            </div>
            <div class="pro__code">
               <p> Got a license code? </p>
                <div class="license">
                    <p> Buy license </p>
                    <div class="flex license__but">
                      <button class=""> Solo / 1 </button>
                      <button> Team / 3 </button>
                    </div>
                </div>
                <button class="btn"> Pay $50 </button>
            </div>
          </div>
       </aside>
    </main>
    <footer>
      <div class="flex__sb">
        <p class="flex__c"><span>Vzy - </span><a href=""> @evansakanno</a></p>
        <div aria-label="social share" class="socialShare flex__sa">
          <a
            href="https://twitter.com/home?status=https://www.vzyicon.com"
            aria-label="Share on Twitter"
            target="_blank"
            rel="noopener"
          >
            <svg class="socialShare__item" viewBox="0 0 24 24">
              <path
                class="fill__w"
                fill="#000"
                fill-rule="evenodd"
                d="M8.29 20.127c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.354-.012-.53A8.349 8.349 0 0 0 22 
                          5.798a8.19 8.19 0 0 1-2.357.645 4.118 4.118 0 0 0 1.804-2.27 8.223 8.223 0 0 1-2.605.997 
                          4.107 4.107 0 0 0-6.993 3.742 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 
                          4.073 0 0 1 2.8 9.59v.052a4.105 4.105 0 0 0 3.292 4.022 4.097 4.097 0 0 1-1.853.07 4.108 4.108 
                          0 0 0 3.834 2.85A8.234 8.234 0 0 1 2 18.284a11.617 11.617 0 0 0 6.29 1.84"
              />
            </svg>
            Tweet
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.vzyicon.com"
            aria-label="Share on Facebook"
            target="_blank"
            rel="noopener"
          >
            <svg class="socialShare__item" viewBox="0 0 24 24">
              <path
                class="fill__w"
                fill="#000"
                fill-rule="evenodd"
                d="M22 12.058C22 6.508 17.525 2 12 2S2 6.5 2 12.058C2 17.083 5.658 21.25 10.442 
                          22v-7.033H7.9v-2.909h2.533V9.842c0-2.517 1.5-3.917 3.784-3.917 1.091 0 2.233.2 
                          2.233.2V8.6H15.2c-1.25 0-1.633.775-1.633 1.575v1.883h2.766l-.441 2.917h-2.334V22C18.35 21.25 
                          22 17.083 22 12.058"
              />
            </svg>
            Share
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Outline from "@/components/outlineicons.vue";
import Solid from "@/components/solidicons.vue";
import iconsData from "../test.json";
import { gsap } from "gsap";


export default {
  name: "Home",
  components: {
    Outline,
    Solid,
  },
  data: function() {
    return {
      tabs: ["Outline", "Solid"],
      selected: "Outline",
      lineJoin: "round",
      iconSize: "24",
      strokeWidth: "1",
      strokeColor: "ffff00",
      iconInputSize: "2"
    };
  },
  computed: {
    listIcons() {
      console.log("icon", iconsData.content);
      return iconsData;
    },
  },
  mounted() {
    // get the theme in cookies
    const currTheme = localStorage.getItem("theme");
    console.log(currTheme);
    if (currTheme === "dark") {
      // ...let's toggle the .dark-theme class on the body
      document.body.classList.toggle("dark__theme");
    }
    // Otherwise, if the user's preference in localStorage is light...
    else if (currTheme === "light") {
      // ...let's toggle the .light-theme class on the body
      document.body.classList.toggle("light__theme");
    }
  },
  methods: {
    changeSize(e){
      const value = e.target.value
      switch (value) {
      case "1":
        this.iconSize = "16";
        break;
      case "2":
        this.iconSize = "24";
        break;
        case "3":
        this.iconSize = "32";
        break;
        case "4":
        this.iconSize = "48";
        break;
        case "5":
        this.iconSize = "64";
        break;
    }
    },
    selectLineJoin(style) {
      this.lineJoin = style;
    },
    toggle_theme() {
      const darkScheme = window.matchMedia("(prefers-color-scheme: dark)");
      //  console.log(darkScheme);
      var theme;
      //if the user's os setting is dark and matches .dark__theme
      if (darkScheme.matches) {
        document.body.classList.toggle("light__theme");
        theme = document.body.classList.contains("light__theme")
          ? "light"
          : "dark";
      } else {
        // if the user's setting is light mode and matches .light__theme
        document.body.classList.toggle("dark__theme");
        theme = document.body.classList.contains("dark__theme")
          ? "dark"
          : "light";
      }
      // Finally, let's save the current preference to localStorage to keep using it
      localStorage.setItem("theme", theme);
    },
    colorChange: function() {   
        const temp = document.querySelector('.color__icon').value,
        curCOLOR = "#" + temp;
        console.log(curCOLOR);
        // getComputedStyle(element).getPropertyValue("--my-var");
        document.documentElement.style.setProperty('--selColor', curCOLOR);  
    },
    showPro: function() {
        // console.log("This is a transition effect");
        const timeline = gsap.timeline({
              defaults:{
              duration:.3,
              delay:.2
           }
        });
        timeline
        .to(".cont",{
          opacity:0,
          ease:'power.in'
        })
        .to(".checkout",{
          opacity:1
        })
        .to(".pro",{
           x:'0px',
        })
    },
    hidePro: function() {
        const timeline = gsap.timeline({
              defaults:{
              duration:.3,
              delay:.2
           }
        });
        timeline
         .to(".pro",{
           x:'-120%',
        })
        .to(".checkout",{
          opacity:0
        })
        .to(".cont",{
          opacity:1,
          ease:'power.in'
        })
    }

  }
};
</script>

<style></style>
