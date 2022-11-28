

var projects = [
    {
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
        url: "./assets/kanbooks.gif"
    },
    {
        title: "NUDM Mobile",
        description: `<p> With NUDM, I'm developing a client facing mobile app which serves thousands of students. The
            app
            mainly involves an event management interface as well as a fundraising leaderboard.
            We are working with React Native and Firebase in an agile environment </p>`,
        image: "image-nudm",
        url: "assets/nudm_leaderboard.png"

    },
    {
        title: "Nautilus Kernel Drivers",
        description:` <p> Devised request and response fragments to load pixels into a framebuffer for a DMA GPU device
            Developed middle layer bit blitting functions to apply operations from source to destination boxes with enforced clipping regions and tiling; Implemented functions to draw pixels, lines, and polygons
            Interfaced with port mapped IO to develop a parallel port driver and wrote an interrupt handler to signal other requests     </p>`,
        image: "image-nautilus",
        url: "./assets/nautilus.png"
    }, 
    {
        title: "iPod Player UI",
        description: `<p> I incorporated W3C WCAG accessibility guidelines into my HTML/CSS formatting and JavaScript code
        to create an accessibility focused iPod player. Front-end only
    </p>`,
        image: "image-ipod",
        url: "./assets/ipod-ui.png"
    },
    {
        title: "Big Marsh Air Q Sensors",
        description: ` <p> Recommended the best air quality sensor for Big Marsh Park, an outdoor park with spotty Wi-Fi access. Provided a 
        3D modeled waterproof enclosure and a plan to implement the sensors throughout the park.
    </p>`,
        image: "image-airnote",
        url: "./assets/airnote-enclosure-3d-printed.png"
    },
    {
        title: "Flappy Bird ",
        description: ` <p> Programmed Flappy Bird from scratch in C++ with GE211, a simple 2D game engine. Complete with
        score tracking, random column generation and lives. Follows MVC model
    </p>`,
        image: null,
        url: null
    },
    {
        title: "Chess",
        description: `<p> I designed a fully functional Chess GUI in highschool using object oriented principles.
                    </p>`,
        image: "image-chess",
        url: "./assets/chess.png"
    }



]

function createProjects(projects, parentSelector) {
    let parent = document.querySelector(parentSelector);
    if (parent) {
        if (projects instanceof Array) {
            for (let project of projects) {
                image_link = project.image ? `card-img ${project.image}` : ""

                image_html = project.url ?  `<img class="card-img" src=${project.url}>` : "";
                html = `
                    <div>
                        ${image_html}
                    </div>
                    <div class="card-text">
                    
                        <h1> ${project.title} </h1>
                       
    
                        </div>
                    </div> 
                    `
                let container = document.createElement("div");
                container.className="card";
                container.innerHTML = html;
                container.tabIndex = projects.indexOf(project);
                parent.append(container);
            }
        }
    }
}
//                     ${project.description}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}