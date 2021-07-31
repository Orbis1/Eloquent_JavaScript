function asTabs(node) {
    const divs = [...node.children];
    const tabs = divs.map(div => {
        const tab = document.createElement("button");
        tab.textContent = div.getAttribute("data-tabname");
        tab.className = "inactive";
        return tab;
    });
    hideAllTabs(divs);

    const firstChild = node.children[0];
    for (tab of tabs) {
        node.insertBefore(tab, firstChild);
    }

    function hideAllTabs(arr) {
        for (div of arr) {
            div.style = "display: none";
        }
    }

    function inactiveButtons(arr) {
        for (const tab of arr) {
            tab.className = "inactive";
        }
    }

    tabs[0].className = "active";

    node.addEventListener("click", ({ target }) => {
        hideAllTabs(divs);
        const div = document.querySelector(`div[data-tabname = ${target.textContent}`);
        div.style = "display: block";
        inactiveButtons(tabs)
        target.className = "active";
    });
}

asTabs(document.querySelector("tab-panel"));

