window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
        const scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop,
            scrollHeight = document.body.scrollTop ? document.body.scrollHeight : document.documentElement.scrollHeight,
            schedule = (scrollTop / scrollHeight * 1000 / 9).toFixed(2);
        document.querySelector(".colorBlock").style["transform"] = "translateX(-" + (scrollTop / scrollHeight * 800 / 9).toFixed(2) + "%)";
        synopsis(schedule);
        indicator(schedule);
        business(schedule);
        project(schedule);
        team(schedule);
        liaison(schedule);
    })
});
const indicator = event => {
    const path = document.querySelectorAll(".indicator path"),
        span = document.querySelectorAll(".indicator span");
    if (event < 12.5 || event > 37.5) {
        path[0].style["fill"] = "rgba(255, 255, 255, 0.5)";
        span[0].style["transform"] = "translateX(100%)";
        span[0].style["opacity"] = 0;
    } else if (event > 12.5 && event < 25) {
        const percentage = event * 8 - 100;
        path[0].style["fill"] = "rgba(255, 255, 255, " + (0.5 + 0.005 * percentage).toFixed(2) + ")";
        span[0].style["transform"] = "translateX(" + (100 - percentage) + "%)";
        span[0].style["opacity"] = (percentage / 100).toFixed(2);
    } else if (event > 25 && event < 37.5) {
        const percentage = event * 8 - 200;
        path[0].style["fill"] = "rgba(255, 255, 255, " + (1 - 0.005 * percentage).toFixed(2) + ")";
        span[0].style["transform"] = "translateX(" + percentage + "%)";
        span[0].style["opacity"] = (1 - percentage / 100).toFixed(2);
    }
    if (event < 37.5 || event > 62.5) {
        path[1].style["fill"] = "rgba(255, 255, 255, 0.5)";
        span[1].style["transform"] = "translateX(100%)";
        span[1].style["opacity"] = 0;
    } else if (event > 37.5 && event < 50) {
        const percentage = event * 8 - 300;
        path[1].style["fill"] = "rgba(255, 255, 255, " + (0.5 + 0.005 * percentage).toFixed(2) + ")";
        span[1].style["transform"] = "translateX(" + (100 - percentage) + "%)";
        span[1].style["opacity"] = (percentage / 100).toFixed(2);
    } else if (event > 50 && event < 62.5) {
        const percentage = event * 8 - 400;
        path[1].style["fill"] = "rgba(255, 255, 255, " + (1 - 0.005 * percentage).toFixed(2) + ")";
        span[1].style["transform"] = "translateX(" + percentage + "%)";
        span[1].style["opacity"] = (1 - percentage / 100).toFixed(2);
    }
    if (event < 62.5 || event > 87.5) {
        path[2].style["fill"] = "rgba(255, 255, 255, 0.5)";
        span[2].style["transform"] = "translateX(100%)";
        span[2].style["opacity"] = 0;
    } else if (event > 62.5 && event < 75) {
        const percentage = event * 8 - 500;
        path[2].style["fill"] = "rgba(255, 255, 255, " + (0.5 + 0.005 * percentage).toFixed(2) + ")";
        span[2].style["transform"] = "translateX(" + (100 - percentage) + "%)";
        span[2].style["opacity"] = (percentage / 100).toFixed(2);
    } else if (event > 75 && event < 87.5) {
        const percentage = event * 8 - 600;
        path[2].style["fill"] = "rgba(255, 255, 255, " + (1 - 0.005 * percentage).toFixed(2) + ")";
        span[2].style["transform"] = "translateX(" + percentage + "%)";
        span[2].style["opacity"] = (1 - percentage / 100).toFixed(2);
    }
    if (event < 87.5) {
        path[3].style["fill"] = "rgba(255, 255, 255, 0.5)";
        span[3].style["transform"] = "translateX(100%)";
        span[3].style["opacity"] = 0;
    } else if (event > 87.5 && event < 100) {
        const percentage = event * 8 - 700;
        path[3].style["fill"] = "rgba(255, 255, 255, " + (0.5 + 0.005 * percentage).toFixed(2) + ")";
        span[3].style["transform"] = "translateX(" + (100 - percentage) + "%)";
        span[3].style["opacity"] = (percentage / 100).toFixed(2);
    } else if (event > 100) {
        path[3].style["fill"] = "rgba(255, 255, 255, 1)";
        span[3].style["transform"] = "translateX(0)";
        span[3].style["opacity"] = 1;
    }
};
const synopsis = event => {
    const synopsis = document.querySelector(".synopsis");
    if (event < 6.25) {
        synopsis.style["transform"] = "translateY(0)";
        synopsis.style["opacity"] = 1;
    } else if (event > 6.25 && event < 18.75) {
        const percentage = event * 8 - 50;
        synopsis.style["transform"] = "translateY(" + percentage + "%)";
        synopsis.style["opacity"] = (1 - percentage / 100).toFixed(2);
    } else if (event > 18.75) {
        synopsis.style["transform"] = "translateY(100%)";
        synopsis.style["opacity"] = 0;
    }
};
const business = event => {
    const span = document.querySelector(".business > span");
    if (event < 12.5 || event > 37.5) {
        span.style["transform"] = "translateY(-100%)";
        span.style["opacity"] = 0;
    } else if (event > 12.5 && event < 20) {
        const percentage = event * 8 - 100;
        span.style["transform"] = "translateY(-" + (100 - percentage) + "%)";
        span.style["opacity"] = (percentage / 100).toFixed(2);
    } else if (event > 20 && event < 30) {
        span.style["transform"] = "translateY(0)";
        span.style["opacity"] = 1;
    } else if (event > 30 && event < 37.5) {
        const percentage = event * 8 - 240;
        span.style["transform"] = "translateY(-" + percentage + "%)";
        span.style["opacity"] = (1 - percentage / 100).toFixed(2);
    }
    const div = document.querySelectorAll(".business > div");
    for (let i = 0; i < div.length; i++) {
        const v = i * 1.5625;
        if (event < 12.5 + v || event > 31.25 + v) {
            div[i].style["transform"] = "translateY(100%)";
            div[i].style["opacity"] = 0;
        } else if (event > 12.5 + v && event < 16.25 + v) {
            const percentage = event * 16 - 200 - v * 16;
            div[i].style["transform"] = "translateY(" + (100 - percentage) + "%)";
            div[i].style["opacity"] = (percentage / 100).toFixed(2);
        } else if (event > 16.25 + v && event < 26.25 + v) {
            div[i].style["transform"] = "translateY(0)";
            div[i].style["opacity"] = 1;
        } else if (event > 26.25 + v && event < 31.25 + v) {
            const percentage = event * 16 - 420 - v * 16;
            div[i].style["transform"] = "translateY(" + percentage + "%)";
            div[i].style["opacity"] = (1 - percentage / 100).toFixed(2);
        }
    }
};
const project = event => {
    const span = document.querySelector(".project > span");
    if (event < 37.5 || event > 62.5) {
        span.style["transform"] = "translateY(-100%)";
        span.style["opacity"] = 0;
    } else if (event > 37.5 && event < 45) {
        const percentage = event * 8 - 300;
        span.style["transform"] = "translateY(-" + (100 - percentage) + "%)";
        span.style["opacity"] = (percentage / 100).toFixed(2);
    } else if (event > 45 && event < 55) {
        span.style["transform"] = "translateY(0)";
        span.style["opacity"] = 1;
    } else if (event > 55 && event < 62.5) {
        const percentage = event * 8 - 440;
        span.style["transform"] = "translateY(-" + percentage + "%)";
        span.style["opacity"] = (1 - percentage / 100).toFixed(2);
    }
    const div = document.querySelectorAll(".project > div");
    for (let value of div) {
        if (event < 37.5 || event > 62.5) {
            value.style["transform"] = "translateX(-100%)";
            value.style["opacity"] = 0;
        } else if (event > 37.5 && event < 45) {
            const percentage = event * 8 - 300;
            value.style["transform"] = "translateX(-" + (100 - percentage) + "%)";
            value.style["opacity"] = (percentage / 100).toFixed(2);
        } else if (event > 45 && event < 55) {
            value.style["transform"] = "translateX(0)";
            value.style["opacity"] = 1;
        } else if (event > 55 && event < 62.5) {
            const percentage = event * 8 - 440;
            value.style["transform"] = "translateX(-" + percentage + "%)";
            value.style["opacity"] = (1 - percentage / 100).toFixed(2);
        }
    }
};
const team = event => {
    const span = document.querySelector(".team > span");
    if (event < 62.5 || event > 87.5) {
        span.style["transform"] = "translateY(-100%)";
        span.style["opacity"] = 0;
    } else if (event > 62.5 && event < 70) {
        const percentage = event * 8 - 500;
        span.style["transform"] = "translateY(-" + (100 - percentage) + "%)";
        span.style["opacity"] = (percentage / 100).toFixed(2);
    } else if (event > 70 && event < 80) {
        span.style["transform"] = "translateY(0)";
        span.style["opacity"] = 1;
    } else if (event > 80 && event < 87.5) {
        const percentage = event * 8 - 640;
        span.style["transform"] = "translateY(-" + percentage + "%)";
        span.style["opacity"] = (1 - percentage / 100).toFixed(2);
    }
    const div = document.querySelectorAll(".team > div");
    for (let i = 0; i < div.length; i++) {
        const v = i * 1.5625;
        if (event < 62.5 + v || event > 81.25 + v) {
            div[i].style["transform"] = "translateY(100%)";
            div[i].style["opacity"] = 0;
        } else if (event > 62.5 + v && event < 66.25 + v) {
            const percentage = event * 16 - 1000 - v * 16;
            div[i].style["transform"] = "translateY(" + (100 - percentage) + "%)";
            div[i].style["opacity"] = (percentage / 100).toFixed(2);
        } else if (event > 66.25 + v && event < 76.25 + v) {
            div[i].style["transform"] = "translateY(0)";
            div[i].style["opacity"] = 1;
        } else if (event > 76.25 + v && event < 81.25 + v) {
            const percentage = event * 16 - 1220 - v * 16;
            div[i].style["transform"] = "translateY(" + percentage + "%)";
            div[i].style["opacity"] = (1 - percentage / 100).toFixed(2);
        }
    }
};
const liaison = event => {
    const liaison = document.querySelector(".liaison");
    if (event < 81.25) {
        liaison.style["transform"] = "translateX(100%)";
        liaison.style["opacity"] = 0;
    } else if (event > 81.25 && event < 93.75) {
        const percentage = event * 8 - 650;
        liaison.style["transform"] = "translateX(" + (100 - percentage) + "%)";
        liaison.style["opacity"] = (percentage / 100).toFixed(2);
    } else if (event > 93.75) {
        liaison.style["transform"] = "translateX(0)";
        liaison.style["opacity"] = 1;
    }
};