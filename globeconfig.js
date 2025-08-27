const MAX_GLOBE_WIDTH = 1170;

  const initGlobe = () => {
    const data = window.RADAR_GLOBE_POLYGON;
    const cities = window.RADAR_GLOBE_DATA;
    
    let windowWidth = window.innerWidth
    
    const width = MAX_GLOBE_WIDTH;
    const height = MAX_GLOBE_WIDTH;
    const background = "rgba(0,0,0,0)";
    const interactive = windowWidth >= 768;
    const startingZoom = 2.5;
    const showOuterGlow = true;
    const filterCitiesPercentage = 0.5; // what percentage of cities to grab from array
    const overlap = 60; // overlap of pulses

    const darkMidnight = "#000134";
    const sunset = "#FF6F00";
    const grass = "#3FCC7D";
    const white = "#FFFFFF";
    const ruby = "#EB0083";

    const setupMaterials = () => {
      // create materials
      const material = new THREE.MeshPhongMaterial({ color: darkMidnight });
      material.specular = new THREE.Color("blue");
      material.shininess = 7;

      const whiteMaterial = new THREE.MeshBasicMaterial({
        color: white,
        transparent: true,
      });
      const whiteMaterial80 = new THREE.MeshBasicMaterial({
        color: white,
        opacity: 0.8,
        transparent: true,
      });
      const whiteMaterial60 = new THREE.MeshBasicMaterial({
        color: white,
        opacity: 0.6,
        transparent: true,
      });
      const whiteMaterial40 = new THREE.MeshBasicMaterial({
        color: white,
        opacity: 0.4,
        transparent: true,
      });
      const whiteMaterial20 = new THREE.MeshBasicMaterial({
        color: white,
        opacity: 0.2,
        transparent: true,
      });

      const whiteMaterial90 = new THREE.MeshBasicMaterial({
        color: white,
        opacity: 0.9,
        transparent: true,
      });
      const whiteMaterial70 = new THREE.MeshBasicMaterial({
        color: white,
        opacity: 0.7,
        transparent: true,
      });
      const whiteMaterial50 = new THREE.MeshBasicMaterial({
        color: white,
        opacity: 0.5,
        transparent: true,
      });
      const whiteMaterial30 = new THREE.MeshBasicMaterial({
        color: white,
        opacity: 0.3,
        transparent: true,
      });
      const whiteMaterial10 = new THREE.MeshBasicMaterial({
        color: white,
        opacity: 0.1,
        transparent: true,
      });

      // Grass
      const grassMaterial = new THREE.MeshBasicMaterial({
        color: grass,
        transparent: true,
      });
      const grassMaterial80 = new THREE.MeshBasicMaterial({
        color: grass,
        opacity: 0.8,
        transparent: true,
      });
      const grassMaterial60 = new THREE.MeshBasicMaterial({
        color: grass,
        opacity: 0.6,
        transparent: true,
      });
      const grassMaterial40 = new THREE.MeshBasicMaterial({
        color: grass,
        opacity: 0.4,
        transparent: true,
      });
      const grassMaterial20 = new THREE.MeshBasicMaterial({
        color: grass,
        opacity: 0.2,
        transparent: true,
      });

      const grassMaterial90 = new THREE.MeshBasicMaterial({
        color: grass,
        opacity: 0.9,
        transparent: true,
      });
      const grassMaterial70 = new THREE.MeshBasicMaterial({
        color: grass,
        opacity: 0.7,
        transparent: true,
      });
      const grassMaterial50 = new THREE.MeshBasicMaterial({
        color: grass,
        opacity: 0.5,
        transparent: true,
      });
      const grassMaterial30 = new THREE.MeshBasicMaterial({
        color: grass,
        opacity: 0.3,
        transparent: true,
      });
      const grassMaterial10 = new THREE.MeshBasicMaterial({
        color: grass,
        opacity: 0.1,
        transparent: true,
      });

      // ruby
      const rubyMaterial = new THREE.MeshBasicMaterial({
        color: ruby,
        transparent: true,
      });
      const rubyMaterial80 = new THREE.MeshBasicMaterial({
        color: ruby,
        opacity: 0.8,
        transparent: true,
      });
      const rubyMaterial60 = new THREE.MeshBasicMaterial({
        color: ruby,
        opacity: 0.6,
        transparent: true,
      });
      const rubyMaterial40 = new THREE.MeshBasicMaterial({
        color: ruby,
        opacity: 0.4,
        transparent: true,
      });
      const rubyMaterial20 = new THREE.MeshBasicMaterial({
        color: ruby,
        opacity: 0.2,
        transparent: true,
      });

      const rubyMaterial90 = new THREE.MeshBasicMaterial({
        color: ruby,
        opacity: 0.9,
        transparent: true,
      });
      const rubyMaterial70 = new THREE.MeshBasicMaterial({
        color: ruby,
        opacity: 0.7,
        transparent: true,
      });
      const rubyMaterial50 = new THREE.MeshBasicMaterial({
        color: ruby,
        opacity: 0.5,
        transparent: true,
      });
      const rubyMaterial30 = new THREE.MeshBasicMaterial({
        color: ruby,
        opacity: 0.3,
        transparent: true,
      });
      const rubyMaterial10 = new THREE.MeshBasicMaterial({
        color: ruby,
        opacity: 0.1,
        transparent: true,
      });

      // Sunset
      const sunsetMaterial = new THREE.MeshBasicMaterial({
        color: sunset,
        transparent: true,
      });
      const sunsetMaterial80 = new THREE.MeshBasicMaterial({
        color: sunset,
        opacity: 0.8,
        transparent: true,
      });
      const sunsetMaterial60 = new THREE.MeshBasicMaterial({
        color: sunset,
        opacity: 0.6,
        transparent: true,
      });
      const sunsetMaterial40 = new THREE.MeshBasicMaterial({
        color: sunset,
        opacity: 0.4,
        transparent: true,
      });
      const sunsetMaterial20 = new THREE.MeshBasicMaterial({
        color: sunset,
        opacity: 0.2,
        transparent: true,
      });

      const sunsetMaterial90 = new THREE.MeshBasicMaterial({
        color: sunset,
        opacity: 0.9,
        transparent: true,
      });
      const sunsetMaterial70 = new THREE.MeshBasicMaterial({
        color: sunset,
        opacity: 0.7,
        transparent: true,
      });
      const sunsetMaterial50 = new THREE.MeshBasicMaterial({
        color: sunset,
        opacity: 0.5,
        transparent: true,
      });
      const sunsetMaterial30 = new THREE.MeshBasicMaterial({
        color: sunset,
        opacity: 0.3,
        transparent: true,
      });
      const sunsetMaterial10 = new THREE.MeshBasicMaterial({
        color: sunset,
        opacity: 0.1,
        transparent: true,
      });

      const empty_material = new THREE.MeshBasicMaterial({
        opacity: 0.0,
        transparent: true,
      });

      // instantiation of circle radius's
      const radius = 1;
      const sphere100 = new THREE.CircleGeometry(radius * 1.4);
      const sphere80 = new THREE.CircleGeometry(radius * 1.2);
      const sphere60 = new THREE.CircleGeometry(radius * 1.0);
      const sphere40 = new THREE.CircleGeometry(radius * 0.8);
      const sphere20 = new THREE.CircleGeometry(radius * 0.6);
      const sphere0 = new THREE.CircleGeometry(radius * 0.01);

      const sphere90 = new THREE.CircleGeometry(radius * 1.3);
      const sphere70 = new THREE.CircleGeometry(radius * 1.1);
      const sphere50 = new THREE.CircleGeometry(radius * 0.9);
      const sphere30 = new THREE.CircleGeometry(radius * 0.7);
      const sphere10 = new THREE.CircleGeometry(radius * 0.5);

      const materialMap = {
        w100: whiteMaterial,
        w80: whiteMaterial80,
        w60: whiteMaterial60,
        w40: whiteMaterial40,
        w20: whiteMaterial20,

        w90: whiteMaterial90,
        w70: whiteMaterial70,
        w50: whiteMaterial50,
        w30: whiteMaterial30,
        w10: whiteMaterial10,

        g100: grassMaterial,
        g80: grassMaterial80,
        g60: grassMaterial60,
        g40: grassMaterial40,
        g20: grassMaterial20,

        g90: grassMaterial90,
        g70: grassMaterial70,
        g50: grassMaterial50,
        g30: grassMaterial30,
        g10: grassMaterial10,

        r100: rubyMaterial,
        r80: rubyMaterial80,
        r60: rubyMaterial60,
        r40: rubyMaterial40,
        r20: rubyMaterial20,

        r90: rubyMaterial90,
        r70: rubyMaterial70,
        r50: rubyMaterial50,
        r30: rubyMaterial30,
        r10: rubyMaterial10,

        s100: sunsetMaterial,
        s80: sunsetMaterial80,
        s60: sunsetMaterial60,
        s40: sunsetMaterial40,
        s20: sunsetMaterial20,

        s90: sunsetMaterial90,
        s70: sunsetMaterial70,
        s50: sunsetMaterial50,
        s30: sunsetMaterial30,
        s10: sunsetMaterial10,

        e: empty_material,

        w: white,
        g: grass,
        s: sunset,
        r: ruby,

        2: sphere20,
        4: sphere40,
        6: sphere60,
        8: sphere80,
        10: sphere100,
        0: sphere0,

        1: sphere10,
        3: sphere30,
        5: sphere50,
        7: sphere70,
        9: sphere90,
      };
      return materialMap;
    };

    const materialMap = setupMaterials();

    // Set up cities
    const filteredCities = cities.filter(() => {
      return Math.random() < filterCitiesPercentage;
    });

    for (let i = 0; i < filteredCities.length; i++) {
      const start = Math.floor(Math.random() * overlap); // zeroing out
      for (let j = 0; j < overlap; j++) {
        filteredCities[i][j] = 0;
        filteredCities[i]["m" + String(j)] = "e";
      }

      // Size loop
      for (let j = 1; j <= 10; j++) {
        filteredCities[i][(start + j) % overlap] = j * 1;
      }

      // Material loop
      for (let j = 1; j <= 10; j++) {
        // set
        const formulaVal = -10 * j + 110;
        filteredCities[i]["m" + ((start + j) % overlap)] =
          filteredCities[i].material + formulaVal;
      }
    }

    const setControls = (globe) => {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.7;
      globe.controls().enableZoom = false;
      globe.pointOfView({ lat: 20, altitude: startingZoom });

      if (!interactive) {
        globe.controls().enabled = false;
        const canvas = globe.renderer()?.domElement;
        if (canvas) {
          canvas.style.touchAction = "unset";
        }
      }
    };

    const material = new THREE.MeshPhongMaterial({
      color: "#000134", // darkMidnight
      specular: new THREE.Color("blue"),
      shininess: 7,
    });

    const rendererConfig = { antialias: true };
    const globe = new Globe(document.getElementById("globeViz"), {
      rendererConfig,
      waitForGlobeReady: true,
    })
      // .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
      .width(width)
      .height(height)
      .globeMaterial(material)
      .showAtmosphere(showOuterGlow)
      // Hex Polygon Layer
      .hexPolygonsData(data.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.8)
      .hexPolygonColor(() => "#D1F3E0")

      // Circle pulses
      .customLayerData(filteredCities)
      .customThreeObject((d) => {
        const obj = new THREE.Mesh(materialMap[0], materialMap["e"]);
        const normal = globe.getCoords(d.lat, d.lng, 10);
        obj.lookAt(normal.x, normal.y, normal.z);
        Object.assign(obj.position, globe.getCoords(d.lat, d.lng, d.alt));
        return obj;
      })
      .customThreeObjectUpdate((obj, d) => {
        obj.material = materialMap[d["m" + index]];
        obj.geometry = materialMap[d[index]];
      })

      .backgroundColor(background);

    setControls(globe);

    // animation
    let last = 0;
    let small = 0;
    const speed = 0.05;
    let index;

    // every second, recompute sizes of cities for pulsing effect
    const animate = (timeStamp) => {
      const timeInSecond = timeStamp / 1000;
      if (timeInSecond - last >= speed) {
        last = timeInSecond;
        small = (small + 1) % overlap;
        index = small;

        globe.customLayerData(globe.customLayerData());
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate); // start loop
    
    
    // Initial size
    let globeWidth = windowWidth - 30; // 15px padding on each size
    if (windowWidth <= 768) {
    	globeWidth = globeWidth*1.2;
    }
    if (windowWidth <= 450) { // increase globe size on mobile
      globeWidth = globeWidth * 2;
    }
    globeWidth = Math.min(globeWidth, MAX_GLOBE_WIDTH);
    const globeCanvas = document.querySelector('#globeViz canvas');
    console.log('GLOBE WIDTH', width, globeCanvas);
    if (globeCanvas) {
      console.log('SETTING GLOBE SIZE', globeWidth);
      globeCanvas.style.width = globeWidth + "px";
      globeCanvas.style.height = globeWidth + "px";
    }
};

let globeRunning = false;

function handleScreenResize(width) {
  console.log('HANDLE RESIZE', width, globeRunning);
  if (globeRunning) {
    let globeWidth = width - 30; // 15px padding on each size
    if (width <= 768) {


    	globeWidth = globeWidth*1.2;
    }
    if (width <= 450) { // increase globe size on mobile
      globeWidth = globeWidth * 2;
    }
    globeWidth = Math.min(globeWidth, MAX_GLOBE_WIDTH);
    
    setTimeout(function() {
      const globeCanvas = document.querySelector('#globeViz canvas');
      console.log('GLOBE WIDTH', width, globeCanvas);
      if (globeCanvas) {
        console.log('SETTING GLOBE SIZE', globeWidth);
        globeCanvas.style.width = globeWidth + "px";
        globeCanvas.style.height = globeWidth + "px";
      }
      
			const globeParent = document.querySelector('.globe-placeholder');
      if (globeParent) {
      	if (width < 768) {
        	globeParent.style.pointerEvents = 'none';

        } else {
        	globeParent.style.pointerEvents = '';
        }
      }
    }, 1000); // wait for globe to initalize
  }
};

// only start globe once the target div (#globe-init) is in view
function startGlobe(data) {
console.log("startGlobe")
  if (data[0]) {
    if (data[0].isIntersecting && !globeRunning) {
      initializeScripts(initGlobe);
      globeRunning = true;
      handleScreenResize(window.innerWidth); // update size based on screen size
    }
  }
};

// only start globe once the target div (#globe-init) is in view
const observer = new IntersectionObserver(startGlobe, {
  root: document.body,
  rootMargin: "0px", 
  threshold: 0.9 
});
observer.observe(document.getElementById('globe-init'));

setTimeout(() => {
  startGlobe()
}, 3000); 

// handle window resize events (debounce every 300ms)
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    handleScreenResize(window.innerWidth);
  }, 300);
});
