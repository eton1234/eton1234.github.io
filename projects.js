

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
        image: 'image-kanbooks',
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
        image: "image-nudm",
        url: "assets/nudm_leaderboard.png",
        alt: "NUDM fundraising leaderboard"

    },
    {
        id: 2,
        title: "Nautilus Kernel Drivers",
        description:` <p> Devised request and response fragments to load pixels into a framebuffer for a DMA GPU device
            Developed middle layer bit blitting functions to apply operations from source to destination boxes with enforced clipping regions and tiling; Implemented functions to draw pixels, lines, and polygons
            Interfaced with port mapped IO to develop a parallel port driver and wrote an interrupt handler to signal other requests     </p>`,
        image: "image-nautilus",
        url: "./assets/nautilus.png",
        alt: "Nautilus logo"
    }, 
    {
        id: 3,
        title: "iPod Player UI",
        description: `<p> I incorporated W3C WCAG accessibility guidelines into my HTML/CSS formatting and JavaScript code
        to create an accessibility focused iPod player. Front-end only
    </p>`,
        image: "image-ipod",
        url: "./assets/ipod-ui.png",
        alt: "iPod with playback buttons and song progression state"
    },
    {
        id: 4,
        title: "Big Marsh Air Q Sensors",
        description: ` <p> Recommended the best air quality sensor for Big Marsh Park, an outdoor park with spotty Wi-Fi access. Provided a 
        3D modeled waterproof enclosure and a plan to implement the sensors throughout the park.
    </p>`,
        image: "image-airnote",
        url: "./assets/airnote-enclosure-3d-printed.png",
        alt: "Air note air quality sensor covered by custom waterproof casing"
    },
    {
        id: "5",
        title: "Flappy Bird ",
        description: ` <p> Programmed Flappy Bird from scratch in C++ with GE211, a simple 2D game engine. Complete with
        score tracking, random column generation and lives. Follows MVC model
    </p>`,
        image: null,
        url: null
    },
    {
        id: "6",
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
                
                image_html = project.url ?  `<img class="card-img" src=${project.url} alt=${project.alt}>` : "";
                html = `
                   
                    <div class="card">
                        <div>
                            ${image_html}
                        </div>
                        <div class="card-text">
                        
                            <h1> ${project.title} </h1>
                            
                        
        
                            </div>
                        </div> 
                    </div> `
                    // <button id="button-${project.id}">
                let container = document.createElement("button");
                container.id=`button-${project.id}`;
                container.innerHTML = html;
                // container.tabIndex = projects.indexOf(project);
                parent.append(container);
            }
        }
    }
}

//creates a modal display for every project button
function modals(projects, parentSelector) {

    if (projects instanceof Array) {
        for (let project of projects) {
            //Grabs button modal, and span
            var btn = document.getElementById(`button-${project.id}`);
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            //Custom button onclick added
            btn.onclick =  () => {
                //Centers the modal
                modal.style.display = "grid";
                //grabs the correct elements and replaces the inner HTML
                document.getElementById("modal-description").innerHTML= `${project.description}`;
                document.getElementById("modal-title").innerHTML = `${project.title}`;
                let image_link = project.image ? `card-img ${project.image}` : "";
                modal_img = document.getElementById("modal-img");
                modal_img.src = project.url;
                modal_img.alt= project.alt;
                modal_img.className = "card-img"

            }
            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
              }
            span.onclick = function() {
            modal.style.display = "none";
            }
        }
        var btn = document.getElementById("myBtn");
        console.log(btn);
    }
    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];


}

function navHighlight(elem, home, active) {
    var url = location.href.split('/'),
        loc = url[url.length -1],
        link = document.querySelectorAll(elem);
    for (var i = 0; i < link.length; i++) {
        var path = link[i].href.split('/'),
            page = path[path.length -1];
        if (page == loc || page == home && loc == '') {
            link[i].parentNode.className += ' ' + active;
            document.body.className += ' ' + page.substr(0, page.lastIndexOf('.'));
            }
        }
    }
navHighlight('.top-nav a', 'index.html', 'current'); /* menu link selector, home page, highlight class */