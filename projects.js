let projects = [
    {
        id: 0,
        title: "Kan Books",
        description: `<ul> <li>Trying to read in a foreign language like Chinese is a tough task.
            Besides memorizing the thousands of characters that exist, it is a confusing task to figure out which characters in a sequence
            make up a word: Chinese words can be composed of 1-4 characters, making it ambiguous to tell when a word starts and ends.. </li>
            <li>
                To circumvent these struggles, the Kanbooks IOS E-reader prototype automatically tokenizes page content by word, highlights
                unknown words for faster identification, and provides on the fly translation and pinyin
                romanizations for each word token. </li>
            <li>
                Kanbooks was built using the Readium framework to render EPUBs, Swift's NLP library, and
                GoogleTranslate's API </li> </ul>`,
        url: "./assets/kanbooks.gif",
        alt: "Animation showing how the interface highlights unknown words and the custom translation overlay"
    },
    {
        id: 1,
        title: "NUDM Mobile",
        description: `<p> With NUDM, I'm developing a client facing mobile app which serves thousands of students. The
            app
            mainly involves an event management interface as well as a fundraising leaderboard.
            We are working with React Native and Firebase in an agile environment </p>`,
        url: "assets/nudm_leaderboard.png",
        alt: "NUDM fundraising leaderboard"

    },
    {
        id: 2,
        title: "Nautilus Kernel Drivers",
        description:` <p> Devised request and response fragments to load pixels into a framebuffer for a DMA GPU device
        Developed middle layer bit blitting functions to apply operations from source to destination boxes with enforced clipping regions and tiling; Implemented functions to draw pixels, lines, and polygons
        Interfaced with port mapped IO to develop a parallel port driver and wrote an interrupt handler to signal other requests
        </p>`,
        url: "./assets/nautilus.png",
        alt: "Nautilus logo"
    }, 
    {
        id: 3,
        title: "DAQ Motion board",
        description:` <p> Wrote and tested ESP32 firmware in C++ to relay GPS and IMU data through CAN bus, providing valuable
         real-time car information to the driver and telemetry subteam </p>`,
        url: "./assets/ESP32.jpg",
        alt: "Daq Motion PCB board"
    }, 
    {
        id: 4,
        title: "iPod Player UI",
        description: `<p> I incorporated W3C WCAG accessibility guidelines into my HTML/CSS formatting and JavaScript code
        to create an accessibility focused iPod player. Front-end only
    </p>`,
        url: "./assets/ipod-ui.png",
        alt: " iPod with playback buttons and song progression state"
    },
    {
        id: 5,
        title: "Big Marsh Air Q Sensors",
        description: ` <p> Recommended the best air quality sensor for Big Marsh Park, an outdoor park with spotty Wi-Fi access. Provided a 
        3D modeled waterproof enclosure and a plan to implement the sensors throughout the park.
    </p>`,
        url: "./assets/airnote-enclosure-3d-printed.png",
        alt: "Air note air quality sensor covered by custom waterproof casing"
    },
    {
        id: 6,
        title: "Flappy Bird",
        description: ` <p> Programmed Flappy Bird from scratch in C++ with GE211, a simple 2D game engine. Complete with
        score tracking, random column generation and lives. Follows MVC model
    </p>`,
        image: null,
        url: "./assets/flappy-bird.jpeg",
        alt: "Bird flying through column obstacles"
    },
    {
        id: 7,
        title: "Chess",
        description: `<p> I designed a fully functional Chess GUI in highschool using object oriented principles.
                    </p>`,
        image: "image-chess",
        url: "./assets/chess.png",
        alt: "Chess board with black and white pieces"
    }
]
function createProjects(projects, parentSelector) {
    let parent = document.querySelector(parentSelector);
    if (parent) {
        if (projects instanceof Array) {
            for (let project of projects) {
                //creates html for the custom image of the card
                image_html = project.url ?  `<img class="card-img" src=${project.url} alt=${project.alt}>` : "";
                //Card's html
                html = `
                        <div>
                            ${image_html}
                        </div>
                        <div class="card-text">
                            <h1> ${project.title} </h1>   
                        </div>`;
                let container = document.createElement("button");
                container.id=`button-${project.id}`;
                container.className = "card";
                container.innerHTML = html;
                parent.append(container);
            }
        }
    }
}

//close modal_dialog helper function
function closeDialog() {
    let modal_dialog = document.getElementById("myModal");
    modal_dialog.removeAttribute('data-open');
    modal_dialog.style.display = "none";
    Array.from(document.body.children).forEach(child => {
        if(child !== modal_dialog) {
            child.inert = false;
        }
    });
    document.removeEventListener('keydown', addESC);
    previousElement.focus();
    
    
  }
//keeps track of the previous element
let previousElement;
//escape -> close the modal :  helper function 
let addESC = function(e) {
    if (e.keyCode == 27) {
        closeDialog();
    } 
}

//creates a modal display for every project button
function modals(projects, parentSelector) {
    let close_button = document.getElementById("close");
    if (projects instanceof Array) {
        for (let project of projects) {
            //Grabs button modal, and span
            let btn = document.getElementById(`button-${project.id}`);
            let modal_dialog = document.getElementById("myModal");
            //Custom button onclick added
            btn.onclick =  () => {
                //Reveals and centers the modal 
                previousElement = document.activeElement;
                modal_dialog.style.display = "grid";
                //save the previous element and render the elements as inert
                Array.from(document.body.children).forEach(child => {
                    if(child !== modal_dialog) {
                        child.inert = true;
                    }
                })
                //grabs the correct elements and replaces the inner HTML
                title = document.getElementById("modal-title")
                title.innerHTML = `${project.title}`;
                document.getElementById("modal-description").innerHTML= `${project.description}`;
                modal_img = document.getElementById("modal-img");
                //if the image exists add it
                if (project.url) {
                    modal_img.src = project.url;
                    modal_img.alt= project.alt;
                }
                //focus on the close button
                close_button.focus();
                //close modal listeners
                modal_dialog.setAttribute('data-open', '');
                modal_dialog.addEventListener('keydown', function(e) {
                  if (e.keyCode == 9) {
                    e.preventDefault();
                  }
                });
                document.addEventListener('keydown', addESC);

            }
            window.onclick = function(event) {
                if (event.target == modal_dialog) {
                    closeDialog();
                }
              }
            close_button.onclick = function() {
                closeDialog();
            }
        }
    }
}