gsap.registerPlugin(ScrollTrigger);

document.getElementById("jump-button-1").addEventListener("click", function() {
    jump(".graph-section", {
        duration: 2500,
    });
});
var ctx = document.getElementById("mygraph").getContext("2d");

var chart = new Chart(ctx, {});

let graphText = document.querySelector("#graph-heading");

let graphTextContent = document.querySelector("#graph-heading").textContent;

let graphTextArray = graphTextContent.split(""); // creating an Array of the each letter in the header

let animalButton = document.getElementById("graph-button-animals");
let plantButton = document.getElementById("graph-button-plants");
let allButton = document.getElementById("graph-button-extinction");

graphText.innerHTML = ""; // emptying the HTML because we will add new elements with classes and span tag from the ForEach

graphTextArray.forEach(function(e, index) {
    let newClass = document.createElement("span");
    newClass.classList.add("g-anim-1");
    newClass.innerHTML = e;
    graphText.appendChild(newClass);
});

gsap
    .from(".g-anim-1", {
        scrollTrigger: "#graph-heading",
        stagger: {
            each: 0.05,
            from: "start",
        },
        opacity: 0,
        y: 10,
        delay: 0.5,
        duration: 0.4,
        ease: Power4.easeOut,
    })
    .then((x) => {
        chart = new Chart(ctx, {
            type: "line", // we can create bar , pie ,doughnut
            data: {
                labels: [
                    "1500s",
                    "1600s",
                    "1700s",
                    "1800s",
                    "1900s",
                    "2000s",
                    "Unknown",
                ], // span of centuries
                datasets: [{
                    label: "Number Of Extinction",
                    data: [45, 30, 70, 110, 550, 15, 300], // number of species gone extinct over the respective centuries
                    backgroundColor: "#3bb78f",
                    borderColor: "#3bb78f",
                    pointBackgroundColor: "#026144",
                    pointBorderColor: "#dcf0ff",
                    pointRadius: 5,
                    pointHoverBackgroundColor: "#dcf0ff",
                    pointHoverRadius: 10,
                }, ],
            },

            options: {
                defaultFontColor: "#dcf0ff",
                responsive: true,
                maintainAspectRatio: false,
                responsiveAnimationDuration: 1000,
                animation: {
                    duration: 1500,
                    easing: "easeInOutBack",
                },
                legend: {
                    labels: {
                        fontColor: "#dcf0ff",
                    },
                },
                data: {
                    labels: {
                        fontColor: "#dcf0ff",
                    },
                },
                title: {
                    display: true,
                    text: "Total Extinctions",
                    fontSize: 20,
                    fontColor: " #3bb78f",
                },
            },
        });
    });

let rule = CSSRulePlugin.getRule(".g-anim-2::before");

gsap.from(".g-anim-2", {
    scrollTrigger: "#graph-heading",
    duration: 0.5,
    y: 20,
    stagger: 0.1,
    delay: 1,
});
gsap.to(rule, {
    scrollTrigger: "#graph-heading",
    duration: 1.8,
    delay: 1,
    cssRule: {
        scaleY: 0,
    },
    stagger: {
        each: 0,
    },
});

function chartUpdate(Reference) {
    if (Reference === "Animals") {
        chart.data.datasets[0].data = [
            45 - 14,
            30 - 10,
            70 - 30,
            110 - 80,
            550 - 220,
            15 - 8,
            300 - 100,
        ];
        chart.options.title.text = "Total Animals Gone Extinct";
    } else if (Reference === "Plantae") {
        chart.data.datasets[0].data = [14, 10, 30, 80, 220, 8, 100];
        chart.options.title.text = "Total Plantae Gone Extinct";
    } else if (Reference === "All") {
        chart.data.datasets[0].data = [45, 30, 70, 110, 550, 15, 300];
        chart.options.title.text = "Total Extinctions";
    }
    chart.update();
}

animalButton.addEventListener("click", () => {
    chartUpdate("Animals");
    console.log("got clicked");
});

plantButton.addEventListener("click", () => {
    chartUpdate("Plantae");
    console.log("got clicked");
});

allButton.addEventListener("click", () => {
    chartUpdate("All");
    console.log("got clicked");
});